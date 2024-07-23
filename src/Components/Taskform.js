import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState('');
  const [taskDefinition, setTaskDefinition] = useState('');
  const [taskPriority, setTaskPriority] = useState('Medium');
  const [taskDueDate, setTaskDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(), 
      name: taskName,
      definition: taskDefinition,
      priority: taskPriority,
      dueDate: taskDueDate,
      status: 'Incomplete',
    };
    addTask(newTask);
    setTaskName('');
    setTaskDefinition('');
    setTaskPriority('Medium');
    setTaskDueDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Name:
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      </label>
      <br />
      <label>
        Task Definition:
        <input type="text" value={taskDefinition} onChange={(e) => setTaskDefinition(e.target.value)} />
      </label>
      <br />
      <label>
        Priority:
        <select value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </label>
      <br />
      <label>
        Due Date:
        <input type="date" value={taskDueDate} onChange={(e) => setTaskDueDate(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;

