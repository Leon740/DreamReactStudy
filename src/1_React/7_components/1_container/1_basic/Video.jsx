/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';

function Video(props) {
  const {
    className, poster, url, settings,
  } = props;

  return (
    <div className={className}>
      <video
        poster={poster}
        aria-label="Video Player"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...settings}
        style={{ width: '100%' }}
      >
        <source src={url} type="video/mp4" />
        <source src={url.replace('mp4', 'ogg')} type="video/ogg" />
        <source src={url.replace('mp4', 'webm')} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

Video.propTypes = {
  className: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  poster: PropTypes.string,
  url: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  settings: PropTypes.object,
};

Video.defaultProps = {
  className: 'video',
  settings: {
    width: '100%',
    height: '100%',
    preload: 'auto',
    controls: false,
    muted: true,
    loop: true,
    autoPlay: true,
    playsInline: true,
  },
};

export default Video;
