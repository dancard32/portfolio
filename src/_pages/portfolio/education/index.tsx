import { Card, H1, H3, H6, Icon, Colors, CompoundTag, Divider, Tag, Section, H4, SectionCard, Button, Tooltip } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import { useTheme } from '../../../hooks/Context'
import { Fragment } from 'react/jsx-runtime'

interface educationSectionSkill {
  degree: string
  degreeConcentration: string
  degreeUrl: string
  diplomaUrl?: string
  college: string
  collegeLogo: string
  collegeUrl?: string
  dateStart: string
  dateEnd: string
  gpa: string
  collegeCity: string
  collegeState: string
  classes: string[]
  accolades: string[]
}

interface educationCalloutSkills {
  title: string
  logo: string
  calloutUrl: string
}
interface educationCalloutSection {
  sectionTitle: string
  colorCode: string
  skills: educationCalloutSkills[]
}

export default function EducationPage() {
  const { isMobile } = useTheme()

  const experiences: educationSectionSkill[] = [
    {
      degree: 'Masters of Science in Computer Science',
      degreeConcentration: 'Computer Science - Computing Systems',
      degreeUrl: 'https://omscs.gatech.edu/',
      college: 'Georgia Institute of Technology',
      collegeLogo: 'images/GT_logo.webp',
      collegeUrl: 'https://www.gatech.edu/',
      dateStart: 'August 2022',
      dateEnd: 'Present',
      gpa: '3.5',
      collegeCity: 'Atlanta',
      collegeState: 'Georgia',
      classes: ['Machine Learning for Trading', 'Computer Networks'],
      accolades: ['Teaching Assistant for Academic Integrity'],
    },
    {
      degree: 'Masters of Science in Engineering',
      degreeConcentration: 'Aerospace Engineering - Computational Methods',
      degreeUrl: 'https://aero.engin.umich.edu/',
      diplomaUrl: 'pdfs/Diploma_MSE.pdf',
      college: 'University of Michigan',
      collegeLogo: 'images/UM_Logo.webp',
      collegeUrl: 'https://umich.edu/',
      dateStart: 'August 2020',
      dateEnd: 'May 2021',
      gpa: '3.91',
      collegeCity: 'Ann Arbor',
      collegeState: 'Michigan',
      classes: [
        'Computational Fluid Dynamics I',
        'Computational Methods for Aerospace Engineering',
        'Partial Differential Equations',
        'Rocket Propulsion',
        'Electric Propulsion',
        'Space Policy and Management',
      ],
      accolades: ['Graduate Student Instructor'],
    },
    {
      degree: 'Bachelors of Science in Engineering',
      degreeConcentration: 'Aerospace Engineering',
      degreeUrl: 'https://aero.engin.umich.edu/',
      diplomaUrl: 'pdfs/Diploma_BSE.pdf',
      college: 'University of Michigan',
      collegeLogo: 'images/UM_Logo.webp',
      collegeUrl: 'https://umich.edu/',
      dateStart: 'September 2018',
      dateEnd: 'August 2020',
      gpa: '3.91',
      collegeCity: 'Ann Arbor',
      collegeState: 'Michigan',
      classes: [
        'Gas Dynamics',
        'Aerospace Propulsion',
        'Aerospace Structures',
        'Aerodynamics',
        'Vibration and Dynamics',
        'Spacecraft Dynamics',
        'Electrical Circuits Analysis',
        'Space Mission Design',
        'Aerospace Controls',
      ],
      accolades: ['Summa Cum Laude', "Dean's List", 'University Honors', '1st Generation Engineer', '1st Generation STEM'],
    },
  ]

  const skillSections: educationCalloutSection[] = [
    {
      sectionTitle: 'Programming language',
      colorCode: '#a83865',
      skills: [
        {
          title: 'Python',
          logo: 'images/Python-logo.webp',
          calloutUrl: 'https://www.python.org/',
        },
        {
          title: 'HTML',
          logo: 'images/HTML5-logo.webp',
          calloutUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        },
        {
          title: 'CSS',
          logo: 'images/CSS3-logo.webp',
          calloutUrl: 'https://www.css3.info/',
        },
        {
          title: 'LaTeX',
          logo: 'images/LaTeX-logo.webp',
          calloutUrl: 'https://www.latex-project.org/',
        },
        {
          title: 'React',
          logo: 'images/React-logo.webp',
          calloutUrl: 'https://reactjs.org/',
        },
        {
          title: 'C++',
          logo: 'images/C++-logo.webp',
          calloutUrl: 'https://www.cplusplus.com/',
        },
        {
          title: 'Arduino',
          logo: 'images/Arduino-logo.webp',
          calloutUrl: 'https://www.arduino.cc/',
        },
      ],
    },
    {
      sectionTitle: 'Supporting Software',
      colorCode: '#faae16',
      skills: [
        {
          title: 'Docker',
          logo: 'images/Docker-logo.webp',
          calloutUrl: 'https://docker.com/',
        },
        {
          title: 'Kubernetes',
          logo: 'images/Kubernetes-logo.webp',
          calloutUrl: 'https://kubernetes.io/',
        },
        {
          title: 'Github',
          logo: 'images/Github-logo.webp',
          calloutUrl: 'https://github.com/',
        },
        {
          title: 'Linux',
          logo: 'images/Linux-logo.webp',
          calloutUrl: 'https://www.linux.org/',
        },
        {
          title: 'SQL Lite',
          logo: 'images/Sqlite-logo.webp',
          calloutUrl: 'https://www.sqlite.org/index.html',
        },
        {
          title: 'Ubuntu',
          logo: 'images/Ubuntu-logo.webp',
          calloutUrl: 'https://ubuntu.com/',
        },
        {
          title: 'Git',
          logo: 'images/Git-logo.webp',
          calloutUrl: 'https://git-scm.com/',
        },
      ],
    },
    {
      sectionTitle: 'Engineering Skills',
      colorCode: '#a34ca6',
      skills: [
        {
          title: 'Oscilloscope',
          logo: 'images/Oscope-logo.webp',
          calloutUrl: 'https://en.wikipedia.org/wiki/Oscilloscope',
        },
        {
          title: 'Multimeter',
          logo: 'images/Multimeter-logo.webp',
          calloutUrl: 'https://en.wikipedia.org/wiki/Multimeter',
        },
        {
          title: 'Fusion 360',
          logo: 'images/Fusion-logo.webp',
          calloutUrl: 'https://www.autodesk.com/products/fusion-360/overview',
        },
        {
          title: 'Cura',
          logo: 'images/Cura-logo.webp',
          calloutUrl: 'https://ultimaker.com/software/ultimaker-cura',
        },
        {
          title: 'NX',
          logo: 'images/NX-logo.webp',
          calloutUrl: 'https://www.plm.automation.siemens.com/global/en/products/nx/',
        },
        {
          title: 'ExpressPCB',
          logo: 'images/ExpressPCB-logo.webp',
          calloutUrl: 'https://www.expresspcb.com/',
        },
        {
          title: 'SolidWorks',
          logo: 'images/SWX-logo.webp',
          calloutUrl: 'https://www.solidworks.com/',
        },
      ],
    },
  ]

  const certificationSections: educationCalloutSection[] = [
    {
      sectionTitle: 'Python Data Science | University of Michigan, Coursera',
      colorCode: '#8C151599',
      skills: [
        {
          title: 'Applied Machine Learning in Python',
          logo: 'images/pds_machineLearning.webp',
          calloutUrl: 'cs_certifications/Applied Machine Learning in Python.pdf',
        },
        {
          title: 'Introduction to Data Science in Python',

          logo: 'images/pds_dataScience.webp',
          calloutUrl: 'cs_certifications/Introduction to Data Science in Python.pdf',
        },
        {
          title: 'Applied Text Mining in Python',
          logo: 'images/pds_textMining.webp',
          calloutUrl: 'cs_certifications/Applied Text Mining in Python.pdf',
        },
        {
          title: 'Applied Social Network Analysis in Python',
          logo: 'images/pds_networkAnalysis.webp',
          calloutUrl: 'cs_certifications/Applied Social Network Analysis in Python.pdf',
        },
        {
          title: 'Applied Plotting, Charting & Data Representation in Python',
          logo: 'images/pds_dataRep.webp',
          calloutUrl: 'cs_certifications/Applied Plotting, Charting & Data Representation in Python.pdf',
        },
      ],
    },
    {
      sectionTitle: 'Python for Everybody | University of Michigan, Coursera',
      colorCode: '#47A048',
      skills: [
        {
          title: 'Python Data Structures',
          logo: 'images/p4e_dataStructures.webp',
          calloutUrl: 'cs_certifications/Python Data Structures.pdf',
        },

        {
          title: 'Programming for Everybody (Getting Started with Python)',
          logo: 'images/p4e_gettingStarted.webp',
          calloutUrl: 'cs_certifications/Programming for Everybody (Getting Started with Python).pdf',
        },
        {
          title: 'Using Databases with Python',
          logo: 'images/p4e_databases.webp',
          calloutUrl: 'cs_certifications/Using Databases with Python.pdf',
        },
        {
          title: 'Using Python to Access Web Data',
          logo: 'images/p4e_webData.webp',
          calloutUrl: 'cs_certifications/Using Python to Access Web Data.pdf',
        },
      ],
    },
    {
      sectionTitle: 'Django for Everybody | University of Michigan, Coursera',
      colorCode: '#ffbfae',
      skills: [
        {
          title: 'Web Application Technologies and Django',
          logo: 'images/django_webTech.webp',
          calloutUrl: 'cs_certifications/Web Application Technologies and Django.pdf',
        },
        {
          title: 'Building Web Applications in Django',
          logo: 'images/django_webApps.webp',
          calloutUrl: 'cs_certifications/Building Web Applications in Django.pdf',
        },
      ],
    },
  ]

  return (
    <div className='experience-page p-2 m-2 md:p-4 md:m-4'>
      <Card className='flex flex-col p-4! gap-y-2!'>
        <div className='flex flex-col gap-1 items-center w-1/2 mx-auto text-center'>
          <H1 className='flex flex-row items-center' style={{ fontFamily: 'impact' }}>
            Education
          </H1>
          <div className='flex flex-row flex-wrap items-center gap-2'>
            <Icon icon={IconNames.LEARNING} />
            <H3 className='my-auto!'>Basic Qualification and Certifications</H3>
          </div>
          Listed below are my professional education, and working skills, as well as certifications that I have obtained relevant to my
          engineering background.
        </div>
        <Divider />
        <div className='flex flex-col gap-2 p-2'>
          {experiences.map((section, sectionId) => {
            const TagElement =
              section.collegeUrl !== null ? (
                <Tag onClick={() => window.open(section.collegeUrl, '_blank')} icon={IconNames.OFFICE}>
                  <a href={section.collegeUrl} target='_blank' rel='noopener noreferrer' style={{ color: Colors.BLUE5 }}>
                    {section.college}
                  </a>
                </Tag>
              ) : (
                <Tag icon={IconNames.OFFICE}>
                  <a style={{ color: Colors.BLUE5 }}>{section.college}</a>
                </Tag>
              )

            const CompoundTagElement = (
              <CompoundTag intent='primary' endIcon={IconNames.GLOBE} icon={IconNames.MAP_MARKER} leftContent={section.collegeCity}>
                <span>{section.collegeState}</span>
              </CompoundTag>
            )

            const rightElementIfWeb = (
              <span className='text-right'>
                {section.dateStart} - {section.dateEnd}
                <br />
                GPA: {section.gpa}
              </span>
            )

            return (
              <Section
                key={`section-${sectionId}`}
                className='rounded-md! shadow-lg!'
                title={
                  <>
                    <div className='flex flex-row'>
                      <H4 className='my-auto!'>{section.degree} </H4>
                      <Button
                        icon={IconNames.SHARE}
                        variant='minimal'
                        aria-label='share'
                        onClick={() => window.open(section.degreeUrl, '_blank')}
                      />
                    </div>
                    <div className='flex flex-row'>
                      <H6 className='my-auto!'>{section.degreeConcentration}</H6>
                      {section.diplomaUrl ? (
                        <Button
                          icon={IconNames.SHARE}
                          variant='minimal'
                          aria-label='share'
                          onClick={() => window.open(section.diplomaUrl, '_blank')}
                        />
                      ) : null}
                    </div>
                  </>
                }
                icon={<img className={`object-contain ${isMobile ? 'w-8' : 'w-16'}`} src={section.collegeLogo} />}
                subtitle={
                  <>
                    {TagElement}
                    <br />
                    {CompoundTagElement}
                    {isMobile ? rightElementIfWeb : undefined}
                  </>
                }
                rightElement={!isMobile ? rightElementIfWeb : undefined}
              >
                <SectionCard className='flex flex-col gap-2 m-4!'>
                  <div className='flex flex-row flex-wrap gap-1'>
                    <span className='font-bold'>Coursework:</span>{' '}
                    {section.classes.map((courseName) => (
                      <Tag key={courseName}>{courseName}</Tag>
                    ))}
                  </div>
                  <div className='flex flex-row flex-wrap gap-1'>
                    <span className='font-bold'>Accolades:</span>
                    {section.accolades.map((accoladeName) => (
                      <Tag key={accoladeName}>{accoladeName}</Tag>
                    ))}
                  </div>
                </SectionCard>
              </Section>
            )
          })}
        </div>

        <div className='flex flex-col gap-1 items-center'>
          <H1 className='flex flex-row items-center' style={{ fontFamily: 'impact' }}>
            Skills
          </H1>
        </div>
        <Divider />
        <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
          {skillSections.map((parentSkill, parentSkillId) => (
            <Fragment key={`${parentSkill}-${parentSkillId}`}>
              {parentSkill.skills.map((skill, skillId) => (
                <Card
                  key={`skill-${skillId}`}
                  className='rounded-md! shadow-lg! pl-0! pr-0! pb-0!'
                  style={{ backgroundColor: parentSkill.colorCode }}
                >
                  <Tooltip content={'See more'}>
                    <Button icon={IconNames.SHARE} variant='minimal' onClick={() => window.open(skill.calloutUrl, '_blank')} />
                  </Tooltip>
                  <div className='flex flex-col items-center'>
                    <img className='w-16! h-16! object-contain' src={skill.logo} alt={`${skill.title} Image`} />
                    <Card className='rounded-md! shadow-lg! w-full!'>
                      <div className='flex flex-col items-center text-center'>
                        <H4>{skill.title}</H4>
                        <H6>{parentSkill.sectionTitle}</H6>
                      </div>
                    </Card>
                  </div>
                </Card>
              ))}
            </Fragment>
          ))}
        </div>

        <div className='flex flex-col gap-1 items-center'>
          <H1 className='flex flex-row items-center' style={{ fontFamily: 'impact' }}>
            Certifications
          </H1>
        </div>
        <Divider />
        <div className='grid grid-cols-1 md:grid-cols-4 gap-2 m-4'>
          {certificationSections.map((parentSkill, parentSkillId) => (
            <Fragment key={`${parentSkill}-${parentSkillId}`}>
              {parentSkill.skills.map((skill, skillId) => (
                <Card
                  key={`${skill}-${skillId}`}
                  className='rounded-md! shadow-lg! pl-0! pr-0! pb-0!'
                  style={{ backgroundColor: parentSkill.colorCode }}
                >
                  <Tooltip content={'See more'}>
                    <Button icon={IconNames.SHARE} variant='minimal' onClick={() => window.open(skill.calloutUrl, '_blank')} />
                  </Tooltip>
                  <div className='flex flex-col items-center'>
                    <img className='w-32! h-32! object-contain' src={skill.logo} alt={`${skill.title} Image`} />
                    <Card className='rounded-md! shadow-lg! w-full! bottom-0!'>
                      <div className='flex flex-col items-center text-center'>
                        <H4>{skill.title}</H4>
                        <H6>{parentSkill.sectionTitle}</H6>
                      </div>
                    </Card>
                  </div>
                </Card>
              ))}
            </Fragment>
          ))}
        </div>
      </Card>
    </div>
  )
}
