import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import ChatHeader from "../components/ChatHeader";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";

import { useChat } from "../hooks/useChat";
import { getAllChats } from "../services/chatService";

export default function ChatPage() {

  const navigate = useNavigate();

  const {
    messages,
    startNewChat,
    sendMessage,
    loadHistory,
    sessionId,
    loading
  } = useChat();

  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const bottomRef = useRef(null);

  // 🔐 protect route
  useEffect(() => {
    const token = localStorage.getItem("access");
    if (!token) navigate("/login");
  }, []);

  // 🚀 SMART INIT (FIXED)
  useEffect(() => {
    const init = async () => {

      const savedSession = localStorage.getItem("session_id");
  
      if (savedSession) {
        try {
          await loadHistory(savedSession);
          return;
        } catch (err) {
          console.log("Invalid session, creating new...");
          localStorage.removeItem("session_id");
        }
      }
  
      // 🔥 new user case
      // await startNewChat();

      useEffect(() => {
        const init = async () => {
          const savedSession = localStorage.getItem("session_id");
      
          if (savedSession) {
            try {
              await loadHistory(savedSession);
            } catch {
              localStorage.removeItem("session_id");
            }
          }
          // ✅ NO auto chat creation
        };
      
        init();
      }, []);

    };
  
    init();
  }, []);

  // 🔽 auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // 🚀 SEND MESSAGE
  const handleSend = async () => {
    if (!input.trim() || loading ) return;

    await sendMessage(input);
    setInput("");
  };

  // 🔥 suggestions
  const suggestions = [
    "Which state spends the most on food?",
    "Compare urban vs rural expenditure",
    "Show digital access trends"
  ];

  return (
    <div className="flex h-screen overflow-hidden">

      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSelectChat={(id) => loadHistory(id)}
        onNewChat={startNewChat}
        sessionId={sessionId}
      />

      <div className="flex-1 flex flex-col bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] p-4 md:p-6">

        <ChatHeader setIsOpen={setIsOpen} />

        {/* Messages */}
        <div className="flex flex-col gap-4 flex-1 overflow-y-auto">

          {/* EMPTY STATE */}
          {messages.length === 0 && (
            <div className="text-center text-gray-400 mt-10 space-y-3">
              <p>Start a conversation 🚀</p>

              <div className="flex flex-wrap justify-center gap-2">
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setInput(s)}
                    className="px-3 py-1 bg-white rounded-full text-sm shadow"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* MESSAGES */}
          {messages.map((msg, index) => (
            <ChatMessage
              key={index}
              type={msg.type}                
              text={msg.message || msg.text}
              fileUrl={msg.file_url}
            />
          ))}

          {/* LOADING */}
          {loading && (
            <div className="text-gray-500 text-sm italic self-start">
              AI is thinking...
            </div>
          )}

          <div ref={bottomRef}></div>
        </div>

        {/* INPUT */}
        <ChatInput
          input={input}
          setInput={setInput}
          handleSend={handleSend}
          disabled={loading}
        />

      </div>
    </div>
  );
}