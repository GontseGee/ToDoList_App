import React from 'react';
import { Link } from 'react-router-dom';


const Profile = () => {
    return (
      <div>
        <h2>Profile Page</h2>
        <p>Welcome to your profile</p>
        <Link to="/home">Go to Home</Link>
      </div>
    );
  };
  
  export default Profile;