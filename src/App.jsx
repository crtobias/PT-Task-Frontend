import Home from "./screens/Home"
import TaskDetails from "./screens/TaskDetails";

import { TasksProvider } from './context/tasksContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import TaskCreate from "./screens/TaskCreate";

function App() {
  return (
    <div className="bg-violet-500 font-poppins text-gray-100 min-h-screen">
      <TasksProvider>
        <Router>
            <Navbar></Navbar>
            <Routes>
           
              <Route path="/" element={<Home />} />
              <Route path="/task/:id" element={<TaskDetails />} />
              <Route path="/create" element={<TaskCreate/>} />
              
            </Routes>
        </Router>
      </TasksProvider>
    </div>
  )
}

export default App
