import Home from "./screens/Home"
import { TasksProvider } from './context/tasksContext';

function App() {
  return (
    <div className="bg-violet-500 font-poppins text-gray-100 min-h-screen">
      <TasksProvider>
        <Home></Home>
      </TasksProvider>
    </div>
  )
}

export default App
