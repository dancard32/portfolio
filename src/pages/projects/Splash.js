import React from "react";
import ProjectsSVG from "../../assets/svg/ProjectsSVG";

function Splash() {
  return (
    <div className="bg-primary-50 dark:bg-primary-900 text-secondary-900 dark:text-primary-200">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="hidden lg:mt-0 lg:col-span-7 lg:flex">
          <ProjectsSVG />
        </div>
        <div class="mr-auto place-self-center lg:col-span-5">
          <h1 class="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Software Engineering Projects
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Here are some projects that showcase my skills as a developing
            software engineer. As I learn more about programming I hope that I
            can contribute more towards open-source software and aid in the
            advancement of accessible software
          </p>
          <a
            href="https://github.com/dancard32"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Splash;
