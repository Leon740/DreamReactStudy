import PropTypes from 'prop-types';

function Toyota({ model }) {
  return { model };
}

Toyota.propTypes = {
  model: PropTypes.oneOfType([
    PropTypes.oneOf(['Chaser', 'Cresta', 'Mark']),
    PropTypes.number,
  ]).isRequired,
};

export default Toyota;
