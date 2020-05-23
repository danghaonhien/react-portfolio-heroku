import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ChevronRightSharpIcon from "@material-ui/icons/ChevronRightSharp";
import { useSoftRiseShadowStyles } from "@mui-treasury/styles/shadow/softRise";
const useStyles = makeStyles({
  root: {
    fontFamily: "Gotu, san-serif",
  },
});

export default function StyledCard(props) {
  const classes = useStyles();
  const styles = useSoftRiseShadowStyles({});
  return (
    <div className='cardRender'>
      <Card className={(classes.root, styles.root)}>
        <CardActionArea>
          <CardMedia
            classes={styles}
            component='img'
            height='200'
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

        <CardActions className='nextButton'>
          <Button size='small'>
            <ChevronRightSharpIcon />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
