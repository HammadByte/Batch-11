// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState([]);

  const handlePostChange = (event) => {
    setPostContent(event.target.value);
  };

  const handlePostSubmit = () => {
    if (postContent.trim()) {
      setPosts([postContent, ...posts]);
      setPostContent('');
    }
  };

  return (
    <div className="App">
      <h1>Post Your Thoughts</h1>
      <div className="post-box">
        <textarea
          value={postContent}
          onChange={handlePostChange}
          placeholder="What's on your mind?"
        />
        <button onClick={handlePostSubmit}>Post</button>
      </div>
      <div className="posts">
        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          posts.map((post, index) => (
            <div key={index} className="post-card">
              <div className="post-header">
                <div className="avatar"></div>
                <div className="user-info">
                  <h3>User Name</h3>
                  <p>Time Ago</p>
                </div>
              </div>
              <div className="post-content">
                <p>{post}</p>
              </div>
              <div className="post-footer">
                <button className="like-btn">Like</button>
                <button className="comment-btn">Comment</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
