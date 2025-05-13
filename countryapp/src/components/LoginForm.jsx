import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8000/api/auth/login', {
        email,
        password
      },{
  withCredentials: true
});

      navigate('/countries');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid login credentials or server error.');
    }
  };

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="login.mp4" type="video/mp4" />
      </video>
      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginLeft: '100px',
          alignItems: 'center',
        }}
      >
        <form onSubmit={handleSubmit}
          style={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            padding: '30px',
            borderRadius: '12px',
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
          }}
        >
          Enter Email
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          Enter Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
