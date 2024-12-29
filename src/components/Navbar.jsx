import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="fixed w-full flex flex-row justify-center p-2 gap-6 text-lg text-gray-300">
      <div className="left-1 hover:text-gray-100 hover:scale-110 hover:border-b hover:border-white transition-all " >
      <Link to={'/about'}>
       ...
      </Link>
      </div>
      <Link to={`/`}>
        <button className="hover:text-gray-100 hover:scale-110 hover:border-b hover:border-white transition-all">
          All
        </button>
      </Link>
      <Link to={`/complete`}>
        <button className="hover:text-gray-100 hover:scale-110 hover:border-b hover:border-white transition-all">
          Completed
        </button>
      </Link>
      <Link to={`/incomplete`}>
        <button className="hover:text-gray-100 hover:scale-110 hover:border-b hover:border-white transition-all">
          Pending
        </button>
      </Link>
    </div>
  )
}

export default Navbar
