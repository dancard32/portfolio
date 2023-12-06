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

const google_maps_tourist = {
    name: "google-maps-tourist",
    url: "https://github.com/dancard32/google-maps-tourist",
    description: "This uses Google Maps API and from an beginning/end point to automatically generate a tourist attraction route.",
    languages: [ "FaPython", "SiFlask", "FaHtml5", "FaReact", "FaCss3", "FaGithub"]
  };

const google_translate_conversation = {
    name: "google-translate-conversation",
    url: "https://github.com/dancard32/google-translate-conversation",
    description: "This simple project Google Translate API to automatically converts speech to text, then text to the other person's native language.",
    languages: [ "FaPython", "FaGithub" ]
  }
const website = {
    name: "website",
    url: "https://github.com/dancard32/website",
    description: "This is simply the github repository of the current website that you are viewing.",
    languages: [ "FaHtml5", "FaReact", "FaCss3", "FaGithub" ]
  };
const conway_game_of_life = {
    name: "conway-game-of-life",
    url: "https://github.com/dancard32/conway-game-of-life",
    description: "This game is a cellular automaton devised by mathematician John Conway to highlight that evolution is determined by an initial state.",
    languages: [ "FaPython", "FaGithub" ]
  }
const rng_image_generator = {
    name: "random-image-generation",
    url: "",
    description: "Back end Python implementation to generate specified number of images with pre-determined probabilities for NFT implementation.",
    languages: [ "FaPython", "FaGithub" ]
  };


function ProjectList() {
    return (
        <div class="flex justify-center bg-primary-50 dark:bg-primary-900">
            <div className="bg-primary-50 dark:bg-primary-900 text-secondary-900 dark:text-primary-200 grid grid-cols-3 w-3/4 m-5">
                <ProjectCard repo={homelab}/>
                <ProjectCard repo={hft}/>
                <ProjectCard repo={spotify_player}/>
                <ProjectCard repo={google_maps_tourist}/>
                <ProjectCard repo={google_translate_conversation}/>
                <ProjectCard repo={website}/>
                <ProjectCard repo={conway_game_of_life}/>
                <ProjectCard repo={rng_image_generator}/>
            </div>
        </div>
  );
}

export default ProjectList;
