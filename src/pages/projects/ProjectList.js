import React from "react";
import ProjectCard from "../../components/Cards/ProjectCard";
//import { projects } from "../../portfolio"

const homelab ={
    name: "homelab",
    url: "https://github.com/dancard32/homelab",
    description: "This public repository contains all the services that I am running on my personal server.",
    languages: [ "FaRaspberryPi", "FaPython", "FaGithub", "SiProxmox", "SiPlex", "SiKubernetes", "SiOctoprint", "FaDocker", "SiPfsense", "SiHelm", "FaUbuntu", "SiAnsible", "SiTruenas", "SiHomeassistant", "SiGrafana", "SiPrometheus", "SiNginx"],
  };

const hft = {
    name: "hft",
    url: "https://github.com/dancard32/hft",
    description: "A graduate project with a high-frequency-trading algorithm employing ML to extrapolate best parameters to beat simulated market agents",
    languages: [ "FaRaspberryPi", "FaPython"]
};

const spotify_player = {
    name: "spotify-player",
    url: "https://github.com/dancard32/spotify-player",
    description: "This project uses a Raspberry Pi integrated with Spotify's web API and RFID module to make a modern record player.",
    languages: [ "FaRaspberryPi", "FaPython"]
};




function ProjectList() {
    return (
        <div class="flex justify-center">
            <div className="bg-primary-50 dark:bg-primary-900 text-secondary-900 dark:text-primary-200 grid grid-cols-3 w-3/4 m-5">
                <ProjectCard repo={homelab}/>
                <ProjectCard repo={hft}/>
                <ProjectCard repo={spotify_player}/>
            </div>
        </div>
  );
}

export default ProjectList;
