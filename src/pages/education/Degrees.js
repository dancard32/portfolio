import React from "react";
import { Timeline, TimelineItem } from "flowbite-react";
import { Fade } from "react-reveal";
import DegreeEntry from "../../components/Timeline/DegreeEntry";

const umich_g = {
  duration: "August 2020 - May 2021",
  title: "MSE in Aerospace Engineering",
  university: "University of Michigan",
  location: "Ann Arbor, MI",
  url: "https://umich.edu",
  accolades: ["Graduate Student Instructor"],
};

const umich_ug = {
  duration: "August 2018 - August 2020",
  title: "BSE in Aerospace Engineering",
  university: "University of Michigan",
  location: "Ann Arbor, MI",
  url: "https://umich.edu",
  accolades: ["Summa Cum Laude", "1st Generation Engineer"],
};

const degrees = [umich_g, umich_ug];

function Skill_SoftwareEngineer() {
  return (
    <div class="flex justify-center items-center">
      <div class="justify-center items-center bg-primary-50 dark:bg-primary-900 p-5 w-5/6">
        <div class="text-start w-full">
          <h1 class="text-start max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Degrees Received
          </h1>
        </div>

        <div class="w-full">
          <Timeline class="self-center text-start">
            <TimelineItem class="pb-5">
              {degrees?.map((degree, index) => {
                return (
                  <Fade bottom duration={(index+1)*1000}>
                    <DegreeEntry degree={degree} />
                  </Fade>
                );
              })}
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
}

export default Skill_SoftwareEngineer;
