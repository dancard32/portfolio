import React from "react";
import PercentagesSVG from "../../assets/svg/PercentagesSVG";
import { Fade } from "react-reveal";
import WorkingSkillCard from "../../components/Cards/WorkingSkillCard";

const skills = {
  programming_language: {
    color_code: "bg-pink-500",
    skills: [
      {
        title: "Python",
        subtitle: "Programming Language",
        icon: "FaPython",
        url: "https://www.python.org/",
      },
      {
        title: "HTML",
        subtitle: "Programming Language",
        icon: "FaHtml5",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        title: "CSS",
        subtitle: "Programming Language",
        icon: "FaCss3",
        url: "https://www.css3.info/",
      },
      {
        title: "LaTeX",
        subtitle: "Programming Language",
        icon: "SiLatex",
        url: "https://www.latex-project.org/",
      },
      {
        title: "React",
        subtitle: "Programming Language",
        icon: "FaReact",
        url: "https://reactjs.org/",
      },
      {
        title: "C++",
        subtitle: "Programming Language",
        icon: "FaCode",
        url: "https://www.cplusplus.com/",
      },
      {
        title: "Arduino",
        subtitle: "Programming Language",
        icon: "SiArduino",
        url: "https://www.arduino.cc/",
      },
    ],
  },
  supporting_software: {
    color_code: "bg-yellow-400",
    skills: [
      {
        title: "Docker",
        subtitle: "Supporting Software",
        icon: "FaDocker",
        url: "https://docker.com/",
      },
      {
        title: "Kubernetes",
        subtitle: "Supporting Software",
        icon: "SiKubernetes",
        url: "https://kubernetes.io/",
      },
      {
        title: "Github",
        subtitle: "Supporting Software",
        icon: "FaGithub",
        url: "https://github.com/",
      },
      {
        title: "Linux",
        subtitle: "Supporting Software",
        icon: "FaLinux",
        url: "https://www.linux.org/",
      },
      {
        title: "SQL Lite",
        subtitle: "Supporting Software",
        icon: "SiMysql",
        url: "https://www.sqlite.org/index.html",
      },
      {
        title: "Ubuntu",
        subtitle: "Supporting Software",
        icon: "FaUbuntu",
        url: "https://ubuntu.com/",
      },
      {
        title: "Git",
        subtitle: "Supporting Software",
        icon: "FaGitAlt",
        url: "https://git-scm.com/",
      },
    ],
  },
  engineering_skills: {
    color_code: "bg-gray-600",
    skills: [
      {
        title: "Oscilloscope",
        subtitle: "Engineering Skills",
        icon: "SiSiemens",
        url: "https://en.wikipedia.org/wiki/Oscilloscope",
      },
      {
        title: "Multimeter",
        subtitle: "Engineering Skills",
        icon: "SiSiemens",
        url: "https://en.wikipedia.org/wiki/Multimeter",
      },
      {
        title: "Fusion 360",
        subtitle: "Engineering Skills",
        icon: "SiSiemens",
        url: "https://www.autodesk.com/products/fusion-360/overview",
      },
      {
        title: "Cura",
        subtitle: "Engineering Skills",
        icon: "SiSiemens",
        url: "https://ultimaker.com/software/ultimaker-cura",
      },
      {
        title: "NX",
        subtitle: "Engineering Skills",
        icon: "SiSiemens",
        url: "https://www.plm.automation.siemens.com/global/en/products/nx/",
      },
      {
        title: "ExpressPCB",
        subtitle: "Engineering Skills",
        icon: "SiSiemens",
        url: "https://www.expresspcb.com/",
      },
      {
        title: "SolidWorks",
        subtitle: "Engineering Skills",
        icon: "SiSiemens",
        url: "https://www.solidworks.com/",
      },
    ],
  },
};

function Splash() {
  return (
    <div className="bg-primary-50 dark:bg-primary-900 text-secondary-900 dark:text-primary-200">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-5">
          <h1 class="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Skills
          </h1>
          <h2 class="text-4xl">Basic Qualification and Certifications</h2>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Listed below are working skills that I have been able hone
          </p>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-7 lg:flex">
          <Fade right duration="1500">
            <PercentagesSVG />
          </Fade>
        </div>
      </div>
      <div class="flex justify-center bg-primary-50 dark:bg-primary-900 text-secondary-900 dark:text-primary-200">
        <div className="grid grid-cols-3 w-3/4 m-5 bg-primary-50 dark:bg-primary-900 text-secondary-900 dark:text-primary-200">
          {skills.programming_language.skills?.map((skill, index) => {
            if (index < 6) {
              return (
                <Fade bottom duration={(index + 1) * 1000}>
                  <WorkingSkillCard
                    skill={skill}
                    theme={skills.programming_language.color_code}
                  />
                </Fade>
              );
            } else {
              return (
                <Fade bottom duration={6000}>
                  <WorkingSkillCard
                    skill={skill}
                    theme={skills.programming_language.color_code}
                  />
                </Fade>
              );
            }
          })}
          {skills.supporting_software.skills?.map((skill, index) => {
            return (
              <Fade bottom duration={6000}>
                <WorkingSkillCard
                  skill={skill}
                  theme={skills.supporting_software.color_code}
                />
              </Fade>
            );
          })}
          {skills.engineering_skills.skills?.map((skill, index) => {
            return (
              <Fade bottom duration={6000}>
                <WorkingSkillCard
                  skill={skill}
                  theme={skills.engineering_skills.color_code}
                />
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Splash;
