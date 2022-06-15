import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles";

const PlaceDetails = (props) => {
  const classes = useStyles();
  const { place } = props;
  // console.log({ place });
  return (
    <>
      {place.name && (
        <Card elevation={6}>
          <CardMedia
            style={{ height: 350 }}
            image={
              place.photo
                ? place.photo.images.large.url
                : "https://i.guim.co.uk/img/media/2d5946decb0059ba05f11ed38c9234dbf37c6b3a/0_0_5616_3370/master/5616.jpg?width=620&quality=85&auto=format&fit=max&s=e3bdb05e16e11021e284257c4c0e67c6"
            }
            title={place.name}
          />

          <>
            <CardContent>
              <Typography gutterBottom variant="h5">
                {place.name}
              </Typography>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Price</Typography>
                <Typography gutterBottom variant="subtitle1">
                  {place.price_level}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Ranking</Typography>
                <Typography gutterBottom variant="subtitle1">
                  {place.ranking}
                </Typography>
              </Box>

              <div className={classes.awards}>
                {place?.awards?.map((award, i) => (
                  <Box
                    key={i}
                    my={1}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <img src={award.images.small} alt={award.display_name} />
                    <Typography variant="subtitle2" color="textSecondary">
                      {award.display_name}
                    </Typography>
                  </Box>
                ))}
              </div>

              {place?.cuisine?.map((cuisine, i) => (
                <Chip
                  key={i}
                  size="small"
                  label={cuisine.name}
                  className={classes.chip}
                />
              ))}

              {place?.address && (
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  color="textSecondary"
                  className={classes.subtitle}
                >
                  <LocationOnIcon className={classes.icon} /> {place.address}
                </Typography>
              )}

              {place?.phone && (
                <a href={`tel:${place.phone}`}>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    color="textSecondary"
                    className={classes.spacing}
                  >
                    <PhoneIcon className={classes.icon} /> {place.phone}
                  </Typography>
                </a>
              )}

              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => window.open(place.web_url, "_blank")}
                >
                  Trip Advisor
                </Button>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => window.open(place.website, "_blank")}
                >
                  Website
                </Button>
              </CardActions>
            </CardContent>
          </>
        </Card>
      )}
    </>
  );
};

export default PlaceDetails;
