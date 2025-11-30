import { Card, H1, H3, Button, H2, CompoundTag, Tag, Callout, UL, Divider, Icon, Colors, Intent } from '@blueprintjs/core'
import { IconNames, IconSize } from '@blueprintjs/icons'
import { useNavigate } from 'react-router'
import { TooltipIconifyIcon } from '../../components/TooltipIconifyIcon'
import ContactInfo from '../../components/ContactInfo'
import type { BlueprintIcons_16Id } from '@blueprintjs/icons/lib/esm/generated/16px/blueprint-icons-16'

interface homeSections {
  title: string
  icon: BlueprintIcons_16Id
  bulletPoints: string[]
  iconifyIcons: Record<string, string | any>
}

export default function HomePage() {
  const navigate = useNavigate()

  const home: homeSections[] = [
    {
      title: 'Software Engineer',
      icon: IconNames.Desktop,
      bulletPoints: [
        '✈️ Currently employed as a software engineer at Palantir Technologies',
        '🧑‍🎓 Enrolled at Georgia Tech Masters in Computer Science',
        '💻 Developing and maintaining a homelab personal server',
        '💪 Worked on multiple projects, including maintaining a legacy codebase, an extended CLIN effort, data analytics, and a re-platforming effort',
        '🔧 Collaborated with cross-functional teams to develop and deploy scalable solutions',
        '👇 Below are some of the software languages / frameworks / applications I have used throughout my career',
      ],
      iconifyIcons: {
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
        Github: 'logos-github-icon',
        'Fast API': 'devicon:fastapi',
        Go: 'logos:go',
        'Github Actions': 'devicon:githubactions',
        Kubernetes: 'logos:kubernetes',
        Terraform: 'devicon:terraform',
        GraphQL: 'logos:graphql',
        'RedHat Linux': 'logos:redhat-icon',
        K3s: 'devicon:k3s',
        'C++': 'logos:c-plusplus',
        Podman: 'devicon:podman',
        CentOS: 'devicon:centos',
        Gitlab: 'logos:gitlab-icon',
        CMake: 'devicon:cmake',
        Apache: 'devicon:apache',
        Ansible: 'skill-icons:ansible',
        GCC: 'devicon:gcc',
        Ceph: 'devicon:ceph',
      },
    },
    {
      title: 'My Favorite Tech',
      icon: IconNames.BUILD,
      bulletPoints: [
        '👨🏽‍💻 Striving to broaden my software engineering skills through personal projects and graduate coursework',
        '🛠 Working to self-host apps and services on my homelab and develop my distributed systems skills',
        '💻 Familiar with a variety of programming languages, including Java, Python, and C++',
        '🔧 Experienced in using Docker, Kubernetes, and Ansible for containerization and automation',
        '👇 Below are some of my favorite technology / software and frameworks',
      ],
      iconifyIcons: {
        Java: 'logos:java',
        React: 'devicon:react',
        MATLAB: 'vscode-icons:file-type-matlab',
        Homelab: 'icon-park:server',
        Python: 'vscode-icons:file-type-python',
        Spark: 'devicon:apachespark-wordmark',
        Docker: 'logos:docker-icon',
        Kubernetes: 'logos:kubernetes',
        Ansible: 'skill-icons:ansible',
        RaspberryPi: 'logos-raspberry-pi',
        Ubuntu: 'logos:ubuntu',
        '3D Printing': 'mdi:printer-3d-nozzle-alert',
      },
    },
    {
      title: 'Technical Background',
      icon: IconNames.LIGHTNING,
      bulletPoints: [
        '🚀 Former lead tooling maintenance on a multi-billion dollar DoD contract',
        '🛰 Designed and researched high-power ion thrusters',
        '💻 Developed custom laboratory equipment',
        '🖨 Avid 3D printer/tinkerer of personal projects',
        '💡 Conducted experiments on plasma dynamics and electric propulsion systems',
      ],
      iconifyIcons: {
        'Aerospace Engineering': 'noto:rocket',
        Propulsion: 'game-icons:rocket-thruster',
        Python: 'vscode-icons:file-type-python',
        Arduino: 'logos:arduino',
        Matlab: 'vscode-icons:file-type-matlab',
      },
    },
    {
      title: 'Always looking to learn!',
      icon: IconNames.CLEAN,
      bulletPoints: [
        '📧 Feel free to reach out to me with any technical questions or recommendations!',
        '🧑‍🎓 Expected Georgia Tech graduation in Fall 2026',
        '💡 Planning to take online courses and attend webinars to expand my knowledge in AI, machine learning, and cybersecurity',
        '📊 Aiming to develop a personal project utilizing blockchain technology and smart contracts',
        '👨🏽‍💻 Always trying to improve! Below are languages/software/frameworks I plan to learn',
      ],
      iconifyIcons: {
        Solidity: 'devicon:solidity',
        Rust: 'devicon:rust',
        Ruby: 'devicon:ruby',
        Svelte: 'devicon:svelte',
        Zig: 'devicon:zig',
        Bun: 'devicon:bun',
      },
    },
  ]

  return (
    <div className='home-page p-2 m-2 md:p-4 md:m-4'>
      <Card className='flex flex-col p-4! gap-y-2!'>
        <div className='flex flex-col md:flex-row mx-auto! p-2 m-4 gap-2 md:pl-32 md:pr-32 '>
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
            Driven engineer focused on delivering high-impact solutions using the latest technologies and best practices
            <div>
              <CompoundTag intent='primary' endIcon={IconNames.GLOBE} icon={IconNames.MAP_MARKER} leftContent='Arlington'>
                <span>Virginia</span>
              </CompoundTag>
            </div>
            <div className='flex flex-row flex-wrap gap-1'>
              <Tag>Distributed Systems</Tag>
              <Tag>High Availability</Tag>
              <Tag>Builder</Tag>
              <Tag>Rapid Development</Tag>
            </div>
            <div className='flex flex-row gap-2'>
              <Button
                icon={IconNames.DOCUMENT}
                className='rounded-md!'
                text='Contact Me'
                intent={Intent.PRIMARY}
                onClick={() => navigate('./contact')}
              />
              <Button
                className='rounded-md!'
                intent={Intent.PRIMARY}
                icon={IconNames.PHONE_CALL}
                text='View Resume'
                onClick={() => window.open('./pdfs/main.pdf', '_blank')}
              />
            </div>
            <ContactInfo />
          </div>
        </div>
        <H2 className='text-center'>Here's what I do</H2>
        <Divider />
        <div className='flex flex-col gap-4 p-1 m-1 md:p-2 md:m-2'>
          {home.map((homeSection) => (
            <Callout icon={<Icon icon={homeSection.icon} size={IconSize.LARGE} />} className={`rounded-md! shadow-lg!`}>
              <H3>{homeSection.title}</H3>
              <UL>
                {homeSection.bulletPoints.map((bulletedPoint) => (
                  <li>
                    <span className='text-lg!'>{bulletedPoint}</span>
                  </li>
                ))}
              </UL>
              <TooltipIconifyIcon skillsDictionary={homeSection.iconifyIcons} />
            </Callout>
          ))}
        </div>
      </Card>
    </div>
  )
}
