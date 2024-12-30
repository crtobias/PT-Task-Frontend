import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import On from "../assets/On.svg";
import Off from "../assets/Off.svg";
import Edit from "../assets/Edit.svg";
import { useState } from 'react';


function Card({ datos }) {
  const [completed, setCompleted] = useState(datos.completed);

  const handleToggleCompleted = async () => {
    try {

      setCompleted(!completed);


      const response = await fetch(`https://pt-task-backend.onrender.com/task/${datos._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: !completed }),
      });

      if (!response.ok) {
        throw new Error("Error updating task");
      }

      console.log("Task updated successfully");
    } catch (error) {
      console.error("Error updating:", error.message);

      setCompleted(completed);
    }
  };

  return (
    <div className="bg-secundario flex-col p-4 rounded-xl h-52 max-h-52 w-72 max-w-72 justify-between shadow-xl overflow-hidden hover:border hover:border-pink-200">
      <div className="flex-1">
        <h3 className="text-xl font-semibold truncate">{datos.title}</h3>
        <p className="text-sm text-gray-300 line-clamp-1">{datos.description}</p>
        <p className={completed ? "text-green-500" : "text-orange-500"}>
          {completed ? "Completed" : "Pending"}
        </p>
        <p className="text-sm text-gray-500">{datos.createdAt}</p>
      </div>

      <div className="flex-col">
        <img
          src={completed ? On : Off}
          alt="Estado de la tarea"
          className="h-8 cursor-pointer"
          onClick={handleToggleCompleted}
        />

        <Link to={`/task/${datos._id}`} className="">
          <img src={Edit} alt="Edit Task" className="h-8 w-8" />
        </Link>
      </div>
    </div>

  );
}

Card.propTypes = {
  datos: PropTypes.shape({
    title: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    description: PropTypes.string,
    completed: PropTypes.bool,
    createdAt: PropTypes.string,
  }).isRequired,
};

export default Card;
