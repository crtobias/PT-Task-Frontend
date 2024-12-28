
import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  //https://pt-task-backend.onrender.com/task  ==>> URL
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://pt-task-backend.onrender.com/task ');  //==>> URL
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  return (
    <TasksContext.Provider value={{ tasks, loading, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};


TasksProvider.propTypes = {
    children: PropTypes.node.isRequired, 
  };