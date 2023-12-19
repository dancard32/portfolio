import { Card } from "flowbite-react";
import { Fade } from "react-reveal";
import { Icon } from "../../assets/icons/Icon";

function ProjectCard({ repo }) {
  return (
    <Fade bottom duration={2000} distance="40px">
      <Card
        className="bg-primary-50 dark:bg-primary-900 max-w-sm outline m-5 p-5 motion-safe:hover:scale-105"
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="grid col-span-1 text-start">
          <h5 className="text-2xl font-bold tracking-tight items-start text-gray-900 dark:text-white">
            {repo.name}
          </h5>
          <p className="font-normal text-start text-gray-700 dark:text-gray-400 flex-auto py-2">
            {repo.description}
          </p>
          <div class="flex-wrap inline-flex gap-2 py-2">
            {repo.languages?.map((icon) => {
              return <Icon nameIcon={icon} propsIcon={{ size: 20 }} />;
            })}
          </div>
        </div>
      </Card>
    </Fade>
  );
}

export default ProjectCard;
