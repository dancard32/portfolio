import React from "react";
import { Timeline, TimelineItem } from "flowbite-react";
import PositionEntry from "../../components/Timeline/PositionEntry";

const boeing = {
  title: "Software Engineer II",
  company: "The Boeing Company",
  company_url: "https://www.boeing.com/",
  logo_url:
    "https://upload.wikimedia.org/wikipedia/commons/4/4f/Boeing_full_logo.svg",
  duration: "January 2023 - Present",
  location: "Saint Louis, MO",
  description: [
    "Using Podman, facilitated multi-platform build images, enhancing cross-platform compatibility, and implemented multi-staging build techniques, reducing container file-sizes by 60%, resulting in increased portability",
    "Rapidly prototyped a mixed cpu processor architecture k3s cluster using QEMU and automated hardware provisioning with Ansible for an air-gapped on-premises server for streamlined testing",
    "Leveraged RoCE technology paired with Rook and Ceph to scale data storage infrastructure to support 100Gbps, while realizing an exceptional 400% reduction in latency and a remarkable 10x increase in storage IOPS",
    "Developed a Grafana monitoring dashboard with a Prometheus back-end to effectively visualize and analyze system metrics, with a focus on packaging persistent data into releases for streamlined deployment and integration",
    "Optimized RHEL 7.7/7.9 compatibility C++/Clang testing by parallelizing Docker image builds, resulting in a noteworthy 6x reduction in testing time",
  ],
  skills: [
    "Docker",
    "Podman",
    "Kubernetes",
    "C++",
    "Grafana",
    "Ansible",
    "Rook",
    "Ceph",
    "Git",
    "Jira",
    "Python",
    "Linux",
  ],
};

const ng_swe = {
  title: "Software Engineer II",
  company: "Northrop Grumman",
  company_url: "https://www.northropgrumman.com/",
  logo_url: "	https://northropgrumman.com/images/NGC-logo-white-on-clear.webp",
  duration: "June 2022 - December 2022",
  location: "Roy, UT",
  description: [
    "Successfully transitioned a cesium map viewer to leaflet map viewer through the refactoring of cesium map entities using TypeScript, resulting in a 5-10x improvement in web page loading speed",
    "Integrated physical alarm for immediate active user alerts, with a fail-safe: prolonged inactivity prompts notifications to secondary/tertiary users, preventing system lockout",
    "Enabling stream lined missile silo oversight, implemented an Area of Responsibility (AOR) feature to dynamically highlight and display active silos within designated wings based on user role configuration",
  ],
  skills: ["React", "CSS", "Python", "JavaScript", "TypeScript", "Git"],
};

const ng_tooling = {
  title: "Tooling Engineer",
  company: "Northrop Grumman",
  company_url: "https://www.northropgrumman.com/",
  logo_url: "	https://northropgrumman.com/images/NGC-logo-white-on-clear.webp",
  duration: "June 2021 - June 2022",
  location: "Clearfield, UT",
  description: [
    "Responsible for maintaining the Navy's multi-billion dollar contract of manufacturing the Trident II D5 Ballistic Missile, entailing being on-call 24/7 and to support on-site operations throughout the weekend and/or nights",
    "Lead the design/analysis/simulation of assembly tooling for multi-billion dollar Next Generation Interceptor (NGI)",
    "Determine root causes on tool defects and their impacts on product and discuss top-level engineering with customers (Army, Lockheed Martin, Navy) proposed fixes to provide transparency and dependable products",
    "Apply excruciating attention to detail to mitigate manufacturing defects on end-product valued on the order of tens of millions of dollars for national defense and ensure mission success against pressing timelines",
  ],
  skills: ["Siemens NX"],
};

const exoterra = {
  title: "Propulsion Design Engineer",
  company: "ExoTerra Resources, LLC",
  company_url: "https://exoterracorp.com/",
  logo_url:
    "https://gust-production.s3.amazonaws.com/uploads/startup/logo_image/69627/ExoTerra_20Logo.jpg",
  duration: "May 2020 - August 2020",
  location: "Littleton, CO",
  description: [
    "Lead design of an in-house Cryogenic-Load Cart with a 75% cost reduction versus market solutions",
    "Re-designed propellant flow panel in Solidworks to reduce de-gassing by 65% extending Xenon bottle lifetime",
    "Using Solidworks, designed an ion beam dump to prolong chamber lifetime at 10% under the initial budget",
    "Refined electromagnet coil winding design in Solidworks resulting in improving mass estimates by a factor of 4x",
  ],
  skills: [
    "Solidworks",
    "Multimeter",
    "Oscilloscope",
    "Vacuum Chamber Maintenance",
    "High Power Systems",
  ],
};

const pepl = {
  title: "Mechanical  and Electrical Engineer",
  company: "Plasmadynamics and Electric Propulsion Laboratory (PEPL)",
  company_url: "https://pepl.engin.umich.edu/",
  logo_url:
    "https://pepl.engin.umich.edu/wp-content/uploads/2017/09/logo2-1.png",
  duration: "May 2019 - August 2019",
  location: "Ann Arbor, MI",
  description: [
    "Wrote a C++ based Arduino program to convert binary pulsed data from a linear translation stage to digital format",
    "Reduced program complexity to allow real-time updates to interface with a user display and with LabVIEW",
    "Designed a custom PCB to contain analog data in shift registers that an Arduino Mega 2560 would read and convert in real-time via the physical interface with digital to analog converters",
  ],
  skills: [
    "Fusion 360",
    "Oscilloscope",
    "Multimeter",
    "High Power Lasers",
    "High Power Systems",
    "Non-Destructive Measurements",
    "ExpressPCB",
  ],
};

const csl = {
  title: "Undergraduate Research Assistant",
  company: "Composite Structures Laboratory",
  company_url: "https://sites.google.com/umich.edu/um-csl",
  logo_url:
    "https://aero.engin.umich.edu/wp-content/uploads/sites/2/2021/05/CoE-AERO-header.svg",
  duration: "January 2019 - June 2019",
  location: "Ann Arbor, MI",
  description: [
    "Designed a high-strength fixture in Fusion 360 to withstand 100kip forces while maximizing turnaround times between experiments to allow characterization of laminate angles in composite sandwiched fearing",
    "Employed digital image correlation techniques to characterize composite performance during stress testing campaigns",
    "Quantified macro-cracks within ply's in specimens to their peak loads correlating the effects of macro-cracks of the yield strength of carbon-fiber composites",
  ],
  skills: [
    "Fusion 360",
    "Digital Image Correlation",
    "Scanning Electron Microscope",
    "High-Strength Test Fixtures",
  ],
};

const aerospaceDay = {
  title: "Aerospace Day",
  company: "University of Michigan",
  company_url: "https://aiaaoutreach.aero.engin.umich.edu/aerospace-day",
  logo_url:
    "https://brand.umich.edu/assets/brand/style-guide/logo-guidelines/U-M_Logo-Hex.png",
  duration: "March 2019",
  location: "Ann Arbor, MI",
  description: [
    "Aerospace Day is an outreach that occurs every semester at the University of Michigan, where we showcase what the engineering students are working on and engage with the community.",
  ],
  skills: ["Community Engagement", "Outreach"],
};

const jobs = [boeing, ng_swe, ng_tooling];
const internships = [exoterra, pepl, csl];
const volunteering = [aerospaceDay];

function ExperienceTimeline() {
  return (
    <div class="flex justify-center items-center">
      <div class="justify-center items-center bg-primary-50 dark:bg-primary-900 p-5 w-5/6">
        <div class="text-start w-full">
          <h1 class="text-start max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Work Experience
          </h1>
        </div>
        <div class="w-full">
          <Timeline class="self-center text-start">
            <TimelineItem class="pb-5">
              {jobs?.map((position) => {
                return <PositionEntry position={position} />;
              })}
            </TimelineItem>
          </Timeline>
        </div>
        <div class="mr-auto place-self-center lg:col-span-5">
          <h1 class="text-start max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Internship Experience
          </h1>
        </div>
        <div class="flex">
          <Timeline class="self-center text-start">
            <TimelineItem class="pb-5">
              {internships?.map((position) => {
                return <PositionEntry position={position} />;
              })}
            </TimelineItem>
          </Timeline>
        </div>
        <div class="mr-auto place-self-center lg:col-span-5">
          <h1 class="text-start max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Volunteering
          </h1>
        </div>
        <div class="flex">
          <Timeline class="self-center text-start">
            <TimelineItem class="pb-5">
              {volunteering?.map((position) => {
                return <PositionEntry position={position} />;
              })}
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
}

export default ExperienceTimeline;
