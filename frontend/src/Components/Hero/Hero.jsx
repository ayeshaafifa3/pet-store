import React from "react";
import { Link } from "react-router-dom"; 
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="custom-shape-divider-bottom-1718953704">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="hero-left">
        <h1>NEW ARRIVALS ONLY</h1>
        <div>
          <div className="hero-hand-icon">
            <p>HIGH QUALITY PET FOOD</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Sale up to 40% off today</p>
          <p>for everyone</p>
        </div>

        <Link to="/dog" className="hero-latest-btn">
          <div>Shop now</div>
          <img src={arrow_icon} alt="" />
        </Link>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
