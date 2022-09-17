import React from 'react';
import PropTypes from 'prop-types';

function VideoControls(props) {
  const { onPlay, onPause } = props;

  const controlsStyles = {
    position: 'sticky',
    top: 0,
    padding: '15px',
    borderBottom: '1px solid #000',
  };

  return (
    <div style={controlsStyles}>
      <button type="button" className="btn btn-success" onClick={onPlay}>
        Play
      </button>
      <button type="button" className="btn btn-danger" onClick={onPause}>
        Pause
      </button>
    </div>
  );
}

VideoControls.propTypes = {
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
};

export default VideoControls;
