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
      await axios.post(
        'http://localhost:8000/api/user/registerUser',
        {
          email,
          phone: mobileNumber,
          password,
          name,
          country,
        },
        { withCredentials: true }
      );

      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Failed to register. Please check your inputs or try again later.');
    }
  };

  return (
    <div style={styles.container}>
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={styles.backgroundVideo}
      >
        <source src="register.mp4" type="video/mp4" />
      </video>

      {/* Form */}
      <div style={styles.formWrapper}>
        <form onSubmit={handleSubmitForm} style={styles.form}>
          <label>
            Email
            <input
              type="email"
              value={email}
              style={styles.input}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            Mobile Number
            <input
              type="number"
              value={mobileNumber}
              style={styles.input}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              style={styles.input}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <label>
            Name
            <input
              type="text"
              value={name}
              style={styles.input}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Country
            <input
              type="text"
              value={country}
              style={styles.input}
              onChange={(e) => setCountry(e.target.value)}
            />
          </label>

          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#e6c200')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#FFD700')}
          >
            Register
          </button>
        </form>
      </div>

    
      <style>
        {`
          @media (max-width: 768px) {
            .form-wrapper {
              margin: 0 20px;
              justify-content: center !important;
            }
            form {
              width: 100% !important;
              max-width: 100% !important;
              padding: 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
  formWrapper: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px',
  },
  form: {
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: '30px',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '480px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    marginTop: '4px',
    fontSize: '14px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#FFD700',
    border: 'none',
    borderRadius: '6px',
    color: '#000',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default RegistrationForm;
