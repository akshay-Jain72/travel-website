import React, { useState } from 'react';
import './Login.css';

const Login = ({ showForm, setShowForm, setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Backend server par data bhej rahe hain
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      const response = await fetch(`${backendUrl}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message);
        
        // Login successful hote hi state true kar denge aur form band kar denge
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        setShowForm(false);
      } else {
        alert(data.message || "Login failed!");
      }
    } catch (error) {
      console.error("Backend connection error:", error);
      alert("Server se connect nahi ho pa raha hai! Check karein ki backend (server.js) chal raha hai ya nahi.");
    }
  };

  return (
    <div className={`login-form-container ${showForm ? 'active' : ''}`}>
      <i className="fas fa-times" id="form-close" onClick={() => setShowForm(false)}></i>
      
      <form onSubmit={handleSubmit}>
        <h3>login</h3>
        
        <input 
          type="email" 
          className="box" 
          placeholder="enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        
        <input 
          type="password" 
          className="box" 
          placeholder="enter your password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        
        <input type="submit" value="login now" className="btn" />
      </form>
    </div>
  );
};

export default Login;