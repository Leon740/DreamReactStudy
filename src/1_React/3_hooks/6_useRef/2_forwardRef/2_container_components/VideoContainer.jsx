/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import useWindowDimensions from '1_React/7_hooks/examples/useWindowDimensions';
import Video from './Video';

const VideoContainer = React.forwardRef((props, ref) => {
  const { video, image } = props;
  // use (className) as (videoClassName)
  const {
    className: videoClassName,
    poster: videoPoster,
    url: videoUrl,
    settings: videoSettings
  } = video;

  const { className: imgClassName, url: imgUrl, alt: imgAlt } = image;

  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <div>
      {!isMobile ? (
        <Video
          className={videoClassName}
          poster={videoPoster}
          url={videoUrl}
          settings={videoSettings}
          ref={ref}
        />
      ) : (
        <div className={imgClassName || 'image'}>
          <img src={imgUrl} alt={imgAlt} />
        </div>
      )}
    </div>
  );
});

VideoContainer.propTypes = {
  video: PropTypes.shape({
    className: PropTypes.string,
    poster: PropTypes.string,
    url: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    settings: PropTypes.object
  }),
  image: PropTypes.shape({
    className: PropTypes.string,
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  })
};

export default VideoContainer;
