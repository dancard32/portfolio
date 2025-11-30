import { Card, H1, H2, H3, H6, Icon, Divider, Button, Tag, Intent, Tooltip, Colors } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import { TooltipIconifyIcon } from '../../../components/TooltipIconifyIcon'
import { useTheme } from '../../../hooks/Context'

interface projectCalloutSkills {
  title: string
  logo?: string
  calloutUrl: string
  description: string
  projectTags?: string[]
  languages: Record<string, string | any>
}
export default function ProjectsPage() {
  const { isDark } = useTheme()

  const coding: projectCalloutSkills[] = [
    {
      title: 'portfolio',
      calloutUrl: 'https://github.com/dancard32/portfolio',
      description: 'A static portfolio website of the currently displayed website written in React + Vite, TailwindCSS, BlueprintJS',
      projectTags: ['Web Development', 'Responsive Design', 'TypeScript', 'GitHub Pages Deployment'],
      languages: {
        React: 'devicon:react',
        Vite: 'devicon:vitejs',
        'Github Pages': 'devicon:githubactions',
        TailwindCSS: 'devicon:tailwindcss',
        BlueprintJS: 'logos:blueprint',
        TypeScript: 'devicon:typescript',
        Github: 'logos-github-icon',
      },
    },
    {
      title: 'homelab',
      calloutUrl: 'https://github.com/dancard32/homelab',
      description: 'This public repository contains all the services that I am running on my personal server.',
      projectTags: [
        'Internet of Things (IoT)',
        'Automation',
        'Home Server',
        'Personal Cloud',
        'Server Management',
        'DevOps',
        'Linux',
        'Networking',
        'Security',
        'Media Server',
      ],
      languages: {
        'Raspberry Pi': 'logos-raspberry-pi',
        Github: 'logos-github-icon',
        Proxmox: 'simple-icons:proxmox',
        Plex: 'simple-icons:plex',
        Kubernetes: 'skill-icons:kubernetes',
        Octoprint: 'simple-icons:octoprint',
        Docker: 'skill-icons:docker',
        Portainer: 'devicon:portainer',
        Pfsense: 'simple-icons:pfsense',
        Helm: 'vscode-icons:file-type-helm',
        Ubuntu: 'logos-ubuntu',
        Ansible: 'logos:ansible',
        Python: 'logos-python',
        'Home Assistant': 'mdi:home-assistant',
        'True NAS': 'simple-icons:truenas',
        Grafana: 'logos:grafana',
        Prometheus: 'logos:prometheus',
        Nginx: 'logos:nginx',
      },
    },
    {
      title: 'hft',
      calloutUrl: 'https://github.com/dancard32/hft',
      description:
        'A graduate project with a high-frequency-trading algorithm employing ML to extrapolate best parameters to beat simulated market agents',
      projectTags: ['NumPy', 'Pandas', 'Matplotlib'],
      languages: {
        Github: 'logos-github-icon',
        Pandas: 'devicon:pandas',
        Python: 'logos-python',
        Matplotlib: 'devicon:matplotlib',
        NumPy: 'devicon:numpy',
      },
    },
    {
      title: 'spotify-player',
      calloutUrl: 'https://github.com/dancard32/spotify-player',
      description: "This project uses a Raspberry Pi integrated with Spotify's web API and RFID module to make a modern record player.",
      projectTags: [
        'Raspberry Pi',
        'Internet of Things (IoT)',
        'Home Automation',
        'RFID Technology',
        'Spotify Integration',
        'Python',
        'Linux',
        'API',
      ],
      languages: {
        'Raspberry Pi': 'logos-raspberry-pi',
        Python: 'logos-python',
        Github: 'logos-github-icon',
        Linux: 'logos-linux-tux',
        'Spotify Web API': 'logos-spotify-icon',
      },
    },
    {
      title: 'google-maps-tourist',
      calloutUrl: 'https://github.com/dancard32/google-maps-tourist',
      description: 'This uses Google Maps API and from an beginning/end point to automatically generate a tourist attraction route.',
      projectTags: ['Travel Technology', 'Route Generation', 'Geographic Information Systems (GIS)', 'Google Maps API', 'Python', 'Flask'],
      languages: {
        Python: 'logos-python',
        Flask: 'logos-flask',
        HTML: 'logos-html-5',
        React: 'logos-react',
        CSS: 'logos-css-3',
        Github: 'logos-github-icon',
      },
    },
    {
      title: 'google-translate-conversation',
      calloutUrl: 'https://github.com/dancard32/google-translate-conversation',
      description:
        "This simple project Google Translate API to automatically converts speech to text, then text to the other person's native language.",
      projectTags: ['Real-time Conversation Transcription', 'Automatic Language Detection', 'Text-to-Speech Synthesis'],
      languages: {
        Python: 'logos-python',
        Github: 'logos-github-icon',
      },
    },
    {
      title: 'conway-game-of-life',
      calloutUrl: 'https://github.com/dancard32/conway-game-of-life',
      description:
        'This game is a cellular automaton devised by mathematician John Conway to highlight that evolution is determined by an initial state.',
      projectTags: [
        'Cellular Automata',
        'Game Theory',
        'Computational Complexity',
        'Simulation',
        'Algorithmic Thinking',
        'Python',
        'Rule-Based Systems',
      ],
      languages: {
        Python: 'logos-python',
        Github: 'logos-github-icon',
      },
    },
    {
      title: 'random-image-generation',
      calloutUrl: '',
      description:
        'Back end Python implementation to generate specified number of images with pre-determined probabilities for NFT implementation.',
      projectTags: ['Image Segmentation', 'Texture Synthesis', 'Color Palette Generation', 'Compression Techniques', 'Blockchain'],
      languages: {
        Python: 'logos-python',
        Github: 'logos-github-icon',
        Ethereum: 'cryptocurrency-color:eth',
      },
    },
  ]

  const engr: projectCalloutSkills[] = [
    {
      title: '2Kw Krypton Hall Effect Thruster',
      calloutUrl: 'pdfs/2kW HET.pdf',
      description:
        'Using Fusion 360, designed a Hall Effect Thruster from start to finish adopting first-principles and industry standards.',
      logo: 'images/HET.webp',
      projectTags: [
        'Propulsion Systems',
        'Fusion 360 Design Software',
        'First-Principles Design',
        'Python',
        'CAD Design',
        'Space Exploration',
      ],
      languages: {
        Python: 'vscode-icons:file-type-python',
        'Fusion 360': 'devicon:fusion',
      },
    },
    {
      title: 'Supersonic Engine Analysis',
      calloutUrl: 'pdfs/Supersonic Engine Analysis.pdf',
      description:
        'In my graduate CFD course, used finite-element analysis and mesh adaptation to approximate the flow fields through a ramjet.',
      logo: 'images/ramjet_diag.webp',
      projectTags: [
        'Computational Fluid Dynamics (CFD)',
        'Finite-Element Analysis',
        'Mesh Adaptation',
        'Aerodynamics',
        'Heat Transfer',
        'Mass Flow Rate',
      ],
      languages: {
        Python: 'vscode-icons:file-type-python',
        Github: 'simple-icons:github',
      },
    },
    {
      title: 'Analysis of Cooled Nozzle',
      calloutUrl: 'pdfs/Regeneratively Cooled Nozzle Channels.pdf',
      description:
        'In graduate computational methods for aerospace engineering, simulated the heat flow through a Regeneratively cooled channel.',
      logo: 'images/ssme25.webp',
      projectTags: [
        'Computational Fluid Dynamics (CFD)',
        'Heat Transfer',
        'Conduction',
        'Regenerative Cooling',
        'Propulsion Systems',
        'Engine Design',
        'Thermal Management',
      ],
      languages: {
        Python: 'vscode-icons:file-type-python',
        MATLAB: 'vscode-icons:file-type-matlab',
      },
    },
    {
      title: 'Lunar Lander Truss Simulation',
      calloutUrl: 'pdfs/Lunar Lander Truss.pdf',
      description:
        'In my graduate computational methods for aerospace engineering I simulated the deformations of a truss during a lunar touchdown.',
      logo: 'images/truss_deform.gif',
      projectTags: ['Computational Mechanics', 'Finite Element Analysis (FEA)', 'Deformation Analysis', 'Stress Analysis'],
      languages: {
        MATLAB: 'vscode-icons:file-type-matlab',
      },
    },
    {
      title: 'Voyager 2 Mission Simulation',
      calloutUrl: 'pdfs/Voyager 2.pdf',
      description:
        "This project simulated Voyager 2's mission through the solar system stepping through all the numerous flyby's of the four gas giants.",
      logo: 'images/voyager2.webp',
      projectTags: ['Celestial Mechanics', 'Orbital Mechanics', 'Interplanetary Transfer Orbit', 'Spacecraft Navigation'],
      languages: {
        MATLAB: 'vscode-icons:file-type-matlab',
      },
    },
    {
      title: 'Analysis of Facility Effects',
      calloutUrl: 'pdfs/Facility Effects.pdf',
      description: 'Researched the various ways that on-ground facilities effect the performance of electric propulsion.',
      logo: 'images/facility_effects.webp',
      projectTags: [
        'Electric Propulsion',
        'Spacecraft Design',
        'Ground-Based Testing',
        'Facility Effects Analysis',
        'Electromagnetic Interference (EMI)',
      ],
      languages: {
        MATLAB: 'vscode-icons:file-type-matlab',
      },
    },
    {
      title: '2019 PEPL Research',
      calloutUrl: 'pdfs/SURE 2019 Proposal.pdf',
      description:
        'Summer 2019, I conducted research at PEPL. While there I repaired motion stages and improved their accuracy and life-time.',
      logo: 'images/lilac.webp',
      projectTags: ['Motion Control Systems', 'Accuracy Improvement', 'Research and Development', 'Data Acquisition and Analysis'],
      languages: {
        'Fusion 360': 'devicon:fusion',
        MATLAB: 'vscode-icons:file-type-matlab',
        ExpressPCB: 'heroicons-outline:lightning-bolt',
      },
    },
    {
      title: 'Hovercraft Design Project',
      calloutUrl: 'pdfs/Hovercraft Presentation.pdf',
      description:
        'In my undergraduate systems engineering class we created preliminary hovercraft design and then iterated these designs.',
      logo: 'images/hovercraft.webp',
      projectTags: [
        'Aerodynamics',
        'Lift Generation',
        'Stability Analysis',
        'Iterative Design Process',
        'Design for Manufacturing (DFM)',
        'Performance Optimization',
        'Data Analysis and Visualization',
      ],
      languages: {
        Arduino: 'logos:arduino',
        MATLAB: 'vscode-icons:file-type-matlab',
        'Fusion 360': 'devicon:fusion',
        CATIA: 'heroicons-outline:desktop-computer',
      },
    },
  ]

  // Colors.DARK_GRAY3 and Colors.LIGHT_GRAY3 are not caching
  const bgColor = isDark ? Colors.DARK_GRAY3 : Colors.LIGHT_GRAY5

  return (
    <div className='experience-page p-2 m-2 md:p-4 md:m-4'>
      <Card className='flex flex-col p-4! gap-y-2!'>
        <div className='flex flex-col gap-1 items-center w-1/2 mx-auto text-center'>
          <H1 className='flex flex-row items-center' style={{ fontFamily: 'impact' }}>
            Projects
          </H1>
          <div className='flex flex-row flex-wrap items-center gap-2'>
            <Icon icon={IconNames.CODE} />
            <H3 className='my-auto!'>Personal Software Engineering Projects</H3>
          </div>
          Here are some projects that showcase my skills as a developing software engineer. As I learn more about programming I hope that I
          can contribute more towards open-source software and aid in the advancement of accessible software
          <Button
            className='rounded-md!'
            intent={Intent.PRIMARY}
            icon={IconNames.SHARE}
            text='More Projects (Github)'
            onClick={() => window.open('https://github.com/dancard32', '_blank')}
          />
        </div>

        <Divider />
        <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
          {coding.map((parentSkill, parentSkillId) => (
            <Card key={`${parentSkill}-${parentSkillId}`} className='rounded-md! shadow-lg! p-2!' style={{ backgroundColor: bgColor }}>
              <Tooltip content={'See more'}>
                <Button icon={IconNames.SHARE} variant='minimal' onClick={() => window.open(parentSkill.calloutUrl, '_blank')} />
              </Tooltip>
              <div className='flex flex-col gap-2!'>
                {parentSkill.logo ? (
                  <img className='w-16! h-16! object-contain' src={parentSkill.logo} alt={`${parentSkill.title} Image`} />
                ) : null}
                <H2>{parentSkill.title}</H2>
                <H6>{parentSkill.description}</H6>
                {parentSkill.projectTags ? (
                  <div className='flex flex-wrap gap-1'>
                    {parentSkill.projectTags.map((projectTag) => (
                      <Tag key={projectTag}>{projectTag}</Tag>
                    ))}
                  </div>
                ) : null}
                <TooltipIconifyIcon skillsDictionary={parentSkill.languages} />
              </div>
            </Card>
          ))}
        </div>

        <div className='flex flex-col gap-1 items-center w-1/2 mx-auto text-center mt-16'>
          <H1 className='flex flex-row items-center' style={{ fontFamily: 'impact' }}>
            Aerospace and Mechanical Engineering Projects
          </H1>
          <div className='flex flex-row flex-wrap items-center gap-2'>
            <Icon icon={IconNames.FIGHTER_JET} />
            <H3 className='my-auto!'>Personal Software Engineering Projects</H3>
          </div>
          Below are my projects that are based in engineering, that I have taken in my free time or are from my schooling. Note that some of
          these projects wil have information omitted to avoid infringing ITAR
        </div>

        <Divider />
        <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
          {engr.map((parentSkill, parentSkillId) => (
            <Card key={`${parentSkill}-${parentSkillId}`} className={`rounded-md! shadow-lg! p-2!`} style={{ backgroundColor: bgColor }}>
              <Tooltip content={'See more'}>
                <Button icon={IconNames.SHARE} variant='minimal' onClick={() => window.open(parentSkill.calloutUrl, '_blank')} />
              </Tooltip>
              <div className='flex flex-col gap-2!'>
                {parentSkill.logo ? (
                  <img className='w-32! h-32! object-contain mx-auto!' src={parentSkill.logo} alt={`${parentSkill.title} Image`} />
                ) : null}
                <H2>{parentSkill.title}</H2>
                <H6>{parentSkill.description}</H6>
                {parentSkill.projectTags ? (
                  <div className='flex flex-wrap gap-1'>
                    {parentSkill.projectTags.map((projectTag) => (
                      <Tag key={projectTag}>{projectTag}</Tag>
                    ))}
                  </div>
                ) : null}
                <TooltipIconifyIcon skillsDictionary={parentSkill.languages} />
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  )
}
