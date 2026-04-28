import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import { useAuth } from "../hooks/useAuth";
import { useAuthContext } from "../context/AuthContext";

import aiImage from "../assets/images/ai-network-bg.png";
import logo from "../assets/images/logo.png";

const Auth = () => {

  const navigate = useNavigate();

  const {
    handleSignup,
    handleVerifyOtp,
    handleSetPassword,
    handleLogin,
    loading,
    error
  } = useAuth();

  const { login, user } = useAuthContext();

  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [otp, setOtp] = useState(["","","","","",""]);
  const otpRefs = useRef([]);

  // ✅ Navigate when user is set (SAFE WAY)
  useEffect(() => {
    if (user) {
      navigate("/chat");
    }
  }, [user, navigate]);

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      otpRefs.current[index + 1].focus();
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 relative bg-gradient-to-br from-blue-900 to-purple-900 overflow-hidden">
        <img src={aiImage} className="absolute inset-0 w-full h-full object-cover opacity-80 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>

        <div className="absolute top-6 left-6 flex items-center space-x-2 text-white z-20">
          <img src={logo} className="w-8 h-8"/>
          <span className="font-semibold text-lg">LLM Ontology Explorer</span>
        </div>

        <div className="absolute bottom-10 left-10 text-white max-w-sm z-20">
          <h2 className="text-xl font-semibold mb-2">Understand Data Like Never Before</h2>
          <p className="text-blue-200 text-sm">
            Ask. Analyze. Discover insights instantly with AI.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-black px-6">
        <div className="w-full max-w-md text-white">

          <h1 className="text-3xl font-bold mb-2">Welcome!</h1>

          {/* ERROR */}
          {error && (
            <p className="text-red-400 text-sm mb-2">
              {error?.detail || error?.message || "Something went wrong"}
            </p>
          )}

          {/* LOGIN */}
          {mode === "login" && (
            <div className="space-y-4">

              <input
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full p-3 bg-white/10 rounded-lg"
              />

              <div className="flex items-center bg-white/10 rounded-lg px-3">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  className="w-full py-3 bg-transparent"
                />
                <button onClick={()=>setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff/> : <Eye/>}
                </button>
              </div>

              <button
                disabled={loading}
                onClick={async () => {
                  const res = await handleLogin({ email, password });
                  if (res) {
                    login(res);
                    navigate("/chat", { replace: true });
                  }
                }}
                className="w-full bg-blue-600 py-3 rounded-lg"
              >
                {loading ? "Loading..." : "Login"}
              </button>

              <p className="text-sm text-blue-300 text-center">
                Don’t have an account?
                <button
                  onClick={()=>setMode("signup")}
                  className="underline ml-1"
                >
                  Sign up
                </button>
              </p>

            </div>
          )}

          {/* SIGNUP */}
          {mode === "signup" && (
            <div className="space-y-4">

              <input
                placeholder="Full Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="w-full p-3 bg-white/10 rounded-lg"
              />

              <input
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full p-3 bg-white/10 rounded-lg"
              />

              <button
                disabled={loading}
                onClick={async ()=>{
                  const res = await handleSignup({ username: name, email });
                  if (res) setMode("otp");
                }}
                className="w-full bg-blue-600 py-3 rounded-lg"
              >
                {loading ? "Sending..." : "Send OTP"}
              </button>

            </div>
          )}

          {/* OTP */}
          {mode === "otp" && (
            <div className="space-y-5">

              <p className="text-sm text-blue-300">
                Check your email. Enter OTP
              </p>

              <div className="flex gap-2">
                {otp.map((digit,i)=>(
                  <input
                    key={i}
                    ref={(el)=>otpRefs.current[i]=el}
                    value={digit}
                    onChange={(e)=>handleOtpChange(e,i)}
                    maxLength={1}
                    className="w-12 h-12 text-center bg-white/10 rounded-lg"
                  />
                ))}
              </div>

              <button
                disabled={loading}
                onClick={async ()=>{
                  const res = await handleVerifyOtp({
                    email,
                    otp: otp.join("")
                  });
                  if (res) setMode("password");
                }}
                className="w-full bg-blue-600 py-3 rounded-lg"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>

            </div>
          )}

          {/* PASSWORD */}
          {mode === "password" && (
            <div className="space-y-4">

              <input
                type="password"
                placeholder="Create Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full p-3 bg-white/10 rounded-lg"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                className="w-full p-3 bg-white/10 rounded-lg"
              />

              <button
                  disabled={loading}
                  onClick={async () => {
                    if (password !== confirmPassword) {
                      alert("Passwords do not match");
                      return;
                    }

                    const res1 = await handleSetPassword({ email, password });
                    if (!res1) return;

                    const res2 = await handleLogin({ email, password });
                    if (res2) {
                      login(res2);
                      navigate("/chat", { replace: true });
                    }
                  }}
                  className="w-full bg-blue-600 py-3 rounded-lg"
                >
                  {loading ? "Creating..." : "Create Account"}
                </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Auth;