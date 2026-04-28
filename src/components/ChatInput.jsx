export default function ChatInput({
  input,
  setInput,
  handleSend,
  disabled = false // ✅ default value prevents crash
}) {
  return (
    <div className="flex items-center gap-3 mt-4 bg-white rounded-xl px-4 py-2 shadow">

  <input
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Ask anything about the dataset..."
    className="flex-1 outline-none text-sm"
    onKeyDown={(e) => {
      if (e.key === "Enter") handleSend();
    }}
  />

  <button
    onClick={handleSend}
    disabled={disabled}
    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
  >
    Send
  </button>

</div>
  );
}