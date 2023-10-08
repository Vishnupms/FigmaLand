import React, { useState, useRef } from 'react';
import './videoplayer.css'
import video from '../assets/Figmaland.mp4'
import thumbnail from '../assets/screen.png'

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
      <div className="play-button" onClick={togglePlay}>
        <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="20" fill="transparent" stroke="#fff" strokeWidth="3" />
          <polygon points="15,15 15,35 35,25" fill="#fff" />
        </svg>
      </div>
    )}
  </div>
  
  );
};

export default VideoPlayer;
