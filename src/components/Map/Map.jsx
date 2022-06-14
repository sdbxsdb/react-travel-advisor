import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const coordinates = { lat: 54.566219, lng: -5.840555 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact 
        bootstrapURLKeys={{ key: 'AIzaSyBPpBshnba-9KCZsa83I4ah8xwd4UhtHHY' }}
        defaultCenter={{ coordinates }}
        center={coordinates}
        defaultZoom={isMobile ? 15 : 13}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
        >

      </GoogleMapReact>
    </div>
  )
}

export default Map