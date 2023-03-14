import React from 'react';
import Video from './Video';
import VideoContainer from './VideoContainer';

function Component() {
  // === Concept
  // Containering the components is a way in development to divide and reuse logic
  // (Component) is a container of (Video) and (VideoContainer)

  return (
    <div>
      <Video
        url="https://cdn.sandals.com/sandals/v13/images/EN/home/hero-slider/videos/slide-1.mp4"
        settings={{ autoPlay: false, controls: true }}
      />

      <hr className="mt-5 mb-5" />

      <VideoContainer
        video={{
          url: 'https://cdn.sandals.com/sandals/v13/images/EN/home/hero-slider/videos/slide-1.mp4',
          settings: { autoPlay: false, controls: true },
        }}
        image={{
          url: 'https://images.unsplash.com/photo-1501987637815-926e15177332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGV2b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          alt: 'img',
        }}
      />
    </div>
  );
}

export default Component;
