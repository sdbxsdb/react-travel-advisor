import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

import useStyles from "./styles";

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
        defaultCenter={{ coordinates }}
        center={coordinates}
        defaultZoom={isMobile ? 15 : 13}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        }}
        onChildClick={''}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
