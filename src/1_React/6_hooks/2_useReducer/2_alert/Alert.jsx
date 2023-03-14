import React from 'react';
import { useAlert } from './AlertContext';

function Alert() {
  const { visible, hide, text } = useAlert();

  if (!visible) {
    return null;
  }

  return (
    <div className="alert alert-danger">
      Alert
      {' '}
      <button type="button" onClick={() => hide('close')}>
        Hide Alert,
        {text}
      </button>
    </div>
  );
}

export default Alert;
