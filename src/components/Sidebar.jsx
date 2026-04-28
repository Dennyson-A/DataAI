import { useEffect, useState } from "react";
import { BarChart3, Plus } from "lucide-react";
import { useAuthContext } from "../context/AuthContext";
import { getAllChats } from "../services/chatService";

export default function Sidebar({
  isOpen,
  setIsOpen,
  onSelectChat,
  onNewChat,
  sessionId
}) {

  const [chats, setChats] = useState([]);
  const { user } = useAuthContext();

  // 🔥 FETCH ALL CHATS + LIVE UPDATE
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await getAllChats();
        setChats(res.data);
      } catch (err) {
        console.error("Error fetching chats", err);
      }
    };

    fetchChats();

    // 🔥 listen for updates
    window.addEventListener("newChatCreated", fetchChats);
    window.addEventListener("refreshChats", fetchChats);

    return () => {
      window.removeEventListener("newChatCreated", fetchChats);
      window.removeEventListener("refreshChats", fetchChats);
    };
  }, []);

  // 🔥 NEW CHAT (ONLY RESET UI)
  const handleNewChat = () => {
    onNewChat();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-screen w-72 
        bg-gradient-to-b from-[#0b1220] via-[#111827] to-[#1f2937]
        text-gray-200 p-5 flex flex-col z-50
        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Mobile Header */}
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-xl font-bold text-white tracking-wide">
            LLM Ontology Explorer
          </h1>
          <p className="text-xs text-gray-400">
            Smart analytics assistant
          </p>
        </div>

        {/* NEW CHAT BUTTON */}
        <button
          onClick={handleNewChat}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition rounded-xl py-3 font-medium shadow-lg mb-6"
        >
          <Plus size={18} />
          New Chat
        </button>

        {/* LABEL */}
        <p className="text-xs text-gray-400 uppercase mb-3 tracking-wider">
          Chat History
        </p>

        {/* CHAT LIST */}
        <div className="flex flex-col gap-2 overflow-y-auto">

          {chats.map((chat, index) => (
            <div
              key={chat.session_id || index}
              onClick={() => onSelectChat(chat.session_id)}
              className={`group flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer
              transition-all duration-200
              ${
                sessionId === chat.session_id
                  ? "bg-white/20 border border-white/30"
                  : "hover:bg-white/10"
              }`}
            >
              <div className="text-blue-400">
                <BarChart3 size={18} />
              </div>

              <span className="text-sm font-medium truncate">
                {chat.title || chat.last_query || `Chat ${index + 1}`}
              </span>
            </div>
          ))}

        </div>

        {/* USER */}
        <div className="mt-auto pt-6 border-t border-white/10">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10 cursor-pointer transition">
            
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
              {user?.username?.[0]?.toUpperCase() || "U"}
            </div>

            <div>
              <p className="text-sm font-medium">
                {user?.username || "User"}
              </p>
              <p className="text-xs text-gray-400">Active</p>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}