import React, { useEffect, useRef } from "react";

import video from "../assets/belka.mp4";

const Video = () => {
  const videoRef = useRef();

  const handleClick = () => {
    videoRef.current.muted = false;
  };

  useEffect(() => {
    if (videoRef.current) {
      setTimeout(() => videoRef.current.play(), 1000);
    }
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        muted
        id="check-video"
        style={{ objectFit: "cover" }}
        width="600"
        height="400"
      >
        <source src={video} type="video/mp4" />
      </video>
      <button onClick={handleClick}>Value</button>
    </div>
  );
};

export default Video;
