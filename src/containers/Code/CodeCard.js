import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useSoftRiseShadowStyles } from "@mui-treasury/styles/shadow/softRise";
const useStyles = makeStyles({
  root: {
    fontFamily: "Gotu, san-serif",
  },
  media: {
    height: 450,
  },
});

export default function CodeCard(props) {
  const classes = useStyles();
  const styles = useSoftRiseShadowStyles({});
  return (
    <Card className={(classes.root, styles.root)}>
      <CardActionArea>
        <CardMedia
          classes={styles}
          className={classes.media}
          component='img'
          image={props.img}
        />
        <CardContent>
          <Typography variant='h6' component='h6'>
            {props.title}
          </Typography>

          <Typography variant='body2' color='textSecondary' component='p'>
            {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
}
