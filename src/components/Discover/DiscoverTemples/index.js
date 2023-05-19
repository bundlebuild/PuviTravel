import React from 'react'
import './discoverTemples.css';
import { temples } from '../../../data/temples';
import PrimaryButton from '../../Buttons/Primary';

const DiscoverTemples = () => {
  return (
    <div className="discover-temples-container">
        <div className="overlay"></div>
        <div className="horizontal-list-content flex-center">
            {temples.map((y) => {
                return (
                    <div className="vertical-discover-item" style={{backgroundImage: `url(${y.image})`}}>
                        <div className="vertical-discover-item-overlay"></div>
                        <div>
                            <div className="vertical-discover-heading">
                                {y.name}
                                <div className="vertical-discover-cta">
                                    <PrimaryButton text="View More" />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default DiscoverTemples