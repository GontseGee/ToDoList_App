import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskPriority, setTaskPriority] = useState('Low');
  const [taskDueDate, setTaskDueDate] = useState('');
  const [taskStatus, setTaskStatus] = useState('Incomplete');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName) return; 
    const newTask = {
      name: taskName,
      priority: taskPriority,
      dueDate: taskDueDate,
      status: taskStatus,
      description: taskDescription,
    };
    onAddTask(newTask);
   
    setTaskName('');
    setTaskPriority('Low');
    setTaskDueDate('');
    setTaskStatus('Incomplete');
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
        required
      />
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Task Description"
        required
      />
      <select value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="date"
        value={taskDueDate}
        onChange={(e) => setTaskDueDate(e.target.value)}
        required
      />
      <select value={taskStatus} onChange={(e) => setTaskStatus(e.target.value)}>
        <option value="Incomplete">Incomplete</option>
        <option value="Complete">Complete</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;