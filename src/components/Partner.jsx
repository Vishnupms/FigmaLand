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
  return (
    <div className="partner-section-wrapper">
      <div className="partner-section-top">
        <h1 className="primary-heading">Partner</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
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
        
      </div>
      <button className="secondary-button">
            Try For Free{" "}
          </button>
    </div>
  );
};

export default Partner;
