import React from 'react'
import DiscoverPlaces from './DiscoverPlaces'
import './discover.css';
import DiscoverFullView from './DiscoverFullView';
import DiscoverTemples from './DiscoverTemples';

const Discover = () => {
  return (
    <div className="discover-container">
        <div className="discover-wrapper">
            <div className="page-break-header">
                <div className="page-break-tamil">
                    கண்டுபிடிக்க
                </div>
                <div className="page-break-heading discover-page-heading">
                    Discover.
                </div>
            </div>
            <DiscoverPlaces />    
            <DiscoverTemples />
        </div>
    </div>
  )
}

export default Discover