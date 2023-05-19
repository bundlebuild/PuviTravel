import React from 'react'
import './discoverFullView.css';

const DiscoverFullView = () => {
  return (
    <div className="discover-full-view">
        <div className="discover-full-overlay"></div>
        <div className="discover-full-view-details">
            <div className="discover-full-view-heading">
                Pondicherry
            </div>
            <div className="discover-full-view-cta">
                <button>
                    Book Now
                </button>
            </div>
        </div>
    </div>
  )
}

export default DiscoverFullView