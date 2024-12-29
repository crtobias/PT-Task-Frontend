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
        throw new Error("Error al actualizar la tarea");
      }

      console.log("Tarea actualizada con éxito");
    } catch (error) {
      console.error("Error al actualizar:", error.message);

      setCompleted(completed);
    }
  };

  return (
    <div className="bg-secundario flex p-4 rounded-xl h-40 w-72 justify-between shadow-xl">
      <div>
        <h3 className="text-xl font-semibold">{datos.title}</h3>
        <p className="text-sm text-gray-700">{datos.description}</p>
        <p className={completed ? "text-green-500" : "text-orange-500"}>
          {completed ? "Hecha" : "Sin hacer"}
        </p>
      </div>

      <div className="flex-col">
        <img
          src={completed ? On : Off}
          alt="Estado de la tarea"
          className="h-8 cursor-pointer"
          onClick={handleToggleCompleted}
        />

        <Link to={`/task/${datos._id}`} className="">
          <img src={Edit} alt="Editar tarea" className="h-8 w-8" />
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
  }).isRequired,
};

export default Card;
