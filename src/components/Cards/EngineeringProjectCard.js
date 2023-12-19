import { Card } from "flowbite-react";
import { Fade } from "react-reveal";

function EngineeringProjectCard({ repo }) {
    return (
        <Fade bottom duration={2000} distance="40px">
            <Card
                vertical
                className="bg-primary-50 dark:bg-primary-900 max-w-sm outline m-5 p-5 motion-safe:hover:scale-105"
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div class="grid col-span-1 text-start">
                    <img
                        src={require("../../assets/images/" + repo.img)}
                        alt={repo.name + "Image Card"}
                    />
                    <h5 className="text-2xl font-bold tracking-tight items-start text-gray-900 dark:text-white">
                        {repo.name}
                    </h5>
                    <p className="font-normal text-start text-gray-700 dark:text-gray-400 flex-auto py-2">
                        {repo.description}
                    </p>
                    <div class="shrink flex-wrap inline-flex gap-2 py-2">
                        {repo.software?.map((software, index) => {
                            return (
                                <img
                                    src={require("../../assets/icons/" + software.img_path)}
                                    alt=""
                                    class="h-12"
                                />
                            );
                        })}
                    </div>
                </div>
            </Card>
        </Fade>
    );
}

export default EngineeringProjectCard;
