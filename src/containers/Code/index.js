import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import projects from "./../Portfolio/projects";
import CodeCard from "./CodeCard";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import Zoom from "@material-ui/core/Zoom";
import StyledCard from "./../Landing/StyledCard";
import ScheduleIcons from "../../components/Icons/ScheduleIcons";
import Typography from "@material-ui/core/Typography";

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
const Code = (props) => {
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
                <div>
                  <CodeCard
                    title={projects[0].title}
                    img={projects[0].imgURL}
                    content={projects[0].content}
                  />
                </div>
                <div>
                  <CodeCard
                    title={projects[1].title}
                    img={projects[1].imgURL}
                    content={projects[1].content}
                  />
                </div>
                <div>
                  <CodeCard
                    title={projects[2].title}
                    img={projects[2].imgURL}
                    content={projects[2].content}
                  />
                </div>
              </Swiper>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className='icon-spin'>
        <ScheduleIcons />
      </div>
      <Typography variant='h5' component='h5' className={classes.header}>
        Coding Portfolio
      </Typography>
      <div className='icon-spin'>
        <ScheduleIcons />
      </div>
      <div className={classes.root}>
        <Zoom in={true}>
          <div className={classes.root}>
            <Grid
              container
              spacing={3}
              alignItems='center'
              alignContent='center'
            >
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <StyledCard
                  title={projects[0].title}
                  img={projects[0].imgURL}
                  content={projects[3].content}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <StyledCard
                  title={projects[1].title}
                  img={projects[1].imgURL}
                  content={projects[3].content}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <StyledCard
                  title={projects[2].title}
                  img={projects[2].imgURL}
                  content={projects[3].content}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <StyledCard
                  title={projects[3].title}
                  img={projects[3].imgURL}
                  content={projects[3].content}
                />
              </Grid>
            </Grid>
          </div>
        </Zoom>
      </div>
      <br />
    </div>
  );
};

export default Code;
