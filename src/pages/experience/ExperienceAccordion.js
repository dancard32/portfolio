import React from "react";
import { Accordion } from 'flowbite-react';
import PositionCard from '../../components/Cards/PositionCard'

function ExperienceAccordion() {
    return (
        <div class="self-center">
            <Accordion collapseAll className="w-3/4 self-center outline">
                <Accordion.Panel>
                    <Accordion.Title>Work Experience</Accordion.Title>
                    <Accordion.Content>
                        <PositionCard/>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Internships</Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                        has a design equivalent in our Figma file.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Check out the
                        <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                        Figma design system
                        </a>
                        based on the utility classes from Tailwind CSS and components from Flowbite.
                    </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Volunteering</Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                        Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                        components, whereas Tailwind UI offers sections of pages.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                        technical reason stopping you from using the best of two worlds.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                    <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                        <li>
                        <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                            Flowbite Pro
                        </a>
                        </li>
                        <li>
                        <a
                            href="https://tailwindui.com/"
                            rel="nofollow"
                            className="text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                            Tailwind UI
                        </a>
                        </li>
                    </ul>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
  );
}

export default ExperienceAccordion;
