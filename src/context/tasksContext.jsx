
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

  
  const createTask = async (newTask) => {
    const response = await fetch('https://pt-task-backend.onrender.com/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    });

    const data = await response.json();
    setTasks((prevTasks) => [...prevTasks, data]); // Actualiza el estado con la nueva tarea
  };

  // Función para eliminar una tarea
  const deleteTask = async (id) => {
    try {
      const response = await fetch(`https://pt-task-backend.onrender.com/task/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Error al eliminar la tarea');

      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };

  // Función para actualizar el estado de la tarea
  const updateTask = async (id, updatedTask) => {
    try {
      const response = await fetch(`https://pt-task-backend.onrender.com/task/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTask),
      });

      if (!response.ok) throw new Error('Error al actualizar la tarea');

      const data = await response.json();
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task._id === id ? { ...task, ...data } : task))
      );
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
    }
  };


  return (
    <TasksContext.Provider value={{  tasks, loading, createTask, deleteTask, updateTask}}>
      {children}
    </TasksContext.Provider>
  );
};


TasksProvider.propTypes = {
    children: PropTypes.node.isRequired, 
  };

