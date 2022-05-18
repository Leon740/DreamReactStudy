import React from "react";
import PropTypes from "prop-types";

// Duplicate of : src\subjects\components\1_container\2_forwardRef\Video.js

const Video = React.forwardRef((props, ref) => {
  const { className, poster, url, settings } = props;

  return (
    <div className={className ? className : "video"}>
      <video
        poster={poster}
        aria-label="Video Player"
        {...settings}
        style={{ width: "100%" }}
        ref={ref}
      >
        <source src={url} type="video/mp4" />
        <source src={url.replace("mp4", "ogg")} type="video/ogg" />
        <source src={url.replace("mp4", "webm")} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
});

Video.propTypes = {
  className: PropTypes.string,
  poster: PropTypes.string,
  url: PropTypes.string.isRequired,
  settings: PropTypes.object,
};

Video.defaultProps = {
  settings: {
    width: "100%",
    height: "100%",
    preload: "auto",
    controls: false,
    muted: true,
    loop: true,
    autoPlay: true,
    playsInline: true,
  },
};

export default Video;
