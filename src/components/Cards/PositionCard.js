import { Card } from 'flowbite-react';

function PositionCard() {
  return (
    <Card class="bg-primary-900" horizontal>
        <div class="grid grid-rows-3 grid-cols-4 grid-flow-col gap-4">
            <div class="row-auto p-10 col-span-1">
                <img
                    src={"https://northropgrumman.com/images/NGC-logo-white-on-clear.webp"}
                    alt=""
                />
            </div>
            <div class="col-span-3 row-span-1">
                <h3>
                    Frontend Software Engineer
                </h3>

                <h2>
                    June 2022 - December 2022
                </h2>

            </div>
            <div class="col-span-3 row-span-1">
                <a
                    href="https://www.northropgrumman.com/space"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Northrop Grumman
                </a>

                <h2>
                Remote 100%
                </h2>

            </div>
            <div class="col-span-3 row-span-1">
                <p>
                    Aided in the development of a React web application for the Physical Security of the U.S. Air Force's modernized ICBM - Sentinel program - to monitor missile sites to mitigate both domestic and foreign threats. Furthermore I aided in transitioning from a cesium mapviewer to leaflet mapviewer and converting cesium map entities with TypeScript to improve performance by 5-10x while maintaining original functionality. Lastly I took initiative and lead troubleshooting for a workaround during an unexpected SDE migration reducing team downtime by approximately 2-4 weeks
                </p>
            </div>
        </div>
    </Card>
  );
}

export default PositionCard;