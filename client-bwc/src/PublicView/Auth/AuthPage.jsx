import React, { useState } from "react";
import "./AuthPage.css";
import authLogin, {
  forgetPassword,
  register,
  resetPassword,
  verififyOtp,
} from "../../service/AuthService";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
const AuthPage = () => {
  const [turn, setTurn] = useState("login");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      console.log(user);
      const res = await register(user);
      if (res.message) {
        toast.error(res.message);
        return;
      }
      toast.success(res);
      setUser({
        ...user,
        email: "",
        password: "",
        firstname: "",
        lastname: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(user);
    if (!user?.email || !user?.password) {
      toast.error("Please fill up all fields.");
      return;
    }
    try {
      const response = await authLogin(user?.email, user?.password);
      console.log(response);
      console.log("Login successful, token:", response);
      setAuth({ ...auth, user: response?.user, token: response?.token });
      // Cookie.set("auth", JSON.stringify(response), { expires: 1 / 24 });
      Cookies.set("auth", JSON.stringify(response));
      setUser({ ...user, user: "", password: "" });
      if (response?.user?.role === "CONSUMER") {
        navigate("/consumer");
      }
      if (response?.user?.role === "TRADEPERSON") {
        navigate("/tradeperson");
      }
    } catch (error) {
      toast.error(error);
      setUser({ ...user, user: "", password: "" });
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setTurn("forgotPassword");
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    if (!user?.email) {
      toast.error("enter your email id");
      return;
    }
    try {
      const response = await forgetPassword({ email: user?.email });
      console.log(response);
      console.log("forget successful, res:", response);
      setTurn("verifyCode");
      toast.success(response);
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      if (!user?.verificationCode) {
        toast.error("Enter your OTP");
      }
      const response = await verififyOtp({ otp: user?.verificationCode });
      console.log(response);
      console.log("verify successful, res:", response);
      setTurn("resetPassword");
      toast.success(response);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  const ResetPassword = async (e) => {
    e.preventDefault();
    try {
      if (!user?.newPassword || !user?.confirmPassword) {
        toast.error("Enter your OTP");
        return;
      }
      console.log(user?.email);
      const response = await resetPassword(
        user?.email,
        user?.newPassword,
        user?.confirmPassword
      );
      console.log(response);
      console.log("verify successful, res:", response);
      setTurn("login");
      toast.success(response);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  console.log(
    handleForgotPassword,
    verififyOtp,
    ResetPassword,
    handleResetPassword,
    handleVerifyCode
  );
  return (
    <>
      <div className="auth-page d-flex ">
        <div
          className={` col-md-6 col-12   left d-flex flex-column h-100  px-0 mx-auto ${
            turn === "login" ? "order-1" : "order-2"
          }`}
        >
          <div className="my-auto w-100 px-md-5 px-2">
            <h3 className="text-center">
              {turn === "login" && "Signin"}
              {turn === "register" && "SignUp"}
            </h3>
            <form
              action=""
              onSubmit={
                (turn === "login" && handleLogin) ||
                (turn === "register" && handleSignUp)
              }
            >
              {turn === "register" && (
                <>
                  <div className="row row-cols-md-2  ">
                    <div className="my-3">
                      <input
                        type="text"
                        name="firstname"
                        value={user?.firstname}
                        onChange={handleChange}
                        className="bg-light w-100  p-3 border-0 rounded"
                        style={{ outline: "none" }}
                        placeholder="Enter First Name"
                      />
                    </div>
                    <div className="my-3">
                      <input
                        type="text"
                        name="lastname"
                        value={user?.lastname}
                        onChange={handleChange}
                        className="bg-light w-100  p-3 border-0 rounded"
                        style={{ outline: "none" }}
                        placeholder="Enter Last Name"
                      />
                    </div>
                  </div>
                </>
              )}
              <div className="my-3">
                <input
                  type="email"
                  name="email"
                  value={user?.email}
                  onChange={handleChange}
                  className="bg-light w-100  p-3 border-0 rounded"
                  style={{ outline: "none" }}
                  placeholder="Username"
                />
              </div>
              <div className="my-3">
                <input
                  type="password"
                  name="password"
                  value={user?.password}
                  onChange={handleChange}
                  className="bg-light w-100 p-3 border-0 rounded"
                  style={{ outline: "none" }}
                  placeholder="Password"
                />
              </div>
              {/* for register */}
              {turn === "register" && (
                <>
                  <div className="my-3">
                    <input
                      type="password"
                      name="cnfPassword"
                      value={user?.cnfPassword}
                      onChange={handleChange}
                      className="bg-light w-100 p-3 border-0 rounded"
                      style={{ outline: "none" }}
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="my-3 ">
                    <dir className="mb-3 fw-bold">Gender</dir>
                    <div className="d-flex">
                      <label htmlFor="male">Male</label>{" "}
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="Male"
                        onChange={handleChange}
                        className="bg-light w-100 p-3 border-0 rounded"
                        style={{ outline: "none" }}
                      />
                      <label htmlFor="female">Female</label>
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="Female"
                        onChange={handleChange}
                        className="bg-light w-100 p-3 border-0 rounded"
                        style={{ outline: "none" }}
                      />
                      <label htmlFor="other">Other</label>
                      <input
                        type="radio"
                        name="gender"
                        id="other"
                        value="Other"
                        onChange={handleChange}
                        className="bg-light w-100 p-3 border-0 rounded"
                        style={{ outline: "none" }}
                      />
                    </div>
                  </div>
                  <div className="my-3">
                    <select
                      type="text"
                      name="role"
                      value={user?.role}
                      onChange={handleChange}
                      className="bg-light w-100 p-3 border-0 rounded"
                      style={{ outline: "none" }}
                    >
                      <option value="CONSUMER">Consumer</option>
                      <option value="TRADEPERSON">Tradeperson</option>
                    </select>
                  </div>
                </>
              )}
              <div>
                <button className="btn btn-green p-3 w-100">
                  {" "}
                  {turn === "login" && "Signin"}
                  {turn === "register" && "SignUp"}
                </button>
              </div>
            </form>
            <div className="text-center mt-3">
              <div className="my-3">
                or {turn === "login" && "Signin"}
                {turn === "register" && "SignUp"} with
              </div>
              <div class="socials d-flex gap-3 justify-content-center ">
                <a href="http://localhost:5500/api/auth/google">
                  {/* <i class="fab fa-facebook-f my-auto fs-4 rounded-circle"></i> */}
                  <i class="fab fa-google-plus-g my-auto fs-4 rounded-circle"></i>
                </a>
                {/* <i class="fab fa-linkedin-in my-auto fs-4 rounded-circle"></i> */}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`col-6 d-none d-md-flex ${
            turn === "login" ? "order-2" : "order-1"
          } d-flex right flex-column h-100`}
        >
          <div className="m-auto">
            {turn === "login" && (
              <div className="text-center text-white">
                <h2>Welcome back!</h2>
                <p>
                  Welcome back! We are so happy to have you here. It's great to
                  see you again. We hope you had a safe and enjoyable time away.
                </p>
                <div>
                  <button
                    onClick={() => setTurn("register")}
                    className="btn btn-signUp p-3 px-5 rounded-5 text-white"
                  >
                    No account yet? Signup
                  </button>
                </div>
              </div>
            )}
            {turn === "register" && (
              <div className="text-center text-white">
                <h2>join !</h2>
                <p>
                  Welcome back! We are so happy to have you here. It's great to
                  see you again. We hope you had a safe and enjoyable time away.
                </p>
                <div>
                  <button
                    onClick={() => setTurn("login")}
                    className="btn btn-signUp p-3 px-5 rounded-5 text-white"
                    href="/"
                  >
                    Already have account? Signip
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
