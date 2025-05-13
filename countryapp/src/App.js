
import './App.css';
import AllCountries from './components/AllCountries';
import ViewMore from './components/ViewMore';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import RegisterUser from './components/RegisterUser.jsx';
import RegistrationForm from './components/RegistrationForm.jsx';
import LoginForm from './components/LoginForm.jsx';


function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<RegisterUser />} />
       
        <Route path="/countries" element={
          <>
            <Navbar />
            <AllCountries />
          </>
        }  />
      
        <Route path="/view/:country" element={<ViewMore />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
