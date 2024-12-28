import PropTypes from 'prop-types';

function Card({datos}) {
    return (
      <div className="bg-blue-300 p-4 max-w-xs rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">{datos.title}</h3>
      <p className="text-sm text-gray-700">{datos.description}</p>
    </div>
    )
}
  
Card.propTypes = {
  datos: PropTypes.shape({
    title: PropTypes.string.isRequired, 
    description: PropTypes.string, 
  }).isRequired, 
};

export default Card;