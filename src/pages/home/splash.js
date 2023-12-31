import React from "react";
import FeelingProudSVG from "../../assets/svg/FeelingProudSVG";
import Typewriter from "typewriter-effect";
import SocialMediaLinks from "../../components/SocialMediaLinks";

function Splash() {
  return (
    <div>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-5">
          <h1 className="max-w-2xl mb-4 text-8xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white flex items-end text-left">
            <span className="text-8xl">Hello</span>
            <img
              alt="Wave"
              src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
              width="75px"
            />
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-left">
            <span className="text-6xl">
              I'm{" "}
              <span className="text-secondary-900 dark:text-primary-200">
                Dan Card.
              </span>
            </span>
            <span className="text-4xl">
              <Typewriter
                options={{
                  strings: [
                    "Former rocket scientist",
                    "Current Software Engineer",
                    "Always Curious",
                    "Game Designer",
                    "A Michigan Wolverine",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </p>

          <div class="flex items-end">
            <SocialMediaLinks />
          </div>

          <div class="flex items-end py-2">
            <a
              href="/contact"
              className="flex-shrink justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-7 lg:flex">
          <FeelingProudSVG />
        </div>
      </div>
    </div>
  );
}

export default Splash;
