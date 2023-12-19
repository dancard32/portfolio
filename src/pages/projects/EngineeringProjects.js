import React from "react";
import EngineeringProjectCard from "../../components/Cards/EngineeringProjectCard";
import { Fade } from "react-reveal";
import EngineeringSVG from "../../assets/svg/EngineeringSVG";

const engineering = [
  {
    name: "2Kw Krypton Hall Effect Thruster",
    url: "2kW HET.pdf",
    description:
      "Using Fusion 360, designed a Hall Effect Thruster from start to finish adopting first-principles and industry standards.",
    img: "HET.webp",
    software: [
      {
        name: "Fusion 360",
        img_path: "Fusion-logo-square.webp",
      },
      {
        name: "Python",
        img_path: "Python-logo.webp",
      },
    ],
  },
  {
    name: "Supersonic Engine Analysis",
    url: "Supersonic Engine Analysis.pdf",
    description:
      "In my graduate CFD course, used finite-element analysis and mesh adaptation to approximate the flow fields through a ramjet.",
    img: "ramjet_diag.webp",
    software: [
      {
        name: "Python",
        img_path: "Python-logo.webp",
      },
      {
        name: "Github",
        img_path: "Github-logo.webp",
      },
    ],
  },
  {
    name: "Analysis of Cooled Nozzle",
    url: "Regeneratively Cooled Nozzle Channels.pdf",
    description:
      "In graduate computational methods for aerospace engineering, simulated the heat flow through a Regeneratively cooled channel.",
    img: "ssme25.webp",
    software: [
      {
        name: "Python",
        img_path: "Python-logo.webp",
      },
      {
        name: "Matlab",
        img_path: "Matlab-logo.webp",
      },
    ],
  },
  {
    name: "Lunar Lander Truss Simulation",
    url: "Lunar Lander Truss.pdf",
    description:
      "In my graduate computational methods for aerospace engineering I simulated the deformations of a truss during a lunar touchdown.",
    img: "truss_deform.gif",
    software: [
      {
        name: "Matlab",
        img_path: "Matlab-logo.webp",
      },
    ],
  },
  {
    name: "Voyager 2 Mission Simulation",
    url: "Voyager 2.pdf",
    description:
      "This project simulated Voyager 2's mission through the solar system stepping through all the numerous flyby's of the four gas giants.",
    img: "voyager2.webp",
    software: [
      {
        name: "Matlab",
        img_path: "Matlab-logo.webp",
      },
    ],
  },
  {
    name: "Analysis of Facility Effects",
    url: "Facility Effects.pdf",
    description:
      "Researched the various ways that on-ground facilities effect the performance of electric propulsion.",
    img: "facility_effects.webp",
    software: [
      {
        name: "Matlab",
        img_path: "Matlab-logo.webp",
      },
    ],
  },
  {
    name: "2019 PEPL Research",
    url: "SURE 2019 Proposal.pdf",
    description:
      "Summer 2019, I conducted research at PEPL. While there I repaired motion stages and improved their accuracy and life-time.",
    img: "lilac.webp",
    software: [
      {
        name: "Fusion 360",
        img_path: "Fusion-logo-square.webp",
      },
      {
        name: "Matlab",
        img_path: "Matlab-logo.webp",
      },
      {
        name: "ExpressPCB",
        img_path: "ExpressPCB-logo.webp",
      },
    ],
  },
  {
    name: "Hovercraft Design Project",
    url: "Hovercraft Presentation.pdf",
    description:
      "In my undergraduate systems engineering class we created preliminary hovercraft design and then iterated these designs.",
    img: "hovercraft.webp",
    software: [
      {
        name: "Arduino",
        img_path: "Arduino-logo-square.webp",
      },
      {
        name: "Matlab",
        img_path: "Matlab-logo.webp",
      },
      {
        name: "Fusion 360",
        img_path: "Fusion-logo-square.webp",
      },
      {
        name: "CATIA",
        img_path: "CATIA-logo.webp",
      },
    ],
  },
];

function EngineeringProjects() {
  return (
    <div class="bg-primary-50 dark:bg-primary-900 text-secondary-900 dark:text-primary-200">
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

      <div class="flex justify-center">
        <div className="grid grid-cols-3 w-3/4 m-5 bg-primary-50 dark:bg-primary-900 text-secondary-900 dark:text-primary-200">
          {engineering.map((repo) => {
            return <EngineeringProjectCard repo={repo} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default EngineeringProjects;
