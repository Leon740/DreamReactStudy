import React from "react";
import PropTypes from "prop-types";

const String = ({ string }) => {
  return (
    <p>
      My <b>Favorite</b> Car is <u>{string}</u>
    </p>
  );
};

String.propTypes = {
  string: PropTypes.string.isRequired,
};

export default String;
