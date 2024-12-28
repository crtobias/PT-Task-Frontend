
function Navbar() {
    return (
      <div className="bg-violet-600  w-100% flex flex-row justify-center p-2 gap-6 text-lg text-gray-300">
            <button className="hover:text-gray-100 hover:scale-110">All</button>
            <button className="hover:text-gray-100 hover:scale-110">Completed</button>
            <button className="hover:text-gray-100 hover:scale-110">Pending</button>
      </div>
    )
  }
  
  export default Navbar
  