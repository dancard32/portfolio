import React from "react";
import ContactSVG from "../../assets/svg/ContactSVG";
import ResumeLink from "./ResumeLink";

function Splash() {
  return (
    <div className="bg-primary-50 dark:bg-primary-900 text-secondary-900 dark:text-primary-200">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="hidden lg:mt-0 lg:col-span-7 lg:flex">
          <ContactSVG />
        </div>
        <div class="mr-auto place-self-center lg:col-span-5">
          <h1 class="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Contact Me
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            You can contact me at the places mentioned below. For fastest
            response, reach out to me via email.
          </p>
          <a className="inline-flex justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            <ResumeLink />
          </a>
          <a
            className="inline-flex justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:dcard@umich.edu"
          >
            Email Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Splash;
