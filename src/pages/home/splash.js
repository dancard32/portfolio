import React from "react";
import { Button } from 'flowbite-react';
import FeelingProud from "./FeelingProud";

function Splash() {
    return (
        
        <div className="bg-primary-50 dark:bg-primary-900 text-secondary-900 dark:text-primary-200">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        Hello
                        <img
                            alt="Wave"
                            src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
                            width="75px"
                        />
                    </h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        I'm Dan Card. Former rocket scientist, and current software engineer. Always curious.
                    </p>
                    <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Contact Me
                    </a>
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <FeelingProud />
                </div>                
            </div>
        </div>
  );
}

export default Splash;
