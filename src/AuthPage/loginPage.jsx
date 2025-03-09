import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email && password) {
      navigate("/home"); 
    } else {
      alert("Email dan Password harus diisi!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="title">Laporin</h1>
        <h2 className="subtitle">LOGIN</h2>
        <p className="description">Masukkan Email dan Password</p>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Password</label>
          <div className="password-container">
            <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>

        <p className="register-text">
          Belum punya akun? <span onClick={() => navigate("/register")} className="register-link">Daftar</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;