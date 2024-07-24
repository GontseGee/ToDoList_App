

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { setToLocalStorage } from '../LocalStorage';
import  styles from './Registration.module.css';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [Email, setEmail] = useState(''); // Ensure the variable name is consistent
  const [password, setPassword] = useState('');

  const handleRegistration = (e) => {
    e.preventDefault();
    const userDetails = { username, Email, password };
    setToLocalStorage('user', userDetails);
    alert('Registration successful');
  };

  return (
    <div className={styles.container}>
      <h2>Create Account</h2>
      <form onSubmit={handleRegistration}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Name"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="Email"
            value={Email} 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
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
        <button type="submit">Sign up</button>
      </form>
      <Link to="/">Sign in</Link>
    </div>
  );
};

export default Registration;