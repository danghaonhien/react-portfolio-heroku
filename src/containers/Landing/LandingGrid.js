import React from "react";
import StyledCard from "./StyledCard";

import Zoom from "@material-ui/core/Zoom";
import projects from "./../Portfolio/projects";
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
const LandingGrid = () => {
  return (
    <Zoom in={true}>
      <div className='createCard'>{projects.slice(0, 4).map(createCard)}</div>
    </Zoom>
  );
};

export default LandingGrid;
