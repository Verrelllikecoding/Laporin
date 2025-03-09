import React from "react";
import { useNavigate } from "react-router-dom";
import "./registerpage.css";

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="title">Laporin</h1>
        <h2 className="subtitle">REGISTER</h2>

        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter Name" />

          <label>Email</label>
          <input type="email" placeholder="Enter Email" />

          <label>Password</label>
          <div className="password-container">
            <input type="password" placeholder="Enter Password" />
            <span className="eye-icon"></span>
          </div>

          <label>Confirm Password</label>
          <div className="password-container">
            <input type="password" placeholder="Enter Confirm Password" />
            <span className="eye-icon"></span>
          </div>

          <button type="submit" className="register-button">Register</button>
        </form>

        <p className="login-text">
          Sudah punya akun? <span onClick={() => navigate("/login")} className="login-link">Login</span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
