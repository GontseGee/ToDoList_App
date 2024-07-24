import React, { useState,useEffect } from 'react';
import styles from './Profile.module.css';
import { getFromLocalStorage, setToLocalStorage } from '../LocalStorage';


const Profile = () => {
  const [user, setUser] = useState(getFromLocalStorage('user') || {});
  const [profilePicture, setProfilePicture] = useState(user.profilePicture || '');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePicture(imageUrl);
      setUser((prevUser) => ({ ...prevUser, profilePicture: imageUrl }));
    }
  };

  useEffect(() => {
    setToLocalStorage('user', user);
  }, [user]);

  return (
    <div className={styles.profileContainer}>
      <h2>Profile Page</h2>
      <div className={styles.profilePictureContainer}>
        {profilePicture && (
          <img src={profilePicture} alt="Profile" className={styles.profilePicture} />
        )}
        <label htmlFor="fileInput" className={styles.cameraIcon}>
          📷
        </label>
        <input
          type="file"
          id="fileInput"
          className={styles.fileInput}
          onChange={handleFileChange}
          style={{ display: profilePicture ? 'none' : 'block' }}
        />
      </div>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;