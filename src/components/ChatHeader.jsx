// src/components/ChatHeader.jsx
export default function ChatHeader({ setIsOpen }) {
    return (
      <div className="flex items-center justify-between mb-4">
        
        {/* Left section */}
        <div className="flex items-center gap-3">
          
          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>
  
          <h1 className="text-xl font-semibold text-gray-700">
            AI Data Assistant
          </h1>
        </div>
      </div>
    );
  }