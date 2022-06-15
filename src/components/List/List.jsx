import React from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import useStyles from "./styles";
import { useState } from "react";
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState("hotels");
  const [rating, setRating] = useState("");

  const places = [
    { name: "place 1" },
    { name: "place 2" },
    { name: "place 3" },
    { name: "place 4" },
    { name: "place 5" },
    { name: "place 6" },
    { name: "place 7" },
    { name: "place 8" },
    { name: "place 9" },
    { name: "place 10" },
  ];

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Hotels, Restaurants & Attractions around you.
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
