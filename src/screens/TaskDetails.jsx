import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function TaskDetails() {
  const { id } = useParams(); 
  const [task, setTask] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [isEditing, setIsEditing] = useState(false); 
  const [formData, setFormData] = useState({ title: '', description: '', completed: false }); 

  const history = useNavigate(); 

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const response = await fetch(`https://pt-task-backend.onrender.com/task/${id}`);
        const data = await response.json();
        setTask(data);
        setFormData({
          title: data.title,
          description: data.description,
          completed: data.completed
        });
      } catch (error) {
        console.error('Error fetching task details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTaskDetails();
  }, [id]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'completed' ? e.target.checked : value
    }));
  };

  
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://pt-task-backend.onrender.com/task/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Tarea actualizada correctamente');
        setIsEditing(false); 
        const updatedTask = await response.json();
        setTask(updatedTask); 
      } else {
        alert('Error al actualizar la tarea');
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://pt-task-backend.onrender.com/task/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Tarea eliminada correctamente');
        history.push('/'); 
      } else {
        alert('Error al eliminar la tarea');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!task) {
    return <div>No se encontraron detalles para esta tarea.</div>;
  }

  return (
    <div className="p-4 max-w-xs bg-blue-300 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">{task.title}</h3>
      <p className="text-sm text-gray-700">{task.description}</p>
      <p className="text-sm text-gray-500">Estado: {task.completed ? "Hecha" : "Sin hacer"}</p>
      <p className="text-sm text-gray-500">id: {task._id}</p>
      <p className="text-sm text-gray-500">Fecha de creación: {task.createdAt}</p>

      
      <button onClick={() => setIsEditing(true)} className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md">
        Editar
      </button>

      
      <button onClick={handleDelete}  className="mt-4 ml-2 px-4 py-2 bg-red-500 text-white rounded-md">
        Eliminar
      </button>

      {isEditing && (
        <form onSubmit={handleUpdate} className="mt-4">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium ">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium">Descripción</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="completed" className="block text-sm font-medium">Completada</label>
            <input
              type="checkbox"
              id="completed"
              name="completed"
              checked={formData.completed}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Guardar cambios
          </button>
        </form>
      )}
    </div>
  );
}

export default TaskDetails;
