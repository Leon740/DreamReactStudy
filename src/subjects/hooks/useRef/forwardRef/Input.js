import React from "react";
import PropTypes from "prop-types";

// shorthand
// const Input = React.forwardRef((props, ref) => <input ref={ref} />);

const Input = React.forwardRef(
  // Concept
  // Problem: React-components can't be given refs (only for React-elements)
  // Solution: forwardRef to the component

  // forwardRef uses a render function
  // inputFunc = name of the func in devTools
  // if you don't need props = inputFunc(_, ref) {}

  // eslint-disable-next-line prefer-arrow-callback
  function inputFunc(props, ref) {
    const { value } = props;

    return <input ref={ref} value={value} />;
  }
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Input;
