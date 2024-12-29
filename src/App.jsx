import Home from "./screens/Home"
import TaskDetails from "./screens/TaskDetails";
import { TasksProvider } from './context/tasksContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import TaskCreate from "./screens/TaskCreate";
import CompleteTask from "./screens/CompleteTask";
import IncompleteTask from "./screens/IncompleteTask";
import About from "./screens/About";
import NotFound from "./screens/NotFound";
import './/index.css'; 



function App() {
  return (
    <div className="bg-principal font-poppins text-fuentes min-h-screen transition-all duration-300 bg-gradient-anim">
  <TasksProvider>
    <Router>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/complete" element={<CompleteTask />} />
          <Route path="/incomplete" element={<IncompleteTask />} />
          <Route path="/task/:id" element={<TaskDetails />} />
          <Route path="/create" element={<TaskCreate />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  </TasksProvider>
</div>
  )
}

export default App
