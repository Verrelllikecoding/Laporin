import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Upload.css";

const Upload = ({ addPost }) => {
  const [postText, setPostText] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePost = () => {
    if (!postText.trim() && !image) return;
    
    const newPost = {
      text: postText,
      image: image,
    };

    addPost(newPost); 
    alert("Post berhasil diunggah!");
    setPostText("");
    setImage(null);
  };

  return (
    <div className="upload-container">
      <header className="upload-header">
        <h1><Link to="/">LAPORIN</Link></h1>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/budget-plan">Rencana Anggaran</Link>
          <Link to="/login" className="login-btn">Log in</Link>
          <Link to="/register" className="register-btn">Register</Link>
        </nav>
      </header>

      <div className="upload-box">
        <h2>Create Post</h2>
        <textarea
          placeholder="Tulis sesuatu..."
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        ></textarea>
        
        <input 
          type="file" 
          id="file-upload" 
          accept="image/*" 
          onChange={handleImageChange} 
          style={{ display: "none" }} 
        />
        <label htmlFor="file-upload" className="file-upload-label">
          Upload Image
        </label>
        
        {image && <img src={image} alt="Preview" className="preview-image" />}

        <button className="post-button" onClick={handlePost}>Post</button>
      </div>
    </div>
  );
};

export default Upload;