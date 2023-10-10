import React, { useState, useRef } from 'react';
import './videoplayer.css'
import video from '../assets/Figmaland.mp4'
import thumbnail from '../assets/screen.png'
import { BsFillPlayCircleFill } from "react-icons/bs";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="video-container">
    <video
      ref={videoRef}
      className="video"
      controls
      poster={thumbnail} // Replace with the path to your thumbnail image
    >
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    {!isPlaying && (
       <button className="watch-video-button" onClick={togglePlay}>
       <BsFillPlayCircleFill /> 
     </button>
    )}
  </div>
  
  );
};

export default VideoPlayer;
