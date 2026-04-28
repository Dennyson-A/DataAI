import { motion } from "framer-motion";
import BASE_URL from "../config";

export default function ChatMessage({ type, text = "", fileUrl }) {

  const isUser = type === "user";

  // ✅ SAFE SPLIT
  const lines = (text || "").split("\n");

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`w-full flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-md px-4 py-3 rounded-2xl text-sm shadow-md ${
          isUser
            ? "bg-white text-gray-800 rounded-br-none"
            : "bg-blue-600 text-white rounded-bl-none"
        }`}
      >

        {/* TEXT + MULTI DOWNLOAD */}
        {lines.map((line, index) => {

          if (line.startsWith("FILE_URL::")) {
            const url = line.replace("FILE_URL::", "").trim();

            return (
              <a
                key={index}
                href={`${BASE_URL}${url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-yellow-200 underline mt-2"
              >
                ⬇ Download File
              </a>
            );
          }

          return (
            <p key={index} className="whitespace-pre-line">
              {line}
            </p>
          );
        })}

        {/* SINGLE QUERY FILE */}
        {fileUrl && (
          <div className="mt-3">
            {fileUrl.endsWith(".png") || fileUrl.endsWith(".jpg") ? (
              <img
                src={`${BASE_URL}${fileUrl}`}
                alt="result"
                className="rounded-lg mt-2 max-h-60"
              />
            ) : (
              <a
                href={`${BASE_URL}${fileUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs underline mt-2 block"
              >
                Download File 📥
              </a>
            )}
          </div>
        )}

      </div>
    </motion.div>
  );
}