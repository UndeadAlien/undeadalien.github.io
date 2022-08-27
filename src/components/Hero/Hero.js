import React from "react";
import "./style/Hero.scss";

const Hero = () => {
  return (
    <>
      <div className="hero__wrapper" id="hero">
        <div className="wrapper">
          <div className="hero__content">
            <h1 className="name">Connor Hutchinson</h1>
            <p className="subtitle">Software Engineer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
