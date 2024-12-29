import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { TasksContext } from '../context/tasksContext';

function TaskDetails() {
  const { id } = useParams();
  const { updateTask, deleteTask } = useContext(TasksContext);
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
          completed: data.completed,
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
      [name]: name === 'completed' ? e.target.checked : value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {

      await updateTask(id, formData);

      alert('Tarea actualizada correctamente');
      setIsEditing(false);
    } catch (error) {
      alert('Error al actualizar la tarea');
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {

      await deleteTask(id);
      alert('Tarea eliminada correctamente');
      history('/');
    } catch (error) {
      alert('Error al eliminar la tarea');
      console.log(error);
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!task) {
    return <div>No se encontraron detalles para esta tarea.</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-4 max-w-xs bg-secundario rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold">{task.title}</h3>
        <p className="text-lg">description <br />
          {task.description}</p>
        <p className="text-sm text-gray-500">Estado: {task.completed ? "Hecha" : "Sin hacer"}</p>
        <p className="text-sm text-gray-500">id: {task._id}</p>
        <p className="text-sm text-gray-500">Fecha de creación: {task.createdAt}</p>

        <button onClick={() => setIsEditing(true)} className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md">
          Editar
        </button>

        <button onClick={handleDelete} className="mt-4 ml-2 px-4 py-2 bg-red-500 text-white rounded-md">
          Eliminar
        </button>

        {isEditing && (
          <form onSubmit={handleUpdate} className="mt-4">
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium">Título</label>
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
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Guardar cambios
              </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default TaskDetails;
