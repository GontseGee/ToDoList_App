import React from 'react';
import styles from './TaskList.module.css';

const TaskList = ({ tasks, onDeleteTask, onEditTask }) => {
  return (
    <ul className={styles.taskList}>
      {tasks.map(task => (
        <li key={task.id} className={styles.taskItem}>
          <div>
            <strong>{task.name}</strong>
            <p>{task.description}</p>
            <p>Due: {task.dueDate}</p>
            <p>Priority: {task.priority}</p>
            <p>Status: {task.status}</p>
          </div>
          <button onClick={() => onEditTask(task)}>Edit</button>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;