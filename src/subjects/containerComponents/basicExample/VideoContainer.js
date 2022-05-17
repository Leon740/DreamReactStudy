import React from "react";
import PropTypes from "prop-types";
import Video from "./Video";
import useWindowDimensions from "/subjects/hooks/examples/useWindowDimensions";

const VideoContainer = props => {
  const { video, image } = props;
  // use (className) as (videoClassName)
  const {
    className: videoClassName,
    poster: videoPoster,
    url: videoUrl,
    settings: videoSettings,
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
        />
      ) : (
        <div className={imgClassName ? imgClassName : "image"}>
          <img src={imgUrl} alt={imgAlt} />
        </div>
      )}
    </div>
  );
};

VideoContainer.propTypes = {
  video: PropTypes.shape({
    className: PropTypes.string,
    poster: PropTypes.string,
    url: PropTypes.string.isRequired,
    settings: PropTypes.object,
  }),
  image: PropTypes.shape({
    className: PropTypes.string,
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};

export default VideoContainer;
