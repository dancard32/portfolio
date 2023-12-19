import React from "react";
import BlogsSVG from "../../assets/svg/BlogsSVG";

function Blogs() {
  return (
    <div className="bg-primary-50 dark:bg-primary-900 text-secondary-900 dark:text-primary-200">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-5">
          <h1 class="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Follow my Work
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Progress on my coding projects are best found on GitHub, where I try
            to progress daily and post my projects for all to enjoy!
          </p>
          <a
            href="https://github.com/dancard32"
            className="inline-flex justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Github
          </a>
          <a
            href="/blog"
            className="inline-flex justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            My Blog
          </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-7 lg:flex">
          <BlogsSVG />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
