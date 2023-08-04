import PropTypes from 'prop-types';

function Toyota({ model }) {
  return { model };
}

Toyota.propTypes = {
  model: PropTypes.oneOf(['Cresta', 'Chaser', 'Mark']).isRequired,
};

export default Toyota;
