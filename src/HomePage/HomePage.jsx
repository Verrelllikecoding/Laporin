import React, { useState } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = ({ posts }) => {
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentInputs, setCommentInputs] = useState([]);
  const [showCommentBox, setShowCommentBox] = useState([]);
  const [commentLists, setCommentLists] = useState([]);

  React.useEffect(() => {
    setLikes(new Array(posts.length).fill(100));
    setDislikes(new Array(posts.length).fill(50));
    setComments(new Array(posts.length).fill(100));
    setCommentInputs(new Array(posts.length).fill(""));
    setShowCommentBox(new Array(posts.length).fill(false));
    setCommentLists(new Array(posts.length).fill([]));
  }, [posts]);

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  const handleDislike = (index) => {
    const newDislikes = [...dislikes];
    newDislikes[index] += 1;
    setDislikes(newDislikes);
  };

  const toggleCommentBox = (index) => {
    const newShowCommentBox = [...showCommentBox];
    newShowCommentBox[index] = !newShowCommentBox[index];
    setShowCommentBox(newShowCommentBox);
  };

  const handleCommentChange = (index, value) => {
    const newCommentInputs = [...commentInputs];
    newCommentInputs[index] = value;
    setCommentInputs(newCommentInputs);
  };

  const handleCommentSubmit = (index) => {
    if (commentInputs[index].trim() === "") return;
    const newCommentLists = [...commentLists];
    newCommentLists[index] = [...newCommentLists[index], commentInputs[index]];
    setCommentLists(newCommentLists);
    setCommentInputs((prev) => {
      const newInputs = [...prev];
      newInputs[index] = "";
      return newInputs;
    });
    setComments((prev) => {
      const newCounts = [...prev];
      newCounts[index] += 1;
      return newCounts;
    });
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>LAPORIN</h1>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/budget-plan">Rencana Anggaran</Link>
          <Link to="/login" className="login-btn">Log in</Link>
          <Link to="/register" className="register-btn">Register</Link>
        </nav>
      </header>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="sort-options">
        <span>Sort by:</span>
        <button>Top Vote</button>
        <button>Location</button>
        <button>Latest</button>
      </div>

      <div className="reports-container">
        {posts.map((post, index) => (
          <div key={index} className="report-card">
            <div className="report-header">
              <span className="user-name">user{index + 1}</span>
              <span className="settings-icon">⚙️</span>
            </div>
            {post.image && <img src={post.image} alt="Report Image" className="report-image" />}
            <p>{post.text}</p>
            <div className="report-actions">
              <button onClick={() => handleLike(index)}>👍 {likes[index]}</button>
              <button onClick={() => handleDislike(index)}>👎 {dislikes[index]}</button>
              <button onClick={() => toggleCommentBox(index)}>💬 {comments[index]}</button>
            </div>
            {showCommentBox[index] && (
              <div className="comment-box">
                <input
                  type="text"
                  placeholder="Tulis komentar..."
                  value={commentInputs[index]}
                  onChange={(e) => handleCommentChange(index, e.target.value)}
                />
                <button onClick={() => handleCommentSubmit(index)}>Kirim</button>
                <div className="comment-list">
                  {commentLists[index].map((comment, i) => (
                    <p key={i}>{comment}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <Link to="/upload" className="floating-upload-button">+</Link>
    </div>
  );
};

export default HomePage;