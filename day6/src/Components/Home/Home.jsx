import React from "react";
import { Link } from "react-router-dom";
import BannerBackground from "../../assets/home-banner-background.png";
import BannerImage from "../../assets/meditate_women.gif";
import NavBar from "../../Components/NavBar";
import blob from "../../assets/blob1.png";
const Home = () => {
  return (
    <div className="home-container">
     
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={blob} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Welcome to YogaZen.</h1>
          <p className="primary-text">
            Awaken the possibilities within with Yoga Education. Embark on your yoga exploration today.
          </p>
          
          <div className="home-signin-signup-buttons">
            <Link to="/signin">
               <button className="primary-button" 
              // style={{
              //   backgroundColor: "#A7F0BA",
              //   color: "black"}}
                
              
              >Sign In</button>
            </Link>
           
            <Link to="/signup" 
            
            >
              <button className="primary-button" 
              // {style={{
              //   backgroundColor: "#A7F0BA",
              //   color: "black"}}}
                >Sign Up</button>
            </Link>
          </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
