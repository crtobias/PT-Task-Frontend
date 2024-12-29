import add from "../assets/Add.svg"
import { Link } from 'react-router-dom';

function CreateButton() {
    return (
    <Link to={`/create`} className="border-transparent  h-16 w-16 max-w-xs  absolute bottom-10 right-10 ">
        <img src={add} alt="" className="h-14 w-14 hover:scale-110" />
    </Link>
    )
}


export default CreateButton;