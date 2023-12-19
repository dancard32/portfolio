import React from "react";
import { Timeline, TimelineItem } from "flowbite-react";
import { Fade } from "react-reveal";
import DegreeEntry from "../../components/Timeline/DegreeEntry";

function Skill_SoftwareEngineer({header, degree}) {
  return (
    <div class="flex justify-center items-center bg-primary-50 dark:bg-primary-900">
      <div class="justify-center items-center p-5 w-5/6">
        <div class="text-start w-full">
          <h1 class="text-start max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {header}
          </h1>
        </div>

        <div class="w-full">
          <Timeline class="self-center text-start">
            <TimelineItem class="pb-5">
              {degree?.map((degree, index) => {
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
