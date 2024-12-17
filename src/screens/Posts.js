import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Firebase setup
import { collection, getDocs, addDoc } from 'firebase/firestore';
import '../App.css';  // Import your styles

function Posts() {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState('');

  // Fetch posts from Firestore
  const fetchPosts = async () => {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    setPosts(querySnapshot.docs.map(doc => doc.data()));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Handle new message submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message) {
      // Add the message to Firestore
      await addDoc(collection(db, 'posts'), { message });
      setMessage('');
      fetchPosts(); // Refresh the posts
    }
  };

  return (
    <div className="container">
      <header>
        <h1>What is the effect of KBA on you?</h1>
      </header>

      {/* Form to create a post */}
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message"
          required
        />
        <button type="submit">Post</button>
      </form>

      {/* Display the list of posts */}
      <h2>All Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet!</p>
      ) : (
        <ul>
          {posts.map((post, index) => (
            <li key={index}>{post.message}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Posts;
