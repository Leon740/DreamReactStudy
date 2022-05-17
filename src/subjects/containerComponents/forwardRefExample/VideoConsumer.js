import React, { useRef } from "react";
import Video from "./Video";
import VideoControls from "./VideoControls";

const VideoConsumer = () => {
  const videoRef = useRef();

  const onPlay = () => {
    videoRef.current.play();
  };
  const onPause = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <VideoControls onPlay={onPlay} onPause={onPause} />

      <Video
        url="https://cdn.sandals.com/sandals/v13/images/EN/home/hero-slider/videos/slide-1.mp4"
        settings={{ autoPlay: false, controls: true }}
        ref={videoRef}
      />
    </div>
  );
};

export default VideoConsumer;
