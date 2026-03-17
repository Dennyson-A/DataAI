// src/components/ChatMessage.jsx
import { motion } from "framer-motion";

export default function ChatMessage({ type, text }) {
  const isUser = type === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`max-w-md px-4 py-3 rounded-2xl text-sm shadow-md ${
        isUser
          ? "self-end bg-white"
          : "self-start bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
      }`}
    >
      {text}
    </motion.div>
  );
}