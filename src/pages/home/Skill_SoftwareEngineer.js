import React from "react";
import Typewriter from "typewriter-effect";
import { Fade } from "react-reveal";
import FullStackImg from "../../assets/svg/FullStackSVG";
import DataScienceSVG from "../../assets/svg/DataScienceSVG";
import DevImg from "../../assets/svg/DevSVG";
import TeamImg from "../../assets/svg/TeamSVG";
import ProgrammingImg from "../../assets/svg/ProgrammingSVG"
import FirmwareImg from "../../assets/svg/FirmwareSVG"

function Skill_SoftwareEngineer() {
    return (
        <div className="bg-primary-50 dark:bg-primary-900 text-secondary-900 dark:text-primary-200">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="hidden lg:mt-0 lg:col-span-6 lg:flex justify-start">
                    <Fade left duration={2000}>
                        <DevImg />
                    </Fade>
                </div>
                <div class="mr-auto place-self-center lg:col-span-6 justify-end">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white flex items-end text-left">
                        <Fade right duration={1500}>
                            Software Engineer
                        </Fade>
                    </h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-left">
                        <Fade right duration={1000}>
                            ✈️ Currently employed as a software engineer at Boeing
                            <br/>
                            🧑‍🎓 Enrolled at Georgia Tech Masters in Computer Science
                            <br/>
                            👨‍🏫 Graduate Teaching Assistant in Academic Integrity
                            <br/>
                            💻 Developing and maintaining a homelab personal server
                            <br/>
                            📈 In process of developing a high-frequency trading agent
                        </Fade>
                    </p>
                </div>
            </div>
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-6">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white flex items-end text-left">
                        <Fade left duration={1500}>
                            My Favorite Tech
                        </Fade>
                    </h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-left">
                        <Fade left duration={1000}>
                            👨🏽‍💻 Striving to master Docker and Kubernetes
                            <br/>
                            🛠 Working to self-host apps/services on my homelab
                            <br/>
                            🎮 End of year goal to develop a small indie game with LibDX
                            <br/>
                            🛸 Implement an AI service for personal project
                        </Fade>
                    </p>
                </div>
                <div class="hidden lg:mt-0 lg:col-span-6 lg:flex">
                    <Fade right duration={2000}>
                        <TeamImg />
                    </Fade>
                </div>
            </div>
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="hidden lg:mt-0 lg:col-span-6 lg:flex">
                    <Fade left duration={2000}>
                        <FirmwareImg />
                    </Fade>
                </div>
                <div class="mr-auto place-self-center lg:col-span-6">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white flex items-end text-left">
                        <Fade right duration={1500}>
                        Technical Background
                        </Fade>
                    </h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-left">
                        <Fade right duration={1000}>
                            🚀 Former lead tooling maintenance on a multi-billion dollar DoD contract
                            <br/>
                            🛰 Designed and researched high-power ion thrusters
                            <br/>
                            💻 Developed custom laboratory equipment
                            <br/>
                            🖨 Avid 3D printer/tinkerer of personal projects
                        </Fade>
                    </p>
                </div>
            </div>
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-6">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white flex items-end text-left">
                        <Fade left duration={1500}>
                        Always looking to learn!
                        </Fade>
                    </h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-left">
                        <Fade left duration={1000}>
                            👨🏽‍💻 Always trying to improve! Above are languages/software I plan to learn
                            <br/>
                            🧑‍🎓 Expected Georgia Tech graduation in Fall 2025
                            <br/>
                            📧 Feel free to reach out to me with any technical questions or recommendations!
                        </Fade>
                    </p>
                </div>
                <div class="hidden lg:mt-0 lg:col-span-6 lg:flex">
                    <Fade right duration={2000}>
                        <ProgrammingImg />
                    </Fade>
                </div>
            </div>
        </div>
  );
}

export default Skill_SoftwareEngineer;
