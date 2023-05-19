import React from 'react'
import './placeItem.css';

const PlaceItem = ({data}) => {
  return (
    <div className="place-item-card" style={{backgroundImage: `url(${data.image})`}}>
        <div className="place-item-black-overlay"></div>
        <div className="place-item-details">
            <div className="place-item-heading">
                {data.name}
            </div>
        </div>
    </div>
  )
}

export default PlaceItem