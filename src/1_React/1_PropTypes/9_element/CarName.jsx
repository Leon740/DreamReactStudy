import PropTypes from 'prop-types';

function CarName({ name }) {
  return { name };
}

CarName.propTypes = {
  name: PropTypes.element.isRequired,
};

export default CarName;
