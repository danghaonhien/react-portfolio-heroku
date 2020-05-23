import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GalleryGrid from "./../Gallery/GalleryGrid";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  root: { margin: "auto", borderRadius: 0, position: "relative" },

  header: {
    margin: 15,
    textAlign: "center",
  },
  quote: {
    top: 0,
    marginBottom: 15,
    textAlign: "center",
  },
}));
const Gallery = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h5' component='h5' className={classes.header}>
        Gallery
      </Typography>
      <Typography variant='h6' component='h6' className={classes.quote}>
        Life through my Lens
      </Typography>
      <GalleryGrid />
    </div>
  );
};

export default Gallery;
