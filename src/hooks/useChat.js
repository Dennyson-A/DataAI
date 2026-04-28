import { useState, useEffect } from "react";
import * as chat from "../services/chatService";

export const useChat = () => {

  const [messages, setMessages] = useState([]);
  const [sessionId, setSessionId] = useState(
    localStorage.getItem("session_id") || null
  );
  const [loading, setLoading] = useState(false);

  // ✅ SAVE SESSION
  useEffect(() => {
    if (sessionId) {
      localStorage.setItem("session_id", sessionId);
    }
  }, [sessionId]);

  // 🚀 CREATE NEW CHAT (FIXED)
  const startNewChat = () => {

    setSessionId(null);
    setMessages([]);
  
    localStorage.removeItem("session_id");
  };

  // 🚀 SEND MESSAGE (SAFE)
  const sendMessage = async (query) => {

    let currentSession = sessionId;
  
    // ✅ CREATE CHAT ONLY WHEN FIRST MESSAGE SENT
    if (!currentSession) {
      try {
        const res = await chat.createChat();
  
        currentSession = res.data.session_id;
  
        setSessionId(currentSession);
        localStorage.setItem("session_id", currentSession);
  
        // 🔥 update sidebar
        window.dispatchEvent(new Event("newChatCreated"));
  
      } catch (err) {
        console.error("Chat creation failed", err);
        return;
      }
    }
  
    // ✅ show user message instantly
    setMessages(prev => [
      ...prev,
      { type: "user", message: query }
    ]);
  
    setLoading(true);
  
    try {
      const res = await chat.sendQuery({
        session_id: currentSession,
        query
      });
  
      const data = res.data;
  
      if (data.type === "multi") {
        setMessages(prev => [...prev, ...data.results]);
      } else {
        setMessages(prev => [...prev, data]);
      }
  
      // 🔥 update title after first message
      window.dispatchEvent(new Event("refreshChats"));
  
    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev,
        { type: "ai", message: "Error fetching response ❌" }
      ]);
    }
  
    setLoading(false);
  };

  // 🚀 LOAD HISTORY (FIXED FORMAT)
  const loadHistory = async (id) => {
    try {
      const res = await chat.getHistory(id);

      // ✅ normalize backend data
      const formatted = res.data.map((msg) => ({
        type: msg.type,
        message: msg.message,
        file_url: msg.file_url
      }));

      setSessionId(id);
      setMessages(formatted);

      localStorage.setItem("session_id", id);

    } catch (err) {
      console.error("History load error:", err);
    }
  };

  return {
    messages,
    sessionId,
    startNewChat,
    sendMessage,
    loadHistory,
    loading
  };
};