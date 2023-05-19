import React from 'react'
import './header.css';

const Header = () => {
  return (
    <div className="page-header">
        <div className="page-header-content">
            <div className="page-header-logo">
                PuviTravel
            </div>
            <div className="page-header-links desktop-only">
                <div className="page-header-link-item">
                    <a className="unstyled-link">
                        Home
                    </a>
                </div>
                <div className="page-header-link-item">
                    <a className="unstyled-link">
                        Discover
                    </a>
                </div>
                <div className="page-header-link-item">
                    <a className="unstyled-link">
                        Highlights
                    </a>
                </div>
                <div className="page-header-link-item">
                    <div className="btn btn-book-now">
                        Book Now
                    </div>
                </div>
                <div className="page-header-link-item">
                    <a className="unstyled-link">
                        <strong>Contact Us</strong>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header