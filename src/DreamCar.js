import PropTypes from 'prop-types';

const DreamCar = ({ car }) => {
  return (
    <div>My Dream Car is {car ? car : 'Toyota Cresta JSX 100'}</div>
  );
};

DreamCar.propTypes = {
  car: PropTypes.string.isRequired,
};

export default DreamCar;
