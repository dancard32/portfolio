import { Card } from 'flowbite-react';
import { Fade } from 'react-reveal';
import { Icon } from "../../assets/icons/Icon"

function ProjectCard({repo, theme}) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={2000} distance="40px">
      <Card className="bg-primary-900 max-w-sm outline m-5 p-5">
        <div class="grid col-span-1 text-start">
          <h5 className="text-2xl font-bold tracking-tight items-start text-gray-900 dark:text-white">
            {repo.name}
          </h5>
          <p className="font-normal text-start text-gray-700 dark:text-gray-400">
            {repo.description}
          </p>
          <div class="inline-flex">
            {repo.languages?.map((icon) => {
              return <Icon nameIcon={icon} propsIcon={{ size: 20 }} />
                  })}

          </div>
        </div>
      </Card>
    </Fade>
  );
}

export default ProjectCard;