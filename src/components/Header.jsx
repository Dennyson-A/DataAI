import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useState, useRef, useEffect } from "react";

const Header = () => {

  const navigate = useNavigate();
  const { user, logout } = useAuthContext();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // 🔥 close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="container mx-auto px-6 py-6 flex justify-between items-center">

      {/* LEFT */}
      <div
        className="flex items-center space-x-3 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <ChevronLeft className="w-6 h-6 text-blue-200 hidden sm:block" />

        <span className="font-bold text-lg text-blue-50">
          Dynamic Dataset Construction (LLM-OWL)
        </span>
      </div>

      {/* RIGHT */}
      <div className="flex items-center space-x-4">

        {user ? (
          <div className="relative" ref={dropdownRef}>

            {/* USER BUTTON */}
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 cursor-pointer bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20 transition"
            >
              {/* Avatar */}
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              {user?.username?.[0]?.toUpperCase() || "U"}
              </div>

              {/* Name */}
              <span className="text-white text-sm">
                {user?.username || "User"}
              </span>
            </div>

            {/* DROPDOWN */}
            {open && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg p-2 w-32 z-50">

                <button
                  onClick={() => {
                    logout();
                    navigate("/login"); // ✅ better than window reload
                  }}
                  className="w-full text-left text-sm px-3 py-2 hover:bg-gray-100 rounded"
                >
                  Logout
                </button>

              </div>
            )}

          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-white transition"
          >
            Login
          </button>
        )}

      </div>

    </header>
  );
};

export default Header;