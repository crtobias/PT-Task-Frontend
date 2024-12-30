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

      alert('Task updated successfully');
      setIsEditing(false);
    } catch (error) {
      alert('Error updating task');
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {

      await deleteTask(id);
      alert('Task deleted successfully');
      history('/');
    } catch (error) {
      alert('Error deleting task');
      console.log(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!task) {
    return <div>No details found for this task.</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
  <div className="p-4 w-full max-w-xs bg-secundario rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold">{task.title}</h3>
    
    <p className="text-lg max-h-44 overflow-auto break-words">
      Description: <br /> {task.description}
    </p>
    
    <p className="text-sm text-gray-500">Status: {task.completed ? "Completed" : "Pending"}</p>
    <p className="text-sm text-gray-500">ID: {task._id}</p>
    <p className="text-sm text-gray-500">Date: {task.createdAt}</p>

    <button
      onClick={() => setIsEditing(true)}
      className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
    >
      Edit
    </button>

    <button
      onClick={handleDelete}
      className="mt-4 ml-2 px-4 py-2 bg-red-500 text-white rounded-md"
    >
      Delete
    </button>

    {isEditing && (
      <form onSubmit={handleUpdate} className="mt-4">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">Title</label>
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
          <label htmlFor="description" className="block text-sm font-medium">Description</label>
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
          Save Changes
        </button>
      </form>
    )}
  </div>
</div>


  );
}

export default TaskDetails;
