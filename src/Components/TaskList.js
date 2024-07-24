import React from 'react';

const TaskList = ({ tasks, onDeleteTask, onUpdateTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index}>
          <h3>{task.name}</h3>
          <p><strong>Description:</strong> {task.description}</p>
          <p><strong>Due Date:</strong> {task.dueDate}</p>
          <p><strong>Priority:</strong> {task.priority}</p>
          <p><strong>Status:</strong> {task.status}</p>
          <button onClick={() => onDeleteTask(index)}>Delete</button>
          <button onClick={() => onUpdateTask(index, { ...task, status: task.status === 'Complete' ? 'Incomplete' : 'Complete' })}>
            {task.status === 'Complete' ? 'Undo' : 'Complete'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;