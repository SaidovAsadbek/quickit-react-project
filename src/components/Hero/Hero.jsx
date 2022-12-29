import React from "react";
import "./Hero.css";

// imported Navbar and HeroContent Components
import Navbar from "./Navbar/Navbar";
import HeroContent from "./HeroContent/HeroContent";

const Hero = () => {
    return (
        <header className="hero">
            <Navbar />
            <HeroContent />
        </header>
    );
};

export default Hero;
