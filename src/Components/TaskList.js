import React from 'react';
import styles from './TaskList.module.css';

const TaskList = ({ tasks, onDeleteTask, onUpdateTask }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return styles.highPriority;
      case 'Medium':
        return styles.mediumPriority;
      case 'Low':
        return styles.lowPriority;
      default:
        return '';
    }
  };

  return (
    <ul className={styles.taskList}>
      {tasks.map((task, index) => (
        <li
          key={index}
          className={`${styles.taskItem} ${getPriorityColor(task.priority)}`}
        >
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.status}</p>
          <button onClick={() => onDeleteTask(index)}>Delete</button>
          <button onClick={() => onUpdateTask(index, {
            ...task,
            status: task.status === 'Incomplete' ? 'Complete' : 'Incomplete',
          })}>
            {task.status === 'Incomplete' ? 'Mark as Complete' : 'Mark as Incomplete'}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;