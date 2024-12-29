import Home from "./screens/Home"
import TaskDetails from "./screens/TaskDetails";
import { TasksProvider } from './context/tasksContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import TaskCreate from "./screens/TaskCreate";
import CompleteTask from "./screens/CompleteTask";
import IncompleteTask from "./screens/IncompleteTask";
import About from "./screens/About";

function App() {
  return (
    <div className="bg-principal font-poppins text-fuentes min-h-screen transition-all duration-300">
      <TasksProvider>
        <Router>
            <Navbar></Navbar>
            <Routes>
           
              <Route path="/" element={<Home />} />
              <Route path="/complete" element={ <CompleteTask /> } />
              <Route path="/incomplete" element={ <IncompleteTask/> } />
              <Route path="/task/:id" element={<TaskDetails />} />
              <Route path="/create" element={<TaskCreate/>} />
              <Route path="/about" element={<About/>} />
              
            </Routes>
        </Router>
      </TasksProvider>
    </div>
  )
}

export default App
