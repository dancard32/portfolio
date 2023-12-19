import React from "react";
import { Accordion } from "flowbite-react";
import PositionCard from "../../components/Cards/PositionCard";

const boeing = {
  title: "Software Engineer",
  company: "Boeing",
  company_url: "https://www.boeing.com/",
  logo_url:
    "https://upload.wikimedia.org/wikipedia/commons/4/4f/Boeing_full_logo.svg",
  duration: "January 2023 - Present",
  location: "Saint Louis, MO",
  description:
    "Developed a robust Grafana monitoring dashboard that enables effective visualization and analysis of system metrics. A key focus was on packaging persistent data into releases, ensuring streamlined deployment and integration. Additionally, I optimized C++/Clang RedHat compatibility testing by implementing Docker and parallel building, resulting in an impressive 6x reduction in testing time. Lastly, I authored comprehensive documentation encompassing introductory resources, facilitating a smooth onboarding process for new hires and ensuring their timely assimilation into the team.",
};

const ng_swe = {
  title: "Frontend Software Engineer",
  company: "Northrop Grumman",
  company_url: "https://www.northropgrumman.com/",
  logo_url: "	https://northropgrumman.com/images/NGC-logo-white-on-clear.webp",
  duration: "June 2022 - December 2022",
  location: "Roy, UT",
  description:
    "Aided in the development of a React web application for the Physical Security of the U.S. Air Force's modernized ICBM - Sentinel program - to monitor missile sites to mitigate both domestic and foreign threats. Furthermore I aided in transitioning from a cesium mapviewer to leaflet mapviewer and converting cesium map entities with TypeScript to improve performance by 5-10x while maintaining original functionality. Lastly I took initiative and lead troubleshooting for a workaround during an unexpected SDE migration reducing team downtime by approximately 2-4 weeks",
};

const ng_tooling = {
  title: "Tooling Engineer",
  company: "Northrop Grumman",
  company_url: "https://www.northropgrumman.com/",
  logo_url: "	https://northropgrumman.com/images/NGC-logo-white-on-clear.webp",
  duration: "June 2021 - June 2022",
  location: "Clearfield, UT",
  description:
    "Lead Engineer for maintaining the Navy's multi-billion dollar contract to manufacture the Trident II D5 Ballistic Missile, entailing being on-call 24/7 and to support on-site operations throughout the weekend/and or nights. Determine root causes on tool defects and its impacts on product and discuss top-level engineering with customers (Army, Lockheed Martin, Navy) our proposed fixes to provide transparency and dependable products. Provide excruciating attention to detail to mitigate manufacturing defects on  end-product valued on the order of tens of millions of dollars for national defense Reduce the risks of manufacturing stoppage, identify manufacturing bottlenecks, safety concerns, and support floor operations and personal",
};

const exoterra = {
  title: "Propulsion Design Engineer",
  company: "ExoTerra Resources, LLC",
  company_url: "https://exoterracorp.com/",
  logo_url:
    "https://gust-production.s3.amazonaws.com/uploads/startup/logo_image/69627/ExoTerra_20Logo.jpg",
  duration: "May 2020 - August 2020",
  location: "Littleton, CO",
  description:
    " I helped lead the design of an in-house Cryogenic-Load Cart with a 75% cost reduction versus market solutions. Re-designed propellant flow panel in Solidworks to reduce de-gassing by 65% extending Xenon bottle lifetime. While using Solidworks, I designed an ion beam dump to prolong chamber lifetime at 10% under the initial budget. Lastly, I refined electromagnet coil winding design in Solidworks resulting in improving mass estimates by a factor of 4x",
};

const pepl = {
  title: "Mechanical  and Electrical Engineer",
  company:
    "University of Michigan, Plasmadynamics and Electric Propulsion Laboratory (PEPL)",
  company_url: "https://pepl.engin.umich.edu/",
  logo_url:
    "https://pepl.engin.umich.edu/wp-content/uploads/2017/09/logo2-1.png",
  duration: "May 2019 - August 2019",
  location: "Ann Arbor, MI",
  description:
    "Developed an Arduino program interfaced with a custom circuit to improve measurements of motion stages and allow interface with LabVIEW, or display positions in real-time at 25% of alternatives. Additionally, I improved motion stage performance in vacuum by implementing heat elements at 10% cost of alternatives. Furthermore I designed housing to allow interfacing of an incremental encoder with an azimuthal stage to increase reliability in vacuum.",
};

const csl = {
  title: "Undergraduate Research Assistant",
  company: "Composite Structures Laboratory",
  company_url: "https://sites.google.com/umich.edu/um-csl",
  logo_url:
    "https://aero.engin.umich.edu/wp-content/uploads/sites/2/2021/05/CoE-AERO-header.svg",
  duration: "January 2019 - June 2019",
  location: "Ann Arbor, MI",
  description:
    "Designed a high-strength fixture in Fusion 360 to withstand 100kip forces while maximizing turnaround times between experiments to allow characterization of laminate angles in composite sandwiched fearing. Employed digital image correlation techniques to characterize composite performance during stress testing campaigns. Quantified macro-cracks within ply's in specimens to their peak loads correlating the effects of macro-cracks of the yield strength of carbon-fiber composites",
};

const aerospaceDay = {
  title: "Aerospace Day",
  company: "University of Michigan",
  company_url: "https://aiaaoutreach.aero.engin.umich.edu/aerospace-day",
  logo_url:
    "https://brand.umich.edu/assets/brand/style-guide/logo-guidelines/U-M_Logo-Hex.png",
  duration: "March 2019",
  location: "Ann Arbor, MI",
  description:
    "Aerospace Day is an outreach that occurs every semester at the University of Michigan, where we showcase what the engineering students are working on and engage with the community.",
};

function ExperienceAccordion() {
  return (
    <div class="flex justify-center bg-primary-50 dark:bg-primary-900">
      <Accordion
        collapseAll
        className="w-3/4 self-center outline bg-primary-50 dark:bg-primary-900"
      >
        <Accordion.Panel class="bg-primary-50 dark:bg-primary-900 text-4xl text-secondary-900 dark:text-primary-200">
          <Accordion.Title>Work Experience</Accordion.Title>
          <Accordion.Content>
            <PositionCard position={boeing} />
            <PositionCard position={ng_swe} />
            <PositionCard position={ng_tooling} />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Internships</Accordion.Title>
          <Accordion.Content>
            <PositionCard position={exoterra} />
            <PositionCard position={pepl} />
            <PositionCard position={csl} />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Volunteering</Accordion.Title>
          <Accordion.Content>
            <PositionCard position={aerospaceDay} />
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}

export default ExperienceAccordion;
