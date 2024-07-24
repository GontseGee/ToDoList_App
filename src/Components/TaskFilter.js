import React, { useState} from 'react';
import styles from './TaskFilter.module.css';

const TaskFilter = ({ onFilterChange }) => {
    const [selectedPriority, setSelectedPriority] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [dueDateRange, setDueDateRange] = useState({ start: '', end: '' });
  
    const handleFilterChange = () => {
      onFilterChange({
        priority: selectedPriority,
        status: selectedStatus,
        dateRange: dueDateRange,
      });
    };
  
    return (
      <div className={styles.container}>
        <h3>Filter Tasks</h3>
        <label className={styles.label}>
          Priority:
          <select
            className={styles.select}
            value={selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value)}
          >
            <option value="">All</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>
        <label className={styles.label}>
          Status:
          <select
            className={styles.select}
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">All</option>
            <option value="Incomplete">Incomplete</option>
            <option value="Complete">Complete</option>
          </select>
        </label>
        <label className={styles.label}>
          Due Date Start:
          <input
            className={styles.input}
            type="date"
            value={dueDateRange.start}
            onChange={(e) => setDueDateRange({ ...dueDateRange, start: e.target.value })}
          />
        </label>
        <label className={styles.label}>
          Due Date End:
          <input
            className={styles.input}
            type="date"
            value={dueDateRange.end}
            onChange={(e) => setDueDateRange({ ...dueDateRange, end: e.target.value })}
          />
        </label>
        <button className={styles.button} onClick={handleFilterChange}>Apply Filters</button>
      </div>
    );
  };
  
  export default TaskFilter;