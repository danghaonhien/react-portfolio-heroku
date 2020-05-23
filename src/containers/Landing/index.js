import React from "react";
import { Link } from "react-router-dom";
import LandingGrid from "./LandingGrid";
import Bio from "./Bio";

import ScheduleIcons from "../../components/Icons/ScheduleIcons";
const Landing = () => {
  return (
    <section>
      <div className='container'>
        <Link className='App-arch' to='/Architecture'>
          <h1> Archi</h1>
        </Link>
        <Link className='App-code' to='/Code'>
          <h1>Tech</h1>
        </Link>
      </div>
      <div className='icon-spin'>
        <ScheduleIcons />
      </div>
      <Bio />
      <div className='icon-spin'>
        <ScheduleIcons />
      </div>
      <div className='landing-projects'>
        <LandingGrid />
      </div>
    </section>
  );
};

export default Landing;
