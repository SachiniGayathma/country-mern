import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [country, setCountry] = useState('');
  const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    e.preventDefault(); 

    try {
      await axios.post('http://localhost:8000/api/user/registerUser', {
       
        email,
        phone : mobileNumber,
        password,
        name,
        country,
      },{withCredentials : true});

      navigate('/login'); 
      
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Failed to register. Please check your inputs or try again later.');
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
        <source src="register.mp4" type="video/mp4" />
      </video>

      {/* Form */}
      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'left',
          marginLeft: '100px',
          alignItems: 'center',
        }}
      >
        <form
          onSubmit={handleSubmitForm}
          style={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            padding: '30px',
            borderRadius: '12px',
            width: '480px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
          }}
        >
          
          <label>
            Email
            <input
              type="email"
              value={email}
              style={inputStyle}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
         
          <label>
            Mobile Number
            <input
              type="number"
              value={mobileNumber}
              style={inputStyle}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </label>
           <label>
            Password
            <input
              type="password"
              value={password}
              style={inputStyle}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            Name
            <input
              type="text"
              value={name}
              style={inputStyle}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Country
            <input
              type="text"
              value={country}
              style={inputStyle}
              onChange={(e) => setCountry(e.target.value)}
            />
          </label>
          <button
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#FFD700',
              border: 'none',
              borderRadius: '6px',
              color: '#000',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#e6c200')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#FFD700')}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  marginTop: '4px',
  fontSize: '14px',
};

export default RegistrationForm;
