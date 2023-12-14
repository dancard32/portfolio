import React from "react";
import ExperienceSVG from "../../assets/svg/ExperienceSVG";

function Splash() {
  return (
    <div className="Splash-page">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="hidden lg:mt-0 lg:col-span-7 lg:flex">
          <ExperienceSVG />
        </div>
        <div class="mr-auto place-self-center lg:col-span-5">
          <h1 class="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Experience
          </h1>
          <h2 class="text-4xl">Work, Internships and Volunteering</h2>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            I have been working full-time post-graduation, and all my past work
            experiences can be found here!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Splash;
