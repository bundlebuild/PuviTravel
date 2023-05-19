import React from 'react'
import './hillStationBanner.css';
import PrimaryButton from '../../Buttons/Primary';

const HillStationBanner = () => {
  return (
    <div className="banner-full hill-station-banner">
        <div className="overlay"></div>
        <div className="banner-full-content">
            <div className="banner-header-content">
                <div class="banner-heading">
                    Hill Stations: Nature's Serene Escapes
                </div>
                <div className="banner-subheading">
                    Let us take you around...
                </div>
            </div>
            <div className="banner-full-cta">
                <div className="lg-book-now-btn">
                    Book Now
                </div>
            </div>
        </div>
    </div>
  )
}

export default HillStationBanner