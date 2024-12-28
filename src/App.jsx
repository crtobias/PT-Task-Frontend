import Home from "./screens/Home"
import TaskDetails from "./screens/TaskDetails";

import { TasksProvider } from './context/tasksContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="bg-violet-500 font-poppins text-gray-100 min-h-screen">
      <TasksProvider>
        <Router>
            <Routes>
           
              <Route path="/" element={<Home />} />
              <Route path="/task/:id" element={<TaskDetails />} />
              
            </Routes>
        </Router>
      </TasksProvider>
    </div>
  )
}

export default App
