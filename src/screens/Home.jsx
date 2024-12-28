import Card from "../components/Card"
import { useContext, useEffect } from 'react';
import { TasksContext } from '../context/tasksContext.jsx'; 

function Home() {

    const { tasks, loading } = useContext(TasksContext);
  
    useEffect(() => {
      console.log('Página cargada, tareas:', tasks);
    }, [tasks]); 
  
    if (loading) {
      return <div>Cargando tareas...</div>;
    }
  
    return (
      <div className="flex flex-col min-h-screen">
        <h1 className="text-4xl text-center m-5">Tareas</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task) => (
            <Card key={task._id} datos={task} />
          ))}
        </div>

      </div>
    );
  }
  
  export default Home
  