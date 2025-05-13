import React, { useEffect, useState } from 'react';
import './Navbar.css';
import axios from 'axios';

export default function Navbar() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/auth/check-session', { withCredentials: true })
      .then((res) => {
        setUserName(res.data.name);
      })
      .catch((err) => {
        console.error('Session check failed:', err);
      });
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:8000/api/auth/logout', { withCredentials: true });
      window.location.href = '/';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="heading">
      <h1>Where In The World?</h1>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <h2 style={{ color: '#fff', fontSize: '18px' }}> {userName}</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
