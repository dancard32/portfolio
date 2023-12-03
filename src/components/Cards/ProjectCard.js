import { Card } from 'flowbite-react';

function ProjectCard() {
  return (
    <Card href="https://github.com/dancard32/homelab" className="bg-primary-900 max-w-sm outline p-5 col-span-1">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      homelab
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      This public repository contains all the services that I am running on my personal server.
      </p>
    </Card>
  );
}

export default ProjectCard;