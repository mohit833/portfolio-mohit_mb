import "./HeroImgStyles.css";
import React from 'react';
import IntroImg from "../assets/assett.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
            <div className="mask">
            <img className="into-img"src={IntroImg} alt="IntroImg"/>
            </div>
        <div className="content">
            <p>HI,I'M MOHIT MAHESH KUMAR</p>
            <h1>CS DEVELOPER.</h1>
            <div>
                <Link to="/project"
                className="btn">Projects</Link>
                <Link to="/contact"
                className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  );
};

export default HeroImg;