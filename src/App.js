import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Home from './Components/Home';
import Profile from './Components/Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/home">Home</Link>
          <Link to="/profile">Profile</Link>
        </header>
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login onLogin={setIsLoggedIn} />} />
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
