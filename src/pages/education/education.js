import React from "react";
import Splash from "./Splash";
import Degrees from "./Degrees";
import Skills from "./Skills";

const gatech_g = {
  duration: "August 2020 - Present",
  title: "MS in Computer Science",
  university: "Georgia Institute of Technology",
  location: "Atlanta, GA",
  url: "https://omscs.gatech.edu/",
  accolades: ["Teaching Assistant"],
};
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

const in_progress = [gatech_g];
const degrees = [umich_g, umich_ug];

function Education() {
  return (
    <section class="bg-primary-900">
      <Splash />
      <Degrees header="In Progress" degree={in_progress}/>
      <Degrees header="Degrees Received" degree={degrees}/>
      <Skills />
    </section>
  );
}

export default Education;
