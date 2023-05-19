import React from 'react'
import './discoverPlaces.css';
import PlaceItem from '../../PlaceItem';
import { places } from '../../../data/places';

const DiscoverPlaces = () => {
  return (
    <div className="horizontal-list-container">
        <div className="horizontal-list-content">
            {places.map((y) => {
                return <PlaceItem data={y} />;
            })}
        </div>
    </div>
  )
}

export default DiscoverPlaces