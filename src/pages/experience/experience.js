import React from "react";
import Splash from "./Splash";
import ExperienceAccordion from "./ExperienceAccordion";
import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import PositionEntry from "../../components/Timeline/PositionEntry";
import ExperienceTimeline from "./ExperienceTimeline";

function Experience() {
  return (
    <section class="bg-primary-900">
      <Splash />
      <ExperienceTimeline />
    </section>
  );
}

export default Experience;
