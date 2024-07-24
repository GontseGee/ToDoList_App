import React, {useState, useEffect} from 'react';
import styles from './Profile.module.css';

const Profile = ({ user }) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
  
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const completed = tasks.filter(task => task.status === 'Completed');
    setCompletedTasks(completed);
  }, []);

  return (
    <div className={styles.container}>
      <h2>Profile</h2>
      <div className={styles.profileInfo}>
        <img
          src={user.profilePicture || 'default-profile-picture.png'} // Default image if none is provided
          alt="Profile"
          className={styles.profilePicture}
        />
        <div className={styles.userInfo}>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      </div>
      <div className={styles.completedTasks}>
        <h3>Completed Tasks</h3>
        {completedTasks.length > 0 ? (
          <ul>
            {completedTasks.map((task, index) => (
              <li key={index}>
                <strong>{task.name}</strong>: {task.description}
                <br />
                <span>Due Date: {task.dueDate}</span>
                <br />
                <span>Priority: {task.priority}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No completed tasks found.</p>
        )}
      </div>
    </div>
  );
};
  
  export default Profile;