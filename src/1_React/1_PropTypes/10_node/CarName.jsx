import PropTypes from 'prop-types';

function CarName({ name }) {
  return { name };
}

CarName.propTypes = {
  name: PropTypes.node.isRequired,
};

export default CarName;
