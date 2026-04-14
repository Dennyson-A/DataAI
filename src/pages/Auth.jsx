import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import aiImage from "../assets/images/ai-network-bg.png"; // change anytime
import logo from "../assets/images/logo.png"; // your logo

const Auth = () => {

const navigate = useNavigate();

const [mode, setMode] = useState("login"); // login | signup | otp | password
const [showPassword, setShowPassword] = useState(false);

const otpRefs = useRef([]);

const handleOtpChange = (e, index) => {
const value = e.target.value;

if (!/^[0-9]?$/.test(value)) return;

e.target.value = value;

if (value && index < 5) {
otpRefs.current[index + 1].focus();
}
};

return (

<div className="min-h-screen flex flex-col lg:flex-row">

{/* LEFT SIDE */}
<div className="hidden lg:flex w-1/2 relative bg-gradient-to-br from-blue-900 to-purple-900 overflow-hidden">

{/* IMAGE (BACKGROUND LAYER) */}
<img
  src={aiImage}
  alt="AI Visual"
  className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
/>

{/* DARK OVERLAY */}
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>

{/* LOGO (TOP LAYER) */}
<div className="absolute top-6 left-6 flex items-center space-x-2 text-white z-20">
  <img src={logo} alt="logo" className="w-8 h-8"/>
  <span className="font-semibold text-lg">
    LLM Ontology Explorer
  </span>
</div>

{/* TAGLINE */}
<div className="absolute bottom-10 left-10 text-white max-w-sm z-20">
  <h2 className="text-xl font-semibold mb-2">
    Understand Data Like Never Before
  </h2>
  <p className="text-blue-200 text-sm">
    Ask. Analyze. Discover insights instantly with AI.
  </p>
</div>

</div>

{/* RIGHT SIDE (FORM) */}
<div className="flex flex-1 items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-black px-6">

<div className="w-full max-w-md text-white">

{/* MOBILE HEADER */}
<div className="lg:hidden text-center mb-6">
<img src={logo} className="w-10 mx-auto mb-2"/>
<h1 className="text-xl font-bold">LLM Ontology Explorer</h1>
</div>

{/* TITLE */}
<h1 className="text-3xl font-bold mb-2">
Welcome!
</h1>

<p className="text-blue-300 text-sm mb-6">
Login to continue exploring intelligent insights
</p>

{/* LOGIN */}
{mode === "login" && (
<div className="space-y-4">

<input
placeholder="Email"
className="w-full p-3 rounded-lg bg-white/10 outline-none"
/>

{/* PASSWORD */}
<div className="flex items-center bg-white/10 rounded-lg px-3">
<input
type={showPassword ? "text" : "password"}
placeholder="Password"
className="w-full py-3 bg-transparent outline-none"
/>
<button onClick={() => setShowPassword(!showPassword)}>
{showPassword ? <EyeOff/> : <Eye/>}
</button>
</div>

{/* LOGIN BUTTON */}
<button
onClick={() => {
  // TODO: Add login validation here
  navigate("/"); // redirect to home
}}
className="w-full bg-blue-600 py-3 rounded-lg hover:bg-blue-700"
>
Login
</button>

{/* GOOGLE LOGIN */}
<button className="w-full bg-white text-black py-3 rounded-lg flex items-center justify-center space-x-2">
<img
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
className="w-5"
/>
<span>Continue with Google</span>
</button>

{/* TODO: Google OAuth logic */}

<p className="text-sm text-blue-300 text-center">
Don’t have an account?{" "}
<button onClick={() => setMode("signup")} className="underline">
Sign up
</button>
</p>

</div>
)}

{/* SIGNUP */}
{mode === "signup" && (
<div className="space-y-4">

<input placeholder="Full Name" className="w-full p-3 bg-white/10 rounded-lg"/>
<input placeholder="Email" className="w-full p-3 bg-white/10 rounded-lg"/>

<button
onClick={() => setMode("otp")}
className="w-full bg-blue-600 py-3 rounded-lg"
>
Send OTP
</button>

</div>
)}

{/* OTP */}
{mode === "otp" && (
<div className="space-y-5">

<p className="text-sm text-blue-300">
Check your email. We’ve sent a 6-digit OTP.
</p>

<div className="flex justify-between gap-2">
{[...Array(6)].map((_, i) => (
<input
key={i}
ref={(el) => (otpRefs.current[i] = el)}
maxLength={1}
onChange={(e) => handleOtpChange(e, i)}
className="w-12 h-12 text-center text-lg bg-white/10 rounded-lg outline-none"
/>
))}
</div>

<div className="flex justify-between text-xs text-blue-300">
<span>Resend in 30s</span>
<button className="hover:text-white">Resend OTP</button>
</div>

<button
onClick={() => setMode("password")}
className="w-full bg-blue-600 py-3 rounded-lg"
>
Verify OTP
</button>

</div>
)}

{/* PASSWORD */}
{mode === "password" && (
<div className="space-y-4">

<div className="flex items-center bg-white/10 rounded-lg px-3">
<input
type={showPassword ? "text" : "password"}
placeholder="Create Password"
className="w-full py-3 bg-transparent outline-none"
/>
<button onClick={() => setShowPassword(!showPassword)}>
{showPassword ? <EyeOff/> : <Eye/>}
</button>
</div>

<input
type="password"
placeholder="Confirm Password"
className="w-full p-3 bg-white/10 rounded-lg"
/>

<button
onClick={() => {
  // TODO: Save user details
  navigate("/"); // redirect to home
}}
className="w-full bg-blue-600 py-3 rounded-lg"
>
Create Account
</button>

</div>
)}

</div>

</div>

</div>

);

};

export default Auth;