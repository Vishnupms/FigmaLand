
import shapes from '../assets/shapes.png'
import ReactPlayer from 'react-player';
import draw from '../assets/draw.png'
import brush from '../assets/brush.png'
import { useState } from 'react';
import { Button } from '@mui/material';
import VideoPlayer from './VideoPlayer';

const Features = () => {

    const featureInfoData = [
        {
          image: shapes,
          title: "Pick Meals",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
        },
        {
          image: draw,
          title: "Choose How Often",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
        },
        {
          image: brush,
          title: "Fast Deliveries",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
        },
      ];
      
      return (
        <div className="feature-section-wrapper">
          <div className="feature-section-top">
            <h1 className="primary-heading">Features</h1>
            <p className="primary-text">
              Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
              elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
            </p>
          </div>
          <div className="feature-section-bottom">
            {featureInfoData.map((data) => (
              <div className="feature-section-info" key={data.title}>
                <div className="info-boxes-img-container">
                  <img src={data.image} alt="" />
                </div>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
              </div>
            ))}
          </div>
          <div className='video-screen'>
        
        <VideoPlayer/>

          </div>
        </div>
      );
    };
    

export default Features