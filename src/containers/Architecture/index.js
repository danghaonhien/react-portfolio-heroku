import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import projects from "./../Portfolio/projects";
import ArchCard from "./ArchCard";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import Zoom from "@material-ui/core/Zoom";
import StyledCard from "./../Landing/StyledCard";
import ScheduleIcons from "../../components/Icons/ScheduleIcons";
import Typography from "@material-ui/core/Typography";
function createCard(projects) {
  return (
    <StyledCard
      key={projects.id}
      title={projects.title}
      img={projects.imgURL}
      content={projects.content}
    />
  );
}

function HeaderCard(projects) {
  return (
    <ArchCard
      key={projects.id}
      title={projects.title}
      img={projects.imgURL}
      content={projects.content}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    borderRadius: 0,
    position: "relative",
    textAlign: "center",
  },

  header: {
    margin: 15,
    textAlign: "center",
  },
}));

const Architecture = (props) => {
  const classes = useStyles();
  const params = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",

    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 150,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination.customized-swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next.customized-swiper-button-next",
      prevEl: ".swiper-button-prev.customized-swiper-button-prev",
    },

    spaceBetween: 30,
  };

  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper} elevation={1}>
              {" "}
              <Swiper {...params}>
                <div> {projects.slice(0, 1).map(HeaderCard)}</div>
                <div>
                  <div> {projects.slice(1, 2).map(HeaderCard)}</div>
                </div>
                <div> {projects.slice(2, 3).map(HeaderCard)}</div>
              </Swiper>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className='icon-spin'>
        <ScheduleIcons />
      </div>
      <Typography variant='h5' component='h5' className={classes.header}>
        Architectural Portfolio
      </Typography>
      <div className='icon-spin'>
        <ScheduleIcons />
      </div>
      <div className={classes.root}>
        <Zoom in={true}>
          <div className='createCard'>{projects.map(createCard)}</div>
        </Zoom>
      </div>
      <br />
    </div>
  );
};

export default Architecture;
