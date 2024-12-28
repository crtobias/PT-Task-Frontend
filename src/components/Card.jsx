import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card({datos}) {
    return (
    <Link to={`/task/${datos._id}`} className="bg-blue-300 p-4 max-w-xs rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">{datos.title}</h3>
      <p className="text-sm text-gray-700">{datos.description}</p>
    </Link>
    )
}
  
Card.propTypes = {
  datos: PropTypes.shape({
    title: PropTypes.string.isRequired, 
    _id: PropTypes.string.isRequired, 
    description: PropTypes.string, 
  }).isRequired, 
};

export default Card;