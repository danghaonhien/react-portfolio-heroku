import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

import { useSoftRiseShadowStyles } from "@mui-treasury/styles/shadow/softRise";
const useStyles = makeStyles({
  root: {
    fontFamily: "Gotu, san-serif",
  },
});

export default function GalleryCard(props) {
  const classes = useStyles();
  const styles = useSoftRiseShadowStyles({});
  return (
    <Card className={(classes.root, styles.root)}>
      <CardActionArea>
        <CardMedia classes={styles} component='img' image={props.img} />
      </CardActionArea>
    </Card>
  );
}
