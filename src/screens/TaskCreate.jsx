import { useState, useContext } from "react";
import { TasksContext } from "../context/tasksContext";

function TaskCreate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TasksContext);

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (!title) {
      alert("El título es obligatorio");
      return;
    }

    const task = {
      title,
      description: description || undefined, 
    };

    try {
      const response = await fetch("https://pt-task-backend.onrender.com/task/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        throw new Error("Error al enviar la tarea");
      }

      const newTask = await response.json();  // Obtener la tarea creada desde la respuesta

      // Llama a addTask para agregar la tarea al estado global
      createTask(newTask);  
      alert("Tarea creada con éxito");
      
      setTitle("");
      setDescription("");
    } catch (error) {
    //  alert(error.message);
        console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-violet-600 p-4 rounded-md max-w-md mx-auto mt-10"
    >
      <h2 className="text-lg font-bold mb-4">Crear Nueva Tarea</h2>

      <div className="mb-4">
        <label htmlFor="title" className="block mb-2">Título</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Escribe un título"
          className="w-full p-2 rounded-md text-black"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block mb-2">Descripción (Opcional)</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Escribe una descripción"
          className="w-full p-2 rounded-md text-black"
          rows="4"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-violet-800 text-gray-100 px-4 py-2 rounded-md hover:bg-violet-700"
      >
        Crear Tarea
      </button>
    </form>
  );
}

export default TaskCreate;
