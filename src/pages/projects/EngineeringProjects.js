import React from "react";
import ProjectCard from "../../components/Cards/ProjectCard";
import { Fade } from "react-reveal";
import EngineeringSVG from "../../assets/svg/EngineeringSVG";

const homelab = {
  name: "homelab",
  url: "https://github.com/dancard32/homelab",
  description:
    "This public repository contains all the services that I am running on my personal server.",
  languages: [
    "FaRaspberryPi",
    "FaPython",
    "FaGithub",
    "SiProxmox",
    "SiPlex",
    "SiKubernetes",
    "SiOctoprint",
    "FaDocker",
    "SiPfsense",
    "SiHelm",
    "FaUbuntu",
    "SiAnsible",
    "SiTruenas",
    "SiHomeassistant",
    "SiGrafana",
    "SiPrometheus",
    "SiNginx",
  ],
};

const hft = {
  name: "hft",
  url: "https://github.com/dancard32/hft",
  description:
    "A graduate project with a high-frequency-trading algorithm employing ML to extrapolate best parameters to beat simulated market agents",
  languages: ["FaRaspberryPi", "FaPython"],
};

const projects = [homelab, hft, homelab, homelab, hft];

function EngineeringProjects() {
  return (
    <div class="bg-primary-50 dark:bg-primary-900 text-secondary-900 dark:text-primary-200">
      <Fade bottom duration={2000} distance="40px">
        <div class="justify-center grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-5">
            <h2 class="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Engineering Projects
            </h2>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Below are my projects that are based in engineering, that I have
              taken in my free time or are from my schooling.
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-7 lg:flex">
            <EngineeringSVG />
          </div>
        </div>
      </Fade>
      <div class="flex justify-center">
        <div className="grid grid-cols-3 w-3/4 m-5 bg-primary-50 dark:bg-primary-900 text-secondary-900 dark:text-primary-200">
          {projects.map((repo) => {
            return <ProjectCard repo={repo} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default EngineeringProjects;
