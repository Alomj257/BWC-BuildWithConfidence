import React, { useState } from "react";
import "./AuthPage.css";
import authLogin, {
  forgetPassword,
  resetPassword,
  verififyOtp,
} from "../../service/AuthService";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const AuthPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState("login");
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      const response = await authLogin(username, password);
      console.log(response);
      console.log("Login successful, token:", response);
      setAuth({ ...auth, user: response?.user, token: response?.token });
      // Cookie.set("auth", JSON.stringify(response), { expires: 1 / 24 });
      Cookies.set("auth", JSON.stringify(response));
      setUsername("");
      setPassword("");
      navigate("/admin");
    } catch (error) {
      setError(error);
      setUsername("");
      setPassword("");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setStep("forgotPassword");
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    if (!username) {
      setError("enter your email id");
      return;
    }
    try {
      const response = await forgetPassword({ email: username });
      console.log(response);
      console.log("forget successful, res:", response);
      setStep("verifyCode");
      toast.success(response);
    } catch (error) {
      console.log(error);
      setError(error);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      if (!verificationCode) {
        setError("Enter your OTP");
      }
      const response = await verififyOtp({ otp: verificationCode });
      console.log(response);
      console.log("verify successful, res:", response);
      setStep("resetPassword");
      toast.success(response);
    } catch (error) {
      console.log(error);
      setError(error);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };
  const ResetPassword = async (e) => {
    e.preventDefault();
    try {
      if (!newPassword || !confirmPassword) {
        setError("Enter your OTP");
        return;
      }
      console.log(username);
      const response = await resetPassword(
        username,
        newPassword,
        confirmPassword
      );
      console.log(response);
      console.log("verify successful, res:", response);
      setStep("login");
      toast.success(response);
    } catch (error) {
      console.log(error);
      setError(error);
      setTimeout(() => {
        setError("");
      }, 1000);
    }
  };
  return (
    <div>
      <div class="container">
        <div class="forms-container">
          <div class="form-control signup-form">
            <form action="#">
              <h2>Signup</h2>
              <input type="text" placeholder="Username" required />
              <input
                type="email"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Email"
                required
              />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Confirm password"
                required
              />
              <button>Signup</button>
            </form>
            <span>or signup with</span>
            <div class="socials">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-google-plus-g"></i>
              <i class="fab fa-linkedin-in"></i>
            </div>
          </div>
          <div class="form-control signin-form">
            <form action="#">
              <h2>Signin</h2>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
              />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <button>Signin</button>
            </form>
            <span>or signin with</span>
            <div class="socials">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-google-plus-g"></i>
              <i class="fab fa-linkedin-in"></i>
            </div>
          </div>
        </div>
        <div class="intros-container">
          <div class="intro-control signin-intro">
            <div class="intro-control__inner">
              <h2>Welcome back!</h2>
              <p>
                Welcome back! We are so happy to have you here. It's great to
                see you again. We hope you had a safe and enjoyable time away.
              </p>
              <button id="signup-btn">No account yet? Signup.</button>
            </div>
          </div>
          <div class="intro-control signup-intro">
            <div class="intro-control__inner">
              <h2>Come join us!</h2>
              <p>
                We are so excited to have you here.If you haven't already,
                create an account to get access to exclusive offers, rewards,
                and discounts.
              </p>
              <button id="signin-btn">Already have an account? Signin.</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
