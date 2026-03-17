import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatHeader from "../components/ChatHeader";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      type: "user",
      text: "Which state has the highest food expenditure?",
    },
    {
      type: "ai",
      text: "Punjab has the highest food expenditure share (~46%).",
    },
  ]);

  const [input, setInput] = useState("");

  // 👇 NEW STATE
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      { type: "user", text: input },
      { type: "ai", text: "Analyzing data..." },
    ]);

    setInput("");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] p-4 md:p-6">
        
        <ChatHeader setIsOpen={setIsOpen} />

        {/* Messages */}
        <div className="flex flex-col gap-4 flex-1 overflow-y-auto">
          {messages.map((msg, index) => (
            <ChatMessage key={index} type={msg.type} text={msg.text} />
          ))}
        </div>

        {/* Input */}
        <ChatInput
          input={input}
          setInput={setInput}
          handleSend={handleSend}
        />
      </div>
    </div>
  );
}