import React, { useState,useEffect } from 'react';
import styles from './Profile.module.css';
import { getFromLocalStorage, setToLocalStorage } from '../LocalStorage';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const storedProfile = getFromLocalStorage('user') || {};
    const storedTasks = getFromLocalStorage('tasks') || [];
    setProfile(storedProfile);
    setCompletedTasks(storedTasks.filter(task => task.status === 'Complete'));
  }, []);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedProfile = { ...profile, profilePicture: reader.result };
        setProfile(updatedProfile);
        setToLocalStorage('user', updatedProfile);
      };
      reader.readAsDataURL(file);
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return  '#ff6666';
      case 'Medium':
        return '#ffcc66'; 
      case 'Low':
        return '#66b3ff'; 
      default:
        return '#e0e0e0'; 
    }
  };

  return (
    <div className={styles.container}>
      <h2>Profile</h2>
      <div className={styles.profilePictureContainer}>
        {profile.profilePicture ? (
          <img src={profile.profilePicture} alt="Profile" className={styles.profilePicture} />
        ) : (
          <div className={styles.noProfilePicture}>No Profile Picture</div>
        )}
        <label htmlFor="profilePictureUpload" className={styles.uploadLabel}>
          <span className={styles.cameraIcon}>📷</span>
          <input
            id="profilePictureUpload"
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
            className={styles.uploadInput}
          />
        </label>
      </div>
      <div className={styles.profileInfo}>
        <p><strong>Username:</strong> {profile.username}</p>
      </div>
      <div className={styles.completedTasks}>
        <h3>Completed Tasks</h3>
        {completedTasks.length > 0 ? (
          <ul>
            {completedTasks.map((task, index) => (
              <li key={index} className={styles.taskCard} style={{ backgroundColor: getPriorityColor(task.priority) }}>
                <p><strong>Task:</strong> {task.name}</p>
                <p><strong>Description:</strong> {task.description}</p>
                <p><strong>Due Date:</strong> {task.dueDate}</p>
                <p><strong>Priority:</strong> {task.priority}</p>
                <p><strong>Status:</strong> {task.status}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No completed tasks</p>
        )}
      </div>
    </div>
  );
};

export default Profile;