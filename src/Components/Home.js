import React, { useState, useEffect } from 'react';
import { getFromLocalStorage, setToLocalStorage } from '../LocalStorage';
import TaskForm from './Taskform';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';
import styles from './Home.module.css';


const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const storedTasks = getFromLocalStorage('tasks') || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    setToLocalStorage('tasks', tasks);
  }, [tasks]);

  const addTask = (task) => {
    if (taskToEdit !== null) {
      const updatedTasks = tasks.map((t, index) =>
        index === taskToEdit.index ? task : t
      );
      setTasks(updatedTasks);
      setTaskToEdit(null);
    } else {
      setTasks([...tasks, task]);
    }
  };

  const deleteTask = (taskIndex) => {
    const updatedTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(updatedTasks);
  };

  const editTask = (taskIndex) => {
    const task = tasks[taskIndex];
    setTaskToEdit({ ...task, index: taskIndex });
  };

  return (
    <div className={styles.container}>
      <h2>Task List</h2>
      <TaskForm onAddTask={addTask} taskToEdit={taskToEdit} />
      <TaskFilter onFilterChange={(filters) => {}} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onEditTask={editTask}
      />
    </div>
  );
};

export default Home;