import { Card } from "flowbite-react";
import { Icon } from "../../assets/icons/Icon";

function WorkingSkillCard({ skill, theme }) {
  return (
    <Card className={`${theme} max-w-sm outline m-5 p-5 motion-safe:hover:scale-110`} href={`${skill.url}`}>
      <div class="grid col-span-1 text-start">
        <div class="flex-wrap inline-flex gap-2 py-2">
          <Icon nameIcon={skill.icon} propsIcon={{ size: 20 }} />
        </div>
        <h5 className="text-2xl font-bold tracking-tight items-start text-gray-900 dark:text-white">
          {skill?.title}
        </h5>
        <p className="font-normal text-start text-gray-700 dark:text-gray-400 flex-auto py-2">
          {skill?.subtitle}
        </p>
      </div>
    </Card>
  );
}

export default WorkingSkillCard;
