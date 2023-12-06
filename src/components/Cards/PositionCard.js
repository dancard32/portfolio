import { Card } from 'flowbite-react';

function PositionCard({position, theme}) {

  return (
    <Card class="bg-primary-50 dark:bg-primary-900 outline rounded m-10" horizontal>
        <div class="grid grid-cols-4 grid-flow-col gap-4">
            <img
                src={position?.logo_url}
                alt=""
                class="row-auto p-10 col-span-1 m-2 outline rounded-md bg-primary-300"
            />
            <div class="shadow row-auto p-10 col-span-3">
                <div class="flex flex-row justify-between">
                    <h1 class="font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white text-left">
                        {position.title}
                    </h1>
                    <h2 class="text-2xl text-secondary-900 dark:text-primary-200 text-right">
                        {position.duration}
                    </h2>
                </div>
                <div class="flex flex-row justify-between">
                    <a
                        href={position?.company_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-4xl text-secondary-900 dark:text-primary-200 text-left"
                    >
                        {position.company}
                    </a>

                    <h2 class="text-2xl text-secondary-900 dark:text-primary-200">
                        {position.location}
                    </h2>
                </div>
                <h2 class="text-1xl text-secondary-900 dark:text-primary-200 text-left">
                        {position.description}
                    </h2>
            </div>
        </div>
    </Card>
  );
}

export default PositionCard;