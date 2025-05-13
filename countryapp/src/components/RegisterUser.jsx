import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './BackgroundVideo.css';
import axios from 'axios';

const RegisterUser = () => {
  
  const [image, setImage] = useState('');
  const [detail, setDetail] = useState('');
  
  
  const backgroundImages = [
    '/culture2.png',
    '/heritage.png',
    '/currency.png',
    '/map.png'
  ];

  const descriptions = [
    "We provide real-time information on global currencies and their current exchange rates. Whether you're traveling, trading, or simply curious, our service ensures you have access to accurate and regularly updated currency data.",
    "Explore every country's flag, capital city, population data, and more—helping you learn about different nations in one place.",
    "Discover spoken languages, regional affiliations, and sub-regions to better understand each country's cultural and geographic makeup.",
    "Get an all-in-one view of essential global details with our interactive and user-friendly interface."
  ];

  const navigate = useNavigate();

  

  useEffect(() => {

    axios.get('http://localhost:8000/api/auth/check-session', { withCredentials: true })
    .then((res) => {
      // Redirect if already logged in
      navigate('/countries');
    })
    .catch((err) => {
      console.log('Not logged in');
    });
    let index = 0;
    setImage(backgroundImages[index]);
    setDetail(descriptions[index]);

    const interval = setInterval(() => {
      index = (index + 1) % backgroundImages.length;
      setImage(backgroundImages[index]);
      setDetail(descriptions[index]);
    }, 15000); // 15 seconds

    return () => clearInterval(interval);

    
  }, []);



  const handleIsRegistering = ()=>{

    navigate('/register');
  }

  const handleIsLogin = ()=>{

    navigate('/login');
  }

  return (
    <div
      className="zoom-background"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        //animation: "backgroundZoomIn 10s infinite alternate",
      }}
    >
      <div
  style={{
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    maxWidth: "80%",
    padding: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(10px)",
    color: "white",
    borderRadius: "12px",
    fontSize: "20px",
    textAlign: "center",
    zIndex: 1,
  }}
>

        
          <div>
        <h2 style={{ color: "#FFD700", marginBottom: "10px" }}>Our Services</h2>
        <p style={{ color: "white", marginBottom: "10px", fontSize : "21px", fontFamily : ""}}>{detail}</p>
            </div>
       
    <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "10px" }}>
  <button
    type="submit"
    onClick={handleIsRegistering}
    style={{
      width: "130px",
      padding: "12px",
      backgroundColor: "#FFD700", // yellow
      color: "#333",              // dark text
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "15px",
      fontWeight: "600",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      transition: "background-color 0.3s ease"
    }}
    onMouseOver={(e) => e.target.style.backgroundColor = "#e6c200"}
    onMouseOut={(e) => e.target.style.backgroundColor = "#FFD700"}
  >
    Register
  </button>

  <button
    type="submit"
    onClick={handleIsLogin}
    style={{
      width: "130px",
      padding: "12px",
      backgroundColor: "#B0B0B0", // ash/gray
      color: "#000",              // black text
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "15px",
      fontWeight: "600",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      transition: "background-color 0.3s ease"
    }}
    onMouseOver={(e) => e.target.style.backgroundColor = "#999"}
    onMouseOut={(e) => e.target.style.backgroundColor = "#B0B0B0"}
  >
    Login
  </button>
</div>



   
      </div>
    
</div>

  
  );
};

export default RegisterUser;
