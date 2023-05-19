import React from 'react'
import '../bigDropdown.css'
import DestinationDropdownItem from './DestinationDropdownItem'

const SelectDestinationBigDropdown = () => {
  const [mapLocations, setMapLocations] = React.useState([
    'Chennai',
    'Madurai',
    'Mamallapuram',
    'Pondicherry',
    'Rameshwaram'
  ])
  return (
    <div className="big-dropdown-container" style={{left: 0}}>
        {mapLocations.map((y) => {
          return <DestinationDropdownItem destinationLabel={y} />;
        })}
    </div>
  )
}

export default SelectDestinationBigDropdown