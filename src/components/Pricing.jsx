// src/components/PricingCards.js
import React from 'react';
import './pricing.css';

const PricingCards = () => {
  return (
    <div className="pricing-section-wrapper">
    <div className="pricing-section-top">
      <h1 className="primary-heading">Features</h1>
      <p className="primary-text">
        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
        elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
      </p>
    </div>
    <div className='pricing-section-bottom'>
    <div className="pricing-cards">
      <div className="pricing-card">
        <h2>FREE</h2>
        <p>Organaise across all apps by hand</p>
        <h1 className="price">19<span style={{fontSize:"15px", marginLeft:"5px"}}>Per Month</span></h1>
        <p style={{marginTop:"20px"}}>pricing feature</p>
        <p>pricing feature</p>
        <p>pricing feature</p>
        <p>pricing feature</p>
        <p>pricing feature</p>
        <button className='secondary-button' style={{marginLeft:"40px"}}>Order Now</button>
      </div>
      <div className="pricing-card center-card">
        <h2 style={{marginTop:"40px"}}>STANDARD</h2>
        <p>Organaise across all apps by hand</p>
        <h1 className="price">10<span style={{fontSize:"15px", marginLeft:"5px"}}>Per Month</span></h1>
        <p style={{marginTop:"20px"}}>pricing feature</p>
        <p>pricing feature</p>
        <p>pricing feature</p>
        <p>pricing feature</p>
        <p>pricing feature</p>

        <button className='primary-button' style={{color:"#2091f9",width:"200px"}}>Order Now</button>
      </div>
      <div className="pricing-card">
        <h2>BUSINESS</h2>
        <p>Organaise across all apps by hand</p>
        <h1 className="price">99<span style={{fontSize:"15px", marginLeft:"5px"}}>Per Month</span></h1>
        <p style={{marginTop:"20px"}}>pricing feature</p>
        <p>pricing feature</p>
        <p>pricing feature</p>
        <p>pricing feature</p>
        <p>pricing feature</p>
        <button className='secondary-button' style={{marginLeft:"40px"}}>Order Now</button>
      </div>
    </div>
    <div className='botom' style={{marginBottom:"100px"}}></div>
    </div>
    </div>
  );
};

export default PricingCards;
