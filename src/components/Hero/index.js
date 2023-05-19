import React from 'react'
import './hero.css';

const Hero = () => {
  return (
    <div className="page-hero">
        <div className="hero-background-overlay"></div>
        <div className="discover-video-overlay"></div>
        <video width="320" height="240" playsInline="true" className="discover-inline-video" autoPlay loop muted playsInline>
            <source src="assets/videos/tamil-nadu.mp4" type="video/mp4" />
        </video>    
        <div className="page-hero-content">
            <div className="page-hero-content-heading">
                Travel our Tamil Nadu
            </div>
            <div className="page-hero-content-subheading">
                Immerse Yourself in the Magic of Tamil Nadu
            </div>
        </div>
    </div>
  )
}

export default Hero