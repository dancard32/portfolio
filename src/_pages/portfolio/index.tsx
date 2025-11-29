import {
  Card,
  H1,
  H3,
  Button,
  H2,
  CompoundTag,
  Tag,
  Callout,
  UL,
  Tooltip,
  Divider,
  Icon,
  Colors,
  ButtonGroup,
  Intent,
} from '@blueprintjs/core'
import { IconNames, IconSize } from '@blueprintjs/icons'
import { useNavigate } from 'react-router'
import IconifyIcon from '../../components/IconifyIcon'
import { useTheme } from '../../hooks/Context'

interface DictionaryToolTipProps {
  iconifyIcon: string
  style: any
}
interface TooltipIconifyIconProps {
  skillsDictionary: Record<string, string | DictionaryToolTipProps>
}

function TooltipIconifyIcon({ skillsDictionary }: TooltipIconifyIconProps) {
  const { isMobile } = useTheme()

  const fontSizeStyling = `${isMobile ? '24px' : '48px'}`

  return (
    <div className='justify-center flex flex-row flex-wrap gap-2'>
      {Object.keys(skillsDictionary).map((key) => (
        <Tooltip content={key} placement='bottom'>
          {typeof skillsDictionary[key] === 'string' ? (
            <IconifyIcon icon={skillsDictionary[key]} style={{ fontSize: fontSizeStyling }} />
          ) : (
            <IconifyIcon icon={skillsDictionary[key].iconifyIcon} style={{ fontSize: fontSizeStyling, ...skillsDictionary[key].style }} />
          )}
        </Tooltip>
      ))}
    </div>
  )
}

export default function HomePage() {
  const navigate = useNavigate()

  const technicalSkills: Record<string, string> = {
    Homelab: 'icon-park:server',
    Docker: 'logos:docker-icon',
    Kubernetes: 'logos:kubernetes',
    Ansible: 'skill-icons:ansible',
    Helm: 'vscode-icons:file-type-helm',
    Github: 'simple-icons:github',
    Gitlab: 'logos-gitlab',
    RaspberryPi: 'logos-raspberry-pi',
    Ubuntu: 'logos:ubuntu',
    'VS Code': 'vscode-icons:file-type-vscode',
    '3D Printing': 'mdi:printer-3d-nozzle-alert',
    MATLAB: 'vscode-icons:file-type-matlab',
    Python: 'vscode-icons:file-type-python',
    React: 'skill-icons:react-dark',
  }

  const technicalBackgroundSkills: Record<string, string> = {
    'Aerospace Engineering': 'noto:rocket',
    Propulsion: 'game-icons:rocket-thruster',
    Python: 'vscode-icons:file-type-python',
    Arduino: 'logos:arduino',
    Matlab: 'vscode-icons:file-type-matlab',
  }

  const lookingToLearnSkills: Record<string, any> = {
    AWS: {
      iconifyIcon: 'simple-icons:amazonaws',
      style: {
        color: '#FF9900',
      },
    },
    Alexa: {
      iconifyIcon: 'simple-icons:amazonalexa',
      style: {
        color: '#00CAFF',
      },
    },
    JavaScript: {
      iconifyIcon: 'simple-icons:javascript',
      style: {
        backgroundColor: '#FFFFFF',
        color: '#F7DF1E',
      },
    },
    Java: {
      iconifyIcon: 'simple-icons:java',
      style: {
        color: '#808080',
      },
    },
    PHP: {
      iconifyIcon: 'simple-icons:php',
      style: {
        color: '#313875',
      },
    },
    Go: {
      iconifyIcon: 'simple-icons:go',
      style: {
        color: '#40a7e3',
      },
    },
    Solidity: {
      iconifyIcon: 'simple-icons:solidity',
      style: {
        color: '#4d4d4d',
      },
    },
  }

  return (
    <div className='home-page p-2 m-2 md:p-4 md:m-4'>
      <Card className='flex flex-col p-4!'>
        <div className='flex flex-col md:flex-row mx-aut!o p-2 m-4 gap-2 md:pl-32 md:pr-32 '>
          <img className='object-contain w-64 rounded-full!' src='SQ_PFP.jpg' alt='Profile Picture' />
          <div className='flex flex-col gap-1'>
            <H1 className='flex flex-row items-center' style={{ fontFamily: 'impact' }}>
              Dan Card
              <img alt='Wave' src='https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif' width='48px' />
            </H1>
            <div className='flex flex-row flex-wrap items-center gap-2'>
              <Icon icon={IconNames.BRIEFCASE} />
              <H3 className='my-auto!'>
                Forward Deployed Software Engineer @&nbsp;
                <Tag onClick={() => window.open('https://www.palantir.com/', '_blank')} icon={IconNames.OFFICE}>
                  <a href='https://www.palantir.com/' target='_blank' rel='noopener noreferrer' style={{ color: Colors.BLUE5 }}>
                    Palantir Technologies
                  </a>
                </Tag>
              </H3>
            </div>
            Focused on delivering high-impact solutions using the latest technologies and best practices
            <div>
              <CompoundTag endIcon={IconNames.GLOBE} icon={IconNames.MAP_MARKER} leftContent='Arlington' round={true}>
                <span>Virginia</span>
              </CompoundTag>
            </div>
            <div className='flex flex-row flex-wrap gap-1'>
              <Tag>Distributed Systems</Tag>
              <Tag>High Availability</Tag>
              <Tag>Builder</Tag>
            </div>
            <div className='flex flex-row gap-2'>
              <Button
                icon={IconNames.DOCUMENT}
                className='rounded-md!'
                text='Contact Me'
                intent={Intent.PRIMARY}
                onClick={() => navigate('portfolio/contact')}
              />
              <Button
                icon={IconNames.PHONE_CALL}
                className='rounded-md!'
                text='View Resume'
                intent={Intent.PRIMARY}
                onClick={() => navigate('portfolio/contact')}
              />
            </div>
            <ButtonGroup>
              <Button
                icon={
                  <TooltipIconifyIcon
                    skillsDictionary={{ 'My Github': { iconifyIcon: 'simple-icons:github', style: { fontSize: '24px' } } }}
                  />
                }
                onClick={() => window.open('https://github.com/dancard32', '_blank')}
                variant='minimal'
              />
              <Button
                icon={
                  <TooltipIconifyIcon
                    skillsDictionary={{ LinkedIn: { iconifyIcon: 'logos:linkedin-icon', style: { fontSize: '24px' } } }}
                  />
                }
                onClick={() => window.open('https://www.linkedin.com/in/dan-card/', '_blank')}
                variant='minimal'
              />
              <Button
                icon={
                  <TooltipIconifyIcon skillsDictionary={{ Email: { iconifyIcon: 'logos:google-gmail', style: { fontSize: '24px' } } }} />
                }
                onClick={() => window.open('mailto:dcard@umich.edu', '_blank')}
                variant='minimal'
              />
            </ButtonGroup>
          </div>
        </div>
        <H2 className='text-center'>Here's what I do</H2>
        <Divider />
        <div className='flex flex-col gap-4 p-1 m-1 md:p-2 md:m-2'>
          <Callout icon={<Icon icon={IconNames.DESKTOP} size={IconSize.LARGE} />}>
            <H3>Software Engineer</H3>
            <UL>
              <li>
                <span className='text-lg!'>✈️ Currently employed as a software engineer at Boeing</span>
              </li>
              <li>
                <span className='text-lg!'>🧑‍🎓 Enrolled at Georgia Tech Masters in Computer Science</span>
              </li>
              <li>
                <span className='text-lg!'>👨‍🏫 Graduate Teaching Assistant in Academic Integrity</span>
              </li>
              <li>
                <span className='text-lg!'>💻 Developing and maintaining a homelab personal server</span>
              </li>
              <li>
                <span className='text-lg!'>📈 In process of developing a high-frequency trading agent</span>
              </li>
            </UL>
          </Callout>
          <Callout icon={<Icon icon={IconNames.BUILD} size={IconSize.LARGE} />}>
            <H3>My Favorite Tech</H3>
            <UL>
              <li>
                <span className='text-lg!'>👨🏽‍💻 Striving to master Docker and Kubernetes</span>
              </li>
              <li>
                <span className='text-lg!'>🛠 Working to self-host apps/services on my homelab</span>
              </li>
              <li>
                <span className='text-lg!'>🎮 End of year goal to develop a small indie game with LibDX</span>
              </li>
              <li>
                <span className='text-lg!'>🛸 Implement an AI service for personal project</span>
              </li>
            </UL>
            <TooltipIconifyIcon skillsDictionary={technicalSkills} />
          </Callout>
          <Callout icon={<Icon icon={IconNames.LIGHTNING} size={IconSize.LARGE} />}>
            <H3>Technical Background</H3>
            <UL>
              <li>
                <span className='text-lg!'>🚀 Former lead tooling maintenance on a multi-billion dollar DoD contract</span>
              </li>
              <li>
                <span className='text-lg!'>🛰 Designed and researched high-power ion thrusters</span>
              </li>
              <li>
                <span className='text-lg!'>💻 Developed custom laboratory equipment</span>
              </li>
              <li>
                <span className='text-lg!'>🖨 Avid 3D printer/tinkerer of personal projects</span>
              </li>
            </UL>
            <TooltipIconifyIcon skillsDictionary={technicalBackgroundSkills} />
          </Callout>
          <Callout icon={<Icon icon={IconNames.CLEAN} size={IconSize.LARGE} />}>
            <H3>Always looking to learn!</H3>
            <UL>
              <li>
                <span className='text-lg!'>👨🏽‍💻 Always trying to improve! Above are languages/software I plan to learn</span>
              </li>
              <li>
                <span className='text-lg!'>🧑‍🎓 Expected Georgia Tech graduation in Fall 2025</span>
              </li>
              <li>
                <span className='text-lg!'>📧 Feel free to reach out to me with any technical questions or recommendations!</span>
              </li>
            </UL>
            <TooltipIconifyIcon skillsDictionary={lookingToLearnSkills} />
          </Callout>
        </div>
      </Card>
    </div>
  )
}
