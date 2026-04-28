import { useState } from "react";
import * as auth from "../services/authService";

export const useAuth = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignup = async (data) => {
    try {
      setLoading(true);

      const res = await auth.signup(data);

      console.log("SIGNUP RESPONSE:", res.data); // 🔥 DEBUG

      setError(null);
      return res.data; // ✅ IMPORTANT

    } catch (err) {
      console.error("SIGNUP ERROR:", err.response); // 🔥 DEBUG

      setError(err.response?.data || { message: "Signup failed" });
      return null;

    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (data) => {
    try {
      setLoading(true);

      const res = await auth.verifyOtp(data);

      console.log("OTP VERIFY:", res.data);

      setError(null);
      return res.data;

    } catch (err) {
      console.error("OTP ERROR:", err.response);

      setError(err.response?.data || { message: "OTP failed" });
      return null;

    } finally {
      setLoading(false);
    }
  };

  const handleSetPassword = async (data) => {
    try {
      setLoading(true);

      const res = await auth.setPassword(data);

      console.log("SET PASSWORD:", res.data);

      setError(null);
      return res.data;

    } catch (err) {
      console.error("PASSWORD ERROR:", err.response);

      setError(err.response?.data || { message: "Password setup failed" });
      return null;

    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (data) => {
    try {
      setLoading(true);
  
      const res = await auth.login(data);
  
      console.log("LOGIN SUCCESS:", res); // ✅ FIXED
  
      setError(null);
      return res; // ✅ FIXED
  
    } catch (err) {
      console.error("LOGIN ERROR:", err.response);
  
      setError(err.response?.data || { message: "Invalid credentials" });
      return null;
  
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSignup,
    handleVerifyOtp,
    handleSetPassword,
    handleLogin,
    loading,
    error
  };
};