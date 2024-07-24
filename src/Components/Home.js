import React, { useState, useEffect } from 'react';
import { getFromLocalStorage, setToLocalStorage } from '../LocalStorage';
import TaskForm from './Taskform';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';
import styles from './Home.module.css';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = getFromLocalStorage('tasks') || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    setToLocalStorage('tasks', tasks);
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskIndex) => {
    const updatedTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(updatedTasks);
  };

  const updateTask = (taskIndex, updatedTask) => {
    const updatedTasks = tasks.map((task, index) =>
      index === taskIndex ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.container}>
      <h2>Task List</h2>
      <TaskForm onAddTask={addTask} />
      <TaskFilter onFilterChange={(filters) => {}} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onUpdateTask={updateTask}
      />
    </div>
  );
};

export default Home;