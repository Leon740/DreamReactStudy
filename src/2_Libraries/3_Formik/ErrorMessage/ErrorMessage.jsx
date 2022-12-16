import React from 'react';
import PropTypes from 'prop-types';

import { ErrorMessage as Error } from 'formik';

import './ErrorMessage.scss';

export default function ErrorMessage({ component, name }) {
  return (
    <div className="form-error">
      {' '}
      <Error component={component} name={name} />
    </div>
  );
}

ErrorMessage.propTypes = {
  component: PropTypes.string,
  name: PropTypes.string,
};

ErrorMessage.defaultProps = {
  component: '',
  name: '',
};
