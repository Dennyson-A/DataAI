// src/components/Sidebar.jsx
import { BarChart3, Home, AlertTriangle, Plus } from "lucide-react";

export default function Sidebar({ isOpen, setIsOpen }) {
  const menuItems = [
    {
      name: "Food Spending Stats",
      icon: <BarChart3 size={18} />,
    },
    {
      name: "Urban vs Rural Comparison",
      icon: <Home size={18} />,
    },
    {
      name: "Economic Vulnerability",
      icon: <AlertTriangle size={18} />,
    },
  ];

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
        {/* Close button */}
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>

        {/* App Logo / Title */}
        <div className="mb-8">
          <h1 className="text-xl font-bold text-white tracking-wide">
            ⚡ Data AI
          </h1>
          <p className="text-xs text-gray-400">
            Smart analytics assistant
          </p>
        </div>

        {/* New Chat Button */}
        <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition rounded-xl py-3 font-medium shadow-lg mb-6">
          <Plus size={18} />
          New Chat
        </button>

        {/* Section Label */}
        <p className="text-xs text-gray-400 uppercase mb-3 tracking-wider">
          Insights
        </p>

        {/* Menu Items */}
        <div className="flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer
              hover:bg-white/10 transition-all duration-200
              hover:shadow-md"
            >
              <div className="text-blue-400 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <span className="text-sm font-medium group-hover:text-white transition">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-auto pt-6 border-t border-white/10">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10 cursor-pointer transition">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
              D
            </div>
            <div>
              <p className="text-sm font-medium">Dennyson</p>
              <p className="text-xs text-gray-400">Pro Plan</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}