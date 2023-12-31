import React from "react";
import BannerBackground from "../assets/bg.png";
import mobileBackground from "../assets/bg-mobile.png";
import Navbar from "./Navbar";


const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <     div className="home-banner-container">
        <div className="mobile-bannerImage-container">
          <img src={mobileBackground} alt="" />
        </div>
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" className="banner-image" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            The Best Products Start With Figma
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Try For Free{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;