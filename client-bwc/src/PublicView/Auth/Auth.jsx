// import React, { useState } from "react";
// import Cookie from "js-cookie";
// import "./AdminLogin.css";
// import adminLogin from "../../services/adminService";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// const AdminLogin = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const [auth, setAuth] = useAuth();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (!username || !password) {
//       setError("Please fill in all fields.");
//       return;
//     }
//     try {
//       const response = await adminLogin(username, password);
//       console.log(response);
//       console.log("Login successful, token:", response);
//       setAuth({ ...auth, user: response?.admin, token: response?.token });
//       // localStorage.setItem("auth", JSON.stringify(response));
//       Cookie.set("auth", JSON.stringify(response), { expires: 1 / 24 });
//       // Clear username and password after successful login
//       setUsername("");
//       setPassword("");
//       // Redirect user to admin panel
//       navigate("/admin"); // Use navigate function to navigate to the admin panel route
//     } catch (error) {
//       setError(error);
//       setUsername("");
//       setPassword("");
//       // Clear error message after 1 second
//       setTimeout(() => {
//         setError("");
//       }, 1500);
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <div id="main-wrapper" className="container">
//         <div className="row justify-content-center">
//           <div className="col-xl-6">
//             <div className="card border-1">
//               <div className="card-body p-5">
//                 <div className="mb-5">
//                   <h3 className="h4 font-weight-bold text-theme">
//                     Admin Login
//                   </h3>
//                 </div>

//                 <h6 className="h5 mb-0">Welcome back!</h6>
//                 <p className="text-muted mt-2 mb-4">
//                   Enter your email address and password to access admin panel.
//                 </p>

//                 {error && <p className="error-message">{error}</p>}

//                 <form onSubmit={handleLogin}>
//                   <div className="form-group mb-4">
//                     <input
//                       type="email"
//                       name="email"
//                       className="form-control"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                       placeholder="Email"
//                     />
//                   </div>
//                   <div className="form-group mb-4">
//                     <input
//                       type="password"
//                       name="password"
//                       className="form-control"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="Password"
//                     />
//                   </div>
//                   <a href="#forgot-password" className="forgot-link">
//                     Forgot password?
//                   </a>
//                   <button
//                     type="submit"
//                     className="btn btn-primary btn-block mt-2"
//                   >
//                     Login
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;

import React, { useState } from "react";
import Cookie from "js-cookie";
import { toast } from "react-toastify";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import authLogin, {
  forgetPassword,
  resetPassword,
  verififyOtp,
} from "../../service/AuthService";

const Auth = () => {
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
      Cookie.set("auth", JSON.stringify(response));
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
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div id="main-wrapper" className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="card border-1">
              <div className="card-body p-5">
                <div className="mb-5">
                  <h3 className="h4 font-weight-bold text-theme">
                    {step === "login" ? "Admin Login" : "Forgot Password"}
                  </h3>
                </div>

                {step === "login" && (
                  <>
                    <h6 className="h5 mb-0">Welcome back!</h6>
                    <p className="text-muted mt-2 mb-4">
                      Enter your email address and password to access admin
                      panel.
                    </p>

                    {error && <p className="error-message">{error}</p>}

                    <form onSubmit={handleLogin}>
                      <div className="form-group mb-4">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group mb-4">
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                        />
                      </div>
                      <a
                        href="#forgot-password"
                        className="forgot-link"
                        onClick={handleForgotPassword}
                      >
                        Forgot password?
                      </a>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mt-2"
                      >
                        Login
                      </button>
                    </form>
                  </>
                )}

                {step === "forgotPassword" && (
                  <>
                    <p className="text-muted mt-2 mb-4">
                      Enter your email address to receive a verification code
                      for password reset.
                    </p>
                    <form onSubmit={handleVerifyCode}>
                      <div className="form-group mb-4">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Email"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mt-2"
                      >
                        Send Verification Code
                      </button>
                    </form>
                  </>
                )}

                {step === "verifyCode" && (
                  <>
                    <p className="text-muted mt-2 mb-4">
                      Enter the verification code sent to your email.
                    </p>
                    <form onSubmit={handleResetPassword}>
                      <div className="form-group mb-4">
                        <input
                          type="text"
                          name="verificationCode"
                          className="form-control"
                          value={verificationCode}
                          onChange={(e) => setVerificationCode(e.target.value)}
                          placeholder="Verification Code"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mt-2"
                      >
                        Verify Code
                      </button>
                    </form>
                  </>
                )}

                {step === "resetPassword" && (
                  <>
                    <p className="text-muted mt-2 mb-4">
                      Enter your new password and confirm password.
                    </p>
                    <form onSubmit={ResetPassword}>
                      <div className="form-group mb-4">
                        <input
                          type="password"
                          name="newPassword"
                          className="form-control"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="New Password"
                        />
                      </div>
                      <div className="form-group mb-4">
                        <input
                          type="password"
                          name="confirmPassword"
                          className="form-control"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Confirm New Password"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mt-2"
                      >
                        Reset Password
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
