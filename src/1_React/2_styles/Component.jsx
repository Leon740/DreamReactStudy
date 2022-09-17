import React from 'react';

function Component() {
  const basicStyles = {
    background: '#000',
    color: '#fff',
    padding: '10px 20px',
    margin: '50px auto',
    width: '200px',
    textAlign: 'center',
  };

  const inlineStyles = {
    // required space = max-content width
    // no width, height, margin
    ...basicStyles,
    display: 'inline',
  };
  const inlineBlockStyles = {
    // required space = max-content width
    // yes width, height, margin
    ...basicStyles,
    display: 'inline-block',
  };
  const blockStyles = {
    // required space = 100%
    // yes width, height, margin
    ...basicStyles,
    display: 'block',
  };

  return (
    <div>
      <div style={inlineStyles}>inline</div>
      <div style={inlineStyles}>inline</div>
      <br />
      <div style={inlineBlockStyles}>inline-block</div>
      <div style={inlineBlockStyles}>inline-block</div>
      <br />
      <div style={blockStyles}>block</div>
      <div style={blockStyles}>block</div>
      <br />

      <div style={{ ...basicStyles, display: 'flex' }}>flex</div>
    </div>
  );
}

export default Component;
