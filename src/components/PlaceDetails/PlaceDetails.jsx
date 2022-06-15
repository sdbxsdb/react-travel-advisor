import React from 'react'

const PlaceDetails = (props) => {
  const { place } = props;
  
  return (
    <div>{place.name}</div>
  )
}

export default PlaceDetails