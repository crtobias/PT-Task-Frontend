import Card from "../components/Card"
import { useContext, useEffect } from 'react';
import { TasksContext } from '../context/tasksContext.jsx'; 
import CreateButton from "../components/CreateButton.jsx";

function IncompleteTask() {

    const { incompleteTasks, loading } = useContext(TasksContext);
  
    useEffect(() => {
      console.log('Página cargada, tareas:', incompleteTasks);
    }, [incompleteTasks]); 
  
    if (loading) {
      return <div>Cargando tareas...</div>;
    }
  
    return (
      <div className="flex flex-col min-h-screen ">
        <h1 className="text-4xl text-center m-5 mt-12">Tareas</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
          {incompleteTasks.map((task) => (
            <Card key={task._id} datos={task} />
          ))}
        </div>
        
        <CreateButton/>
      </div>
    );
  }
  
  export default IncompleteTask
  