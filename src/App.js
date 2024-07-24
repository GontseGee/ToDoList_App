import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Registration from './Components/Registration';
import Login from './Components/login';
import Home from './Components/Home';
import Profile from './Components/Profile';
import './App.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <header className="navbar">
          <Link to="/Login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/home">Home</Link>
          <Link to="/profile">Profile</Link>
        </header>
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/Login" element={<Login onLogin={setIsLoggedIn} />} />
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
