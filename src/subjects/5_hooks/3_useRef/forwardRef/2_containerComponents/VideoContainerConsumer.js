import React, { useRef } from "react";
import useWindowDimensions from "subjects/5_hooks/examples/useWindowDimensions";
import VideoContainer from "./VideoContainer";
import VideoControls from "./VideoControls";

const VideoContainerConsumer = () => {
  const videoContainerRef = useRef();

  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const onPlay = () => {
    videoContainerRef.current.play();
  };
  const onPause = () => {
    videoContainerRef.current.pause();
  };

  return (
    <div>
      {!isMobile && <VideoControls onPlay={onPlay} onPause={onPause} />}

      <VideoContainer
        video={{
          url: "https://cdn.sandals.com/sandals/v13/images/EN/home/hero-slider/videos/slide-1.mp4",
          settings: { autoPlay: false, controls: true },
        }}
        image={{
          url: "https://images.unsplash.com/photo-1501987637815-926e15177332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGV2b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          alt: "img",
        }}
        ref={videoContainerRef}
      />
    </div>
  );
};

export default VideoContainerConsumer;
