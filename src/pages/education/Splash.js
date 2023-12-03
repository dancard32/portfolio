import React from "react";
import EducationSVG from "../../assets/svg/EducationSVG"

function Splash() {
    return (
        <div className="bg-primary-50 dark:bg-primary-900 text-secondary-900 dark:text-primary-200">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <EducationSVG />
            </div>
            <div class="mr-auto place-self-center lg:col-span-5">
                <h1 class="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Education
                </h1>
                <h2 class="text-4xl">
                Basic Qualification and Certifications
                </h2>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Listed below are my professional education, and working skills, as well as certifications that I have obtained relevant to my engineering background.
                </p>
            </div>
            </div>
        </div>
  );
}

export default Splash;
