import { Card, H1, H3, Icon, Colors, CompoundTag, Divider, Tag, Section, H4, SectionCard } from '@blueprintjs/core'
import { IconNames, IconSize } from '@blueprintjs/icons'
import type { BlueprintIcons_16Id } from '@blueprintjs/icons/lib/esm/generated/16px/blueprint-icons-16'
import { useTheme } from '../../../hooks/Context'

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
          jobDescription: 'TODO',
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
          jobDescription: 'TODO',
        },
        {
          position: 'Realtime Software Engineer II',
          company: 'Boeing - Phantomworks',
          companyLogo: 'images/Boeing_PW-logo.webp',
          companyUrl: 'https://www.boeing.com/defense/phantom-works',
          dateStart: 'January 2023',
          dateEnd: 'February 2024',
          officeCity: 'Berkley',
          officeState: 'Missouri',
          jobDescription:
            'Developed a robust Grafana monitoring dashboard that enables effective visualization and analysis of system metrics. A key focus was on packaging persistent data into releases, ensuring streamlined deployment and integration. Additionally, I optimized C++/Clang RedHat compatibility testing by implementing Docker and parallel building, resulting in an impressive 6x reduction in testing time. Lastly, I authored comprehensive documentation encompassing introductory resources, facilitating a smooth onboarding process for new hires and ensuring their timely assimilation into the team.',
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
            "Lead Engineer for maintaining the Navy's multi-billion dollar contract to manufacture the Trident II D5 Ballistic Missile, entailing being on-call 24/7 and to support on-site operations throughout the weekend/and or nights. Determine root causes on tool defects and its impacts on product and discuss top-level engineering with customers (Army, Lockheed Martin, Navy) our proposed fixes to provide transparency and dependable products. Provide excruciating attention to detail to mitigate manufacturing defects on end-product valued on the order of tens of millions of dollars for national defense Reduce the risks of manufacturing stoppage, identify manufacturing bottlenecks, safety concerns, and support floor operations and personal",
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
            "Aided in the development of a React web application for the Physical Security of the U.S. Air Force's modernized ICBM - Sentinel program - to monitor missile sites to mitigate both domestic and foreign threats. Furthermore I aided in transitioning from a cesium mapviewer to leaflet mapviewer and converting cesium map entities with TypeScript to improve performance by 5-10x while maintaining original functionality. Lastly I took initiative and lead troubleshooting for a workaround during an unexpected SDE migration reducing team downtime by approximately 2-4 weeks",
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
          dateStart: 'TODO 2023',
          dateEnd: 'TODO 2024',
          officeCity: 'Atlanta',
          officeState: 'Georgia',
          jobDescription: 'TODO',
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
          jobDescription: 'TODO',
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
        },
      ],
    },
  ]

  return (
    <div className='experience-page p-2 m-2 md:p-4 md:m-4'>
      <Card className='flex flex-col p-4! gap-y-2!'>
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
        {experiences.map((experience) => {
          return (
            <Section
              className='p-4!'
              title={experience.experienceTitle}
              icon={<Icon icon={experience.icon} size={IconSize.LARGE} />}
              collapsible={true}
              collapseProps={{ defaultIsOpen: experience.defaultIsOpen }}
            >
              <div className='flex flex-col gap-2 p-2'>
                {experience.sections.map((section) => {
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
                      className='rounded-md! shadow-lg!'
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
                      <SectionCard>{section.jobDescription}</SectionCard>
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
