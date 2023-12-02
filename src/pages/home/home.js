import React from "react";

function Home() {
  return (
    <section class="bg-primary-900">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <p className='text-blue-500 text-3xl font-bold underline'>
        testing
      </p>

      <div class="bg-white dark:bg-gray-800">
        <h1 class="text-gray-900 dark:text-white">Dark mode</h1>
        <p class="text-gray-600 dark:text-gray-300">
            Lorem ipsum...
        </p>
    </div>
    </section>
  );
}

export default Home;
