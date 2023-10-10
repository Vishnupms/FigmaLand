import React from "react";
import google from '../assets/google.png'
import amazon from '../assets/amazon.png'
import microsoft from '../assets/microsoft.png'
import uber from '../assets/uber.png'
import dropbox from '../assets/dropbox.png'




const Partner = () => {
  const partnerImages = [
    {
      image: google,
      text: "Client Name"
    },
    {
      image: amazon,
      text: "Client Name"
    },
    {
      image: microsoft,
      text: "Client Name"
    },
    {
      image: uber,
      text: "Client Name"
    },
    {
      image: dropbox,
      text: "Client Name"
    },
    {
      image: google,
      text: "Client Name"
    },
    {
      image: uber,
      text: "Client Name"
    },
    {
      image: amazon,
      text: "Client Name"
    },
  ];

  const partnerMobile = [
    {
      image: google,
      text: "Client Name"
    },
    {
      image: amazon,
      text: "Client Name"
    },
    {
      image: microsoft,
      text: "Client Name"
    },


  ]
  return (
    <div className="partner-section-wrapper">
      <div className="partner-section-top">
        <h1 className="primary-heading">Partners</h1>
        <p className="primary-text">
        Most calendars are designed for teams. Slate is designed for freelancers
        </p>
      </div>
      <div className="partner-section-bottom">
        {partnerImages.map((data) => (
          <div className="partner-section-info" key={data.text}>
            <div className="partner-img-container">
               <p>{data.text}</p>
              <img
                src={data.image}
                alt=""
                className="partner-img"
              />
            </div>
          </div>
        ))}
          {partnerMobile.map((data) => (
         <div className="partner-section-info-mobile" key={data.text}>
            <div className="partner-img-container">
               <p>{data.text}</p>
              <img
                src={data.image}
                alt=""
                className="partner-img"
              />
            </div>
          </div>
            ))}
      </div>
      <button className="secondary-button" style={{marginTop:"50px"}}>
            Try For Free
          </button>
    </div>
  );
};

export default Partner;
