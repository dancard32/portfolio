import React from "react";
import Splash from "./Splash";
import ProjectList from "./ProjectList";
import EngineeringProjects from "./EngineeringProjects";

function Projects() {
  return (
    <section class="bg-primary-50 dark:bg-primary-900 text-secondary-900 dark:text-primary-200">
      <Splash />
      <ProjectList />
      <EngineeringProjects />
    </section>
  );
}

export default Projects;
