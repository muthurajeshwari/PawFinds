import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <form className="login-container">
      <div className="login-card">
        <div className="login-image" />

        <div className="login-form">
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button className="togglebtn" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>

          {!isLogin && (
            <div className="input">
              <label>Username</label>
              <input type="text" placeholder="Enter your Name" />
            </div>
          )}

          <div className="input">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your Email" />
          </div>

          <div className="input">
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
          </div>

          <button className="submitbtn">{isLogin ? "Login" : "Sign Up"}</button>
        </div>
      </div>
    </form>
  );
};

export default Login;
