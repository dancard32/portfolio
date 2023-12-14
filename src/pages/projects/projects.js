import React from "react";
import Splash from "./Splash";
import ProjectList from "./ProjectList";

function Projects() {
  return (
    <section class="bg-primary-50 dark:bg-primary-900 text-secondary-900 dark:text-primary-200">
      <Splash />
      <ProjectList />
    </section>
  );
}

export default Projects;
