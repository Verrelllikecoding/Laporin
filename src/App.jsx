import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./AuthPage/loginPage";
import RegisterPage from "./AuthPage/RegisterPage";
import HomePage from "./HomePage/HomePage";
import UploadPage from "./Upload/Upload";  
import "./App.css";

function App() {
  
  const [posts, setPosts] = useState([
    {
      text: "Ini adalah contoh postingan pertama.",
      image: "https://via.placeholder.com/600x400.png?text=Contoh+Gambar+1", 
    },
    {
      text: "Ini adalah contoh postingan kedua.",
      image: "https://via.placeholder.com/600x400.png?text=Contoh+Gambar+2", 
    },
  ]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage posts={posts} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/upload" element={<UploadPage addPost={addPost} />} />
      </Routes>
    </Router>
  );
}

export default App;