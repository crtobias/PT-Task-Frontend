import { useState, useContext } from "react";
import { TasksContext } from "../context/tasksContext";

function TaskCreate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TasksContext);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      alert("The title is mandatory");
      return;
    }

    const task = {
      title,
      description: description || undefined,
    };

    try {
      await createTask(task); 
      alert("Task created successfully");
      setTitle("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="pt-16">
      <form
      onSubmit={handleSubmit}
      className="bg-secundario p-4 rounded-md max-w-md mx-auto"
    >
      <h2 className="text-lg font-bold mb-4">Create New Tasks</h2>

      <div className="mb-4">
        <label htmlFor="title" className="block mb-2">Títle</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
          className="w-full p-2 rounded-md text-black"
          required
          maxLength={"25"}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block mb-2">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
          className="w-full p-2 rounded-md text-black"
          rows="4"
          maxLength={"100"}
        ></textarea>
      </div>

      <button
        type="submit"
        className=" text-gray-100 px-4 py-2 rounded-md hover:bg-violet-700"
      >
        Create Task
      </button>
    </form>
    </div>
  );
}

export default TaskCreate;
