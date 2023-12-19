import React from "react";
import { Fade } from "react-reveal";
import Skill_SoftwareEngineer from "./Skill_SoftwareEngineer";

function WhatIDo() {
  return (
    <div id="skills">
      <div className="bg-primary-50 dark:bg-primary-900 text-secondary-900 dark:text-primary-200">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="text-8xl text-secondary-900 dark:text-primary-200">
            Here's what I do
          </h1>
        </Fade>
      </div>
      <Skill_SoftwareEngineer />
    </div>
  );
}

export default WhatIDo;
