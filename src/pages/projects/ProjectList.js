import React from "react";
import ProjectCard from "../../components/Cards/ProjectCard";

function ProjectList() {
    return (
        <div class="flex justify-center">
            <div className="bg-primary-50 dark:bg-primary-900 text-secondary-900 dark:text-primary-200 grid grid-cols-3 w-3/4">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>
  );
}

export default ProjectList;
