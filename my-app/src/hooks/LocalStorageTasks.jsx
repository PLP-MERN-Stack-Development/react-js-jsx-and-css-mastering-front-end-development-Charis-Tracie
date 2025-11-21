import { useState, useEffect } from 'react';

const useLocalStorageTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => { /* same as before */ };
  const toggleTask = (id) => { /* same as before */ };
  const deleteTask = (id) => { /* same as before */ };

  return { tasks, addTask, toggleTask, deleteTask };
};

export default useLocalStorageTasks;
