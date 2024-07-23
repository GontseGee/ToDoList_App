import React from 'react';

function TaskList({ tasks, updateTask, deleteTask }) {
  const handleUpdate = (taskId) => {

  };

  return (
    <div>
      <h3>Task List</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h4>{task.name}</h4>
            <p>{task.definition}</p>
            <p>Priority: {task.priority}</p>
            <p>Status: {task.status}</p>
            <p>Due Date: {task.dueDate}</p>
            <button onClick={() => handleUpdate(task.id)}>Update</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
