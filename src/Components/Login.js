import React, { useState } from 'react';
import { getFromLocalStorage } from '../LocalStorage';
import {Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = getFromLocalStorage('user');
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      alert('Login successful');
      onLogin(true);
      navigate('/home'); 
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Welcome Back!</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Sign in</button>
      </form>
      <Link to="/register">Create Account</Link>
    </div>
  );
};

export default Login;
