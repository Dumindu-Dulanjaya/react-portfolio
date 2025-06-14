import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.jpg'; // Make sure the path is correct

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <img className="hero-img" src={profile_img} alt="Profile" />
      </div>

      <div className="hero-right">
        <h1>I'm Dumindu Dulanjaya, a passionate Frontend Developer based in Sri Lanka.</h1>

        <p>
          I specialize in building modern, responsive web interfaces using React.js and other cutting-edge technologies.
          I enjoy turning ideas into beautiful and functional websites. Let's connect and create something amazing together!
        </p>

        <div className="hero-action">
          <div className="hero-connect">Connect with me</div>
          <div className="hero-resume">My resume</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
