import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from 'flowbite-react';
import { HiArrowNarrowRight } from "react-icons/hi";

export default function PositionEntry({ position, theme }) {
  return (
    <TimelineContent class="mx-5 pb-32 motion-safe:hover:scale-105">
      <TimelinePoint class="place-self-center" />
      <div class="grid grid-cols-2 grid-flow-row">
        <div class="row-span-full flex-none">
          <TimelineTime class=" font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl dark:text-white text-left">
            {position.duration}
          </TimelineTime>
        </div>
        <div class="justify-self-stretch">
          <TimelineTitle class="font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white text-left">
            <p>{position.title}</p>
            {
              //<img
              // src={position?.logo_url}
              // alt=""
              // class="row-auto p-10 m-2 outline rounded-md bg-primary-300"
              ///>
            }
          </TimelineTitle>
          <TimelineBody>
            <div class="flex place-content-between">
              <h2 class="font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl dark:text-white text-left">
                {position.company}
              </h2>
              <h3 class="font-extrabold tracking-tight leading-none md:text-1xl xl:text-2xl dark:text-white text-right">
                {position.location}
              </h3>
            </div>

            <ul class="text-gray-500 list-disc list-inside dark:text-gray-400">
              {position.description?.map((description) => {
                return <li>{description}</li>;
              })}
            </ul>
          </TimelineBody>
          <Button color="gray">
            <a
              href={position?.company_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>

            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
          <h3 class="pt-5 font-extrabold tracking-tight leading-none md:text-1xl xl:text-2xl dark:text-white text-left">
            Skills and Tools
          </h3>
          <div className="Button-Group" class="py-2 flex flex-wrap">
            {position.skills?.map((skill) => {
              return (
                <Button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  {skill}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </TimelineContent>
  );
}
