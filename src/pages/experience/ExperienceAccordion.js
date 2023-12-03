import React from "react";
import { Accordion } from 'flowbite-react';
import PositionCard from '../../components/Cards/PositionCard'

function ExperienceAccordion() {
    return (
        <div class="flex justify-center">
            <Accordion collapseAll className="w-3/4 self-center outline">
                <Accordion.Panel>
                    <Accordion.Title>Work Experience</Accordion.Title>
                    <Accordion.Content>
                        <PositionCard/>
                        <PositionCard/>
                        <PositionCard/>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Internships</Accordion.Title>
                    <Accordion.Content>
                        <PositionCard/>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Volunteering</Accordion.Title>
                    <Accordion.Content>
                        <PositionCard/>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
  );
}

export default ExperienceAccordion;
