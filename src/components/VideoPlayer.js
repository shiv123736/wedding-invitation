import React from "react";
import video from "../assets/video/ss.mp4";

const VideoPlayer = () => {
  return (
    <div>
      <video width="360" height="640" controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
