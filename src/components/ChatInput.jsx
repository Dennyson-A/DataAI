// src/components/ChatInput.jsx
export default function ChatInput({ input, setInput, handleSend }) {
    return (
      <div className="mt-auto flex items-center bg-white rounded-2xl shadow-lg p-2 gap-2">
        
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about the dataset..."
          className="flex-1 px-4 py-2 outline-none text-sm"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
  
        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 transition text-white p-3 rounded-xl shadow-md"
        >
          ➤
        </button>
      </div>
    );
  }