import { Card, H1, H3, Icon, Colors, CompoundTag, Divider, Tag, Section, H4, SectionCard, UL } from '@blueprintjs/core'
import { IconNames, IconSize } from '@blueprintjs/icons'
import type { BlueprintIcons_16Id } from '@blueprintjs/icons/lib/esm/generated/16px/blueprint-icons-16'
import { useTheme } from '../../../hooks/Context'
import { TooltipIconifyIcon } from '../../../components/TooltipIconifyIcon'

interface experienceSectionSkill {
  position: string
  company: string
  companyLogo: string
  companyUrl?: string
  dateStart: string
  dateEnd: string
  officeCity: string
  officeState: string
  jobDescription: string
  jobBulletPoints: string[]
  jobTags: string[]
  jobSkills: Record<string, string | any>
}
interface experienceSkills {
  experienceTitle: string
  icon: BlueprintIcons_16Id
  defaultIsOpen: boolean
  sections: experienceSectionSkill[]
}
export default function ExperiencePage() {
  const { isMobile } = useTheme()

  const experiences: experienceSkills[] = [
    {
      experienceTitle: 'Work Experience',
      icon: IconNames.BRIEFCASE,
      defaultIsOpen: true,
      sections: [
        {
          position: 'Full-Stack Software Engineer',
          company: 'Palantir Technologies',
          companyLogo: 'images/Palantir_Technologies_logo.webp',
          companyUrl: 'https://www.palantir.com/',
          dateStart: 'January 2025',
          dateEnd: 'Present',
          officeCity: 'Washington',
          officeState: 'D.C.',
          jobDescription:
            "As a skilled and experienced Full-Stack Software Engineer, I've had the opportunity to work on a variety of projects that showcase my versatility and expertise. From re-platforming legacy systems to developing cutting-edge web applications, I've consistently delivered high-quality results while adapting to new technologies and challenges.",
          jobBulletPoints: [
            'Re-platformed a legacy system of 500k SLOC from a Palantir Gotham implementation to a modernized Foundry platform with ontologized data models in under a year to showcase adaptability',
            'Lead the complete re-write of a coffeescript and Marionette backbone frontend application to a modernized React + vite to support web, mobile with PWA responsive design',
            'Uncovered a critical vulnerability on a client interface that exposed thousands of user PII and alerted stakeholders to the potential threat before collaborating with relevant teams to mitigate',
            'Successfully ingested production data to deliver a $2M analytics dashboard with tight deadlines, empowering upper-level management with real-time insights to tackle client-side bottlenecks',
            'Modernized and adapted a highly available legacy record of systems software for a contract modification, involving 150k SLOC with custom business logic integration while ensuring ACID compliance',
            'Responded to bi-monthly firefighting duties, requiring on-call availability and prompt responses within three minutes or less to minimize downtime and maximize effectiveness',
            'Distributed a PySpark build, achieving a significant 70% reduction in I/O bottlenecks and enabling the successful execution of multiple daily builds',
            'Leveraged GPT-4o LLM capabilities to develop a customized spam detection model for a client, resulting in a 80% accuracy in detecting spam and a reduction of 60% spam in platform',
            'Designed and prototyped a system of record to streamline workflows with real-time data ingests, resulting in the securing of a $2M million contract as a direct outcome of process improvements leading to $75M of follow on CLIN efforts',
            'Aggregated data from multiple agency sources and built an MVP with geohashed locations to aid federal law enforcement to search for missing and exploited children',
            'Developed a rapid prototype for a contract proposal leading to a $25M contract award for a new CLIN',
            "Delivered a customer MVP in a 3 week surge effort effectively joining external data sources to allow data analysis to eliminate data silo's with highlighted takeaways on FOC implementation",
            'Extended a 30k SLOC JUnit testing suite to a new CLIN for regression testing and improved test coverage while lowering CircleCI runtimes by 20%',
            'Developed and maintained daily deployments of a developmental EKS cluster and ensuring daily deployments and functionality for client-site demonstrations',
          ],
          jobTags: ['Full-Stack', 'Palantir Software', 'Cloud', 'DevOps', 'Monitoring and logging'],
          jobSkills: {
            CoffeeScript: 'devicon:coffeescript',
            Marionette: 'logos:marionette',
            Backbone: 'logos:backbone-icon',
            HandleBars: 'devicon:handlebars',
            Less: 'logos:less',
            gRPC: 'logos:grpc',
            Java: 'logos:java',
            React: 'devicon:react',
            TypeScript: 'devicon:typescript',
            Cassandra: 'logos:cassandra',
            Jenkins: 'logos:jenkins',
            PagerDuty: 'logos:pagerduty-icon',
            Docker: 'logos:docker-icon',
            JUnit: 'devicon:junit-wordmark',
            Grafana: 'logos:grafana',
            'Circle CI': 'logos:circleci',
            Spark: 'devicon:apachespark-wordmark',
            'Slack Integrations': 'devicon:slack',
            Linux: 'devicon:linux',
            Redis: 'devicon:redis',
            PostgreSQL: 'logos:postgresql',
            AWS: 'devicon:amazonwebservices',
            InteliJ: 'devicon:intellij',
            Zustand: 'devicon:zustand',
            Prometheus: 'devicon:prometheus',
            'VS Code': 'devicon:vscode',
          },
        },
        {
          position: 'Staff Full-Stack Software Engineer',
          company: 'Booz Allen',
          companyLogo: 'images/Booz-Allen-Logo.webp',
          companyUrl: 'https://www.boozallen.com/',
          dateStart: 'February 2024',
          dateEnd: 'January 2025',
          officeCity: 'Washington',
          officeState: 'D.C.',
          jobDescription:
            'As a Staff Full-Stack Software Engineer at Booz Allen, I leveraged my technical expertise to drive impactful projects, including AI-powered CVE risk assessment tool development, LLM integration with LangChain, dynamic UI construction with ReactFlow, GitHub Actions workflow optimization, and ent framework schema updates.',
          jobBulletPoints: [
            'Successfully prototyped an AI-powered CVE risk assessment tool within an air-gapped environment for the Army, leveraging AI to analyze and provide actionable insights on potential security threats',
            'Integrated Mistral LLMs with LangChain via FastAPI RAG implementation to ingest pdf files and extract text to provide actionable insights on potential security vulnerabilities',
            'Leveraged zustand for React Redux state management with  for improved UI/UX performance for persisted components on page re-directs and page loads',
            'Developed a Dynamic UI with react as a visual pipeline builder using ReactFlow library with full control of graph layout and nodal styling and pipeline configuration',
            'Implemented caching for frequently used dependencies in the GitHub Actions workflow, resulting in an approximate 80% improvement in job run time',
            'Updated ent go fields, relationships, and custom resolvers to existing schemas within the ent framework, to achieve consistency and flexibility within GraphQL',
          ],
          jobTags: ['AI-powered CVE risk assessment tool', 'FastAPI RAG implementation', 'Mistral LLMs ', 'ReactFlow', 'GitHub Actions'],
          jobSkills: {
            React: 'devicon:react',
            TypeScript: 'devicon:typescript',
            Github: 'logos-github-icon',
            Zustand: 'devicon:zustand',
            Redis: 'devicon:redis',
            'Fast API': 'devicon:fastapi',
            Go: 'logos:go',
            'Github Actions': 'devicon:githubactions',
            Kubernetes: 'logos:kubernetes',
            PostgreSQL: 'logos:postgresql',
            Docker: 'logos:docker-icon',
            Terraform: 'devicon:terraform',
            GraphQL: 'logos:graphql',
            'VS Code': 'devicon:vscode',
          },
        },
        {
          position: 'Realtime Software Engineer II',
          company: 'Boeing' + ' - ' + 'Phantom' + ' Works',
          companyLogo: 'images/Boeing_PW-logo.webp',
          companyUrl: 'https://www.boeing.com/' + 'defense/' + 'phantom' + '-works',
          dateStart: 'January 2023',
          dateEnd: 'February 2024',
          officeCity: 'Berkley',
          officeState: 'Missouri',
          jobDescription:
            'Developed a robust Grafana monitoring dashboard that enables effective visualization and analysis of system metrics. A key focus was on packaging persistent data into releases, ensuring streamlined deployment and integration. Additionally, I optimized C++/Clang RedHat compatibility testing by implementing Docker and parallel building, resulting in an impressive 6x reduction in testing time. Lastly, I authored comprehensive documentation encompassing introductory resources, facilitating a smooth onboarding process for new hires and ensuring their timely assimilation into the team.',
          jobBulletPoints: [
            'Led efforts to enable multi-target compilation by highlighting short comings in build systems, vcpkg, and GitLab CI/CD pipelines to enhance project hardware compatibility and streamline development',
            'Facilitated Docker/Podman multi-platform build images, enhancing cross-platform compatibility, and implemented multi-staging build techniques, reducing container file-sizes by 60%',
            'Rapidly prototyped a mixed cpu processor architecture k3s cluster using a QEMU ARM emulator and automated hardware provisioning with Ansible for an air-gapped on-premises server',
            'Leveraged RoCE technology paired with Rook and Ceph  to scale data storage infrastructure to support 100Gbps, realizing an exceptional 400% reduction in latency and a 10x increase in storage IOPS',
            'Developed a Grafana monitoring dashboard with Prometheus to effectively visualize and analyze system metrics, in order to package performance metrics into releases for developmental records',
            'Optimized RHEL 7.7/7.9 compatibility C++/Clang testing by parallelizing Docker image builds, resulting in a noteworthy 90% reduction in testing time',
          ],
          jobTags: ['High-Performance Computing (HPC)', 'Distributed Systems', 'Containerization', 'DevOps', 'Linux'],
          jobSkills: {
            'RedHat Linux': 'logos:redhat-icon',
            K3s: 'devicon:k3s',
            'C++': 'logos:c-plusplus',
            Docker: 'logos:docker-icon',
            Podman: 'devicon:podman',
            Grafana: 'logos:grafana',
            Prometheus: 'devicon:prometheus',
            CentOS: 'devicon:centos',
            Gitlab: 'logos:gitlab-icon',
            CMake: 'devicon:cmake',
            Apache: 'devicon:apache',
            GCC: 'devicon:gcc',
            Linux: 'devicon:linux',
            Ceph: 'devicon:ceph',
            'VS Code': 'devicon:vscode',
          },
        },
        {
          position: 'Software Engineer I',
          company: 'Northrop Grumman',
          companyLogo: 'images/NG_Logo.webp',
          companyUrl:
            'https://www.northropgrumman.com/what-we-do/advanced-weapons/sentinel?utm_source=googlesem&utm_medium=search&utm_campaign=land-sentinelgbsd&utm_audience=customerhill&utm_content=keywords&utm_format=cpc&utm_term=bau-bau-19578795252-146133834860-647642993208&code=OTH-13321&source=OTH-13321&gad_source=1&gad_campaignid=19578795252&gbraid=0AAAAADmzLUg5bs8DgI0yam6toIlNzMHiL&gclid=EAIaIQobChMI8cH1iNSYkQMV529HAR3YTh5gEAAYAiAAEgKlLfD_BwE',
          dateStart: 'June 2022',
          dateEnd: 'December 2022',
          officeCity: 'Roy',
          officeState: 'Utah',
          jobDescription:
            "Aided in the development of a React web application for the Physical Security of the U.S. Air Force's modernized ICBM - Sentinel program - to monitor missile sites to mitigate both domestic and foreign threats. Furthermore I aided in transitioning from a cesium mapviewer to leaflet mapviewer and converting cesium map entities with TypeScript to improve performance by 5-10x while maintaining original functionality. Lastly I took initiative and lead troubleshooting for a workaround during an unexpected SDE migration reducing team downtime by approximately 2-4 weeks",
          jobBulletPoints: [
            'Successfully transitioned a cesium map viewer to leaflet map viewer through the refactoring of cesium map entities using TypeScript, resulting in a 50% improvement in web page loading speed',
            'Integrated physical alarm for immediate active user alerts, with a fail-safe: prolonged inactivity prompts notifications to secondary/tertiary users, preventing system lockout',
            'Enabling streamlined missile silo oversight, implemented an Area of Responsibility (AOR) feature to dynamically highlight and display active silos within designated wings based on user role configuration',
            "Developed a React web application for the Physical Security of the U.S. Air Force's modernized ICBM -- Sentinel program -- to monitor missile sites to mitigate both domestic and foreign threats",
            'Took initiative and lead troubleshooting for a workaround during an unexpected SDE migration reducing team downtime by approximately 2-4 weeks',
          ],
          jobTags: ['ReactJS', 'TypeScript', 'GitLab', 'DevOps', 'Web Application Development', 'Map Viewer'],
          jobSkills: {
            React: 'devicon:react',
            TypeScript: 'devicon:typescript',
            Gitlab: 'logos:gitlab-icon',
            Linux: 'devicon:linux',
            Leaflet: 'logos:leaflet',
            'VS Code': 'devicon:vscode',
          },
        },
        {
          position: 'Tooling Engineer',
          company: 'Northrop Grumman',
          companyLogo: 'images/NG_Logo.webp',
          companyUrl: 'https://www.northropgrumman.com/what-we-do/missile-defense',
          dateStart: 'June 2021',
          dateEnd: 'June 2022',
          officeCity: 'Clearfield',
          officeState: 'Utah',
          jobDescription:
            "Lead Engineer for maintaining the Navy's multi-billion dollar contract to manufacture the Trident II D5 Ballistic Missile, entailing being on-call 24/7 and to support on-site operations throughout the weekend/and or nights. Determine root causes on tool defects and its impacts on product and discuss top-level engineering with customers (Army, Lockheed Martin, Navy) our proposed fixes to provide transparency and dependable products. Provide excruciating attention to detail to mitigate manufacturing defects on end-product valued on the order of tens of millions of dollars for national defense Reduce the risks of manufacturing stoppage, identify manufacturing bottlenecks, safety concerns, and support floor operations and personal",
          jobBulletPoints: [
            "Responsible for maintaining the Navy's multi-billion dollar contract of manufacturing the Trident II D5 Ballistic Missile, entailing being on-call 24/7 and to support on-site operations throughout the weekend and/or nights",
            'Lead the design/analysis/simulation of assembly tooling for multi-billion dollar Next Generation Interceptor (NGI)',
            'Determine root causes on tool defects and their impacts on product and discuss top-level engineering with customers (Army, Lockheed Martin, Navy) proposed fixes to provide transparency and dependable products',
            'Apply excruciating attention to detail to mitigate manufacturing defects on end-product valued on the order of tens of millions of dollars for national defense and ensure mission success against pressing timelines',
          ],
          jobTags: [
            'Tooling Engineering',
            'Manufacturing Engineering',
            'Quality Control',
            'Problem-Solving',
            'On-Call Availability',
            '24/7 Support',
            'Weekend/Night Shifts',
          ],
          jobSkills: {},
        },
      ],
    },
    {
      experienceTitle: 'Academic Work',
      defaultIsOpen: false,
      icon: IconNames.LEARNING,
      sections: [
        {
          position: 'Academic Integrity Teaching Assistant',
          company: 'Georgia Institute of Technology',
          companyLogo: 'images/GT_logo.webp',
          companyUrl: 'https://www.gatech.edu/',
          dateStart: 'January 2023',
          dateEnd: 'June 2024',
          officeCity: 'Atlanta',
          officeState: 'Georgia',
          jobDescription:
            'Supported the development and implementation of educational programs and resources to promote academic integrity and reduce plagiarism. My role involved collaborating with faculty members and students to to emphasize the importance of original thinking and proper citation practices.',
          jobBulletPoints: [],
          jobTags: [],
          jobSkills: {},
        },
        {
          position: 'Graduate Student Instructor',
          company: 'University of Michigan',
          companyLogo: 'images/UM_Logo.webp',
          companyUrl: 'https://umich.edu/',
          dateStart: 'August 2020',
          dateEnd: 'April 2021',
          officeCity: 'Ann Arbor',
          officeState: 'Michigan',
          jobDescription:
            'Assisted in managing and leading the mechanical engineering lab, guiding students in setting up and using various equipment such as wind tunnels, load cells, and electronic benches. My role involved providing hands-on training and support to students, ensuring they were proficient in operating these tools for their research projects.',
          jobBulletPoints: [],
          jobTags: [],
          jobSkills: {},
        },
      ],
    },
    {
      experienceTitle: 'Internships',
      defaultIsOpen: false,
      icon: IconNames.CLEAN,
      sections: [
        {
          position: 'Propulsion Design Engineer',
          company: 'ExoTerra Resources, LLC',
          companyLogo: 'images/ExoTerra_Logo.webp',
          companyUrl: 'https://www.exoterra.com/',
          dateStart: 'May 2020',
          dateEnd: 'August 2020',
          officeCity: 'Littleton',
          officeState: 'Colorado',
          jobDescription:
            'I helped lead the design of an in-house Cryogenic-Load Cart with a 75% cost reduction versus market solutions. Re-designed propellant flow panel in Solidworks to reduce de-gassing by 65% extending Xenon bottle lifetime. While using Solidworks, I designed an ion beam dump to prolong chamber lifetime at 10% under the initial budget. Lastly, I refined electromagnet coil winding design in Solidworks resulting in improving mass estimates by a factor of 4x',
          jobBulletPoints: [
            'Lead design of an in-house Cryogenic-Load Cart with a 75% cost reduction versus market solutions',
            'Re-designed propellant flow panel in Solidworks to reduce de-gassing by 65% extending Xenon bottle lifetime',
            'Using Solidworks, designed an ion beam dump to prolong chamber lifetime at 10% under the initial budget',
            'Refined electromagnet coil winding design in Solidworks resulting in improving mass estimates by a factor of 4x',
          ],
          jobTags: [],
          jobSkills: {},
        },
        {
          position: 'Mechanical and Electrical Engineering Assistant',
          company: 'University of Michigan, Plasmadynamics and Electric Propulsion Laboratory (PEPL)',
          companyLogo: 'images/PEPL_Logo.webp',
          companyUrl: 'https://pepl.engin.umich.edu/',
          dateStart: 'May 2019',
          dateEnd: 'August 2019',
          officeCity: 'Ann Arbor',
          officeState: 'Michigan',
          jobDescription:
            'Developed an Arduino program interfaced with a custom circuit to improve measurements of motion stages and allow interface with LabVIEW, or display positions in real-time at 25% of alternatives. Additionally, I improved motion stage performance in vacuum by implementing heat elements at 10% cost of alternatives. Furthermore I designed housing to allow interfacing of an incremental encoder with an azimuthal stage to increase reliability in vacuum.',
          jobBulletPoints: [
            'Wrote a C++ based Arduino program to convert binary pulsed data from a linear translation stage to digital format',
            'Reduced program complexity to allow real-time updates to interface with a user display and with LabVIEW',
            'Designed a custom PCB to contain analog data in shift registers that an Arduino Mega 2560 would read and convert in real-time via the physical interface with digital to analog converters',
          ],
          jobTags: [],
          jobSkills: {},
        },
        {
          position: 'Undergraduate Research Assistant',
          company: 'Composite Structures Laboratory',
          companyLogo: 'images/mcsl.webp',
          dateStart: 'January 2019',
          dateEnd: 'June 2019',
          officeCity: 'Ann Arbor',
          officeState: 'Michigan',
          jobDescription:
            'Designed a high-strength fixture in Fusion 360 to withstand 100kip forces while maximizing turnaround times between experiments to allow characterization of laminate angles in composite sandwiched fearing. Employed digital image correlation techniques to characterize composite performance during stress testing campaigns. Quantified macro-cracks within ply’s in specimens to their peak loads correlating the effects of macro-cracks of the yield strength of carbon-fiber composites',
          jobBulletPoints: [
            'Designed a high-strength fixture in Fusion 360 to withstand 100kip forces while maximizing turnaround times between experiments to allow characterization of laminate angles in composite sandwiched fearing',
            'Employed digital image correlation techniques to characterize composite performance during stress testing campaigns',
            'Quantified macro-cracks within ply’s in specimens to their peak loads correlating the effects of macro-cracks of the yield strength of carbon-fiber composites',
          ],
          jobTags: [],
          jobSkills: {},
        },
      ],
    },
    {
      experienceTitle: 'Volunteering',
      defaultIsOpen: false,
      icon: IconNames.HAND,
      sections: [
        {
          position: 'Aerospace Day',
          company: 'University of Michigan',
          companyLogo: 'images/UM_Logo.webp',
          companyUrl: 'https://umich.edu/',
          dateStart: 'March 2019',
          dateEnd: 'March 2019',
          officeCity: 'Ann Arbor',
          officeState: 'Michigan',
          jobDescription:
            'Aerospace Day is an outreach that occurs every semester at the University of Michigan, where we showcase what the engineering students are working on and engage with the community.',
          jobBulletPoints: [],
          jobTags: [],
          jobSkills: {},
        },
      ],
    },
  ]

  return (
    <div className='experience-page p-2 m-2 md:p-4 md:m-4'>
      <Card className='flex flex-col gap-y-2! md:p-4! p-2!'>
        <div className='flex flex-col gap-1 items-center'>
          <H1 className='flex flex-row items-center' style={{ fontFamily: 'impact' }}>
            Experience
          </H1>
          <div className='flex flex-row flex-wrap items-center gap-2'>
            <Icon icon={IconNames.BRIEFCASE} />
            <H3 className='my-auto!'>Work, Internships and Volunteering</H3>
          </div>
          I have been working full-time post-graduation, and all my past work experiences can be found here!
        </div>
        <Divider />
        {experiences.map((experience, experienceId) => {
          return (
            <Section
              key={`experience-${experienceId}`}
              className='p-2! md:p-4!'
              title={experience.experienceTitle}
              icon={<Icon icon={experience.icon} size={IconSize.LARGE} />}
              collapsible={true}
              collapseProps={{ defaultIsOpen: experience.defaultIsOpen }}
            >
              <div className='flex flex-col gap-2 p-1 md:p-2'>
                {experience.sections.map((section, sectionId) => {
                  const TagElement =
                    section.companyUrl !== null ? (
                      <Tag onClick={() => window.open(section.companyUrl, '_blank')} icon={IconNames.OFFICE}>
                        <a href={section.companyUrl} target='_blank' rel='noopener noreferrer' style={{ color: Colors.BLUE5 }}>
                          {section.company}
                        </a>
                      </Tag>
                    ) : (
                      <Tag icon={IconNames.OFFICE}>
                        <a style={{ color: Colors.BLUE5 }}>{section.company}</a>
                      </Tag>
                    )

                  const CompoundTagElement = (
                    <CompoundTag intent='primary' endIcon={IconNames.GLOBE} icon={IconNames.MAP_MARKER} leftContent={section.officeCity}>
                      <span>{section.officeState}</span>
                    </CompoundTag>
                  )

                  const rightElementIfWeb = (
                    <span className='text-right'>
                      {section.dateStart} - {section.dateEnd}
                      <br />
                      {CompoundTagElement}
                    </span>
                  )

                  return (
                    <Section
                      key={`${section}-${sectionId}`}
                      className='rounded-md! shadow-lg! p-2! md:p-4!'
                      title={<H4>{section.position}</H4>}
                      icon={<img className={`object-contain ${isMobile ? 'w-8' : 'w-16'}`} src={section.companyLogo} />}
                      subtitle={
                        <>
                          {TagElement}
                          {isMobile ? rightElementIfWeb : undefined}
                        </>
                      }
                      rightElement={!isMobile ? rightElementIfWeb : undefined}
                    >
                      <SectionCard className='flex flex-col gap-2'>
                        {section.jobDescription}
                        <UL>
                          {section.jobBulletPoints.map((bulletPoint, idx) => (
                            <li key={idx} className='flex flex-row gap-2'>
                              <Icon icon={IconNames.CIRCLE} />
                              <span className='text-md!'>{bulletPoint}</span>
                            </li>
                          ))}
                        </UL>
                        <div className='flex flex-wrap gap-1'>
                          {section.jobTags.map((jobTag) => (
                            <Tag key={jobTag}>{jobTag}</Tag>
                          ))}
                        </div>
                        <TooltipIconifyIcon skillsDictionary={section.jobSkills} />
                      </SectionCard>
                    </Section>
                  )
                })}
              </div>
            </Section>
          )
        })}
      </Card>
    </div>
  )
}
