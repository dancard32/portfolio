import { Card, H1, H3, Text, Icon, Button, Intent, H2, CompoundTag, Tag, Callout, UL, H4 } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import { useNavigate } from 'react-router'
import ReactTypingEffect from 'react-typing-effect'
import IconifyIcon from '../../components/IconifyIcon'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className='home-page flex flex-col p-4'>
      <Card className='p-4!'>
        <H1 className='flex flex-row items-center' style={{ fontFamily: 'impact' }}>
          <strong>Hello</strong>
          <img alt='Wave' src='https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif' width='48px' />
        </H1>
        <H1>Dan Card</H1>
        <br />
        <H4>Aspiring Senior Software Engineer. Former rocket scientist.</H4>
        <H3>
          Forward Deployed Software Engineer @
          <Tag onClick={() => window.open('https://www.palantir.com/', '_blank')} icon={IconNames.OFFICE}>
            <a href='https://www.palantir.com/' target='_blank' rel='noopener noreferrer'>
              Palantir Technologies
            </a>
          </Tag>
        </H3>
        <Button text='Contact Me' variant='outlined' onClick={() => navigate('portfolio/contact')} />
        <br />
        With a strong background in software engineering, technical leadership, and product innovation, I excel at turning complex
        challenges into scalable, high-impact solutions—always staying ahead by leveraging the latest technologies and best practices.
        <br />
        <CompoundTag endIcon={IconNames.GLOBE} icon={IconNames.MAP_MARKER} leftContent='Arlington' round={true}>
          Virginia
        </CompoundTag>
        CTO Software Engineer AI Contact Me View Resume + more
        <H2>Here's what I do</H2>
        <div className='flex flex-col gap-2'>
          <Callout icon='clean' title='Software Engineer'>
            <UL>
              <li>✈️ Currently employed as a software engineer at Boeing</li>
              <li>🧑‍🎓 Enrolled at Georgia Tech Masters in Computer Science</li>
              <li>👨‍🏫 Graduate Teaching Assistant in Academic Integrity</li>
              <li>💻 Developing and maintaining a homelab personal server</li>
              <li>📈 In process of developing a high-frequency trading agent</li>
            </UL>
          </Callout>
          <Callout icon='clean' title='My Favorite Tech'>
            <UL>
              <li>👨🏽‍💻 Striving to master Docker and Kubernetes</li>
              <li>🛠 Working to self-host apps/services on my homelab</li>
              <li>🎮 End of year goal to develop a small indie game with LibDX</li>
              <li>🛸 Implement an AI service for personal project</li>
            </UL>
          </Callout>
          <Callout icon='clean' title='Technical Background'>
            <UL>
              <li>🚀 Former lead tooling maintenance on a multi-billion dollar DoD contract</li>
              <li>🛰 Designed and researched high-power ion thrusters</li>
              <li>💻 Developed custom laboratory equipment</li>
              <li>🖨 Avid 3D printer/tinkerer of personal projects</li>
            </UL>
          </Callout>
          <Callout icon='clean' title='Always looking to learn!'>
            <UL>
              <li>👨🏽‍💻 Always trying to improve! Above are languages/software I plan to learn</li>
              <li>🧑‍🎓 Expected Georgia Tech graduation in Fall 2025</li>
              <li>📧 Feel free to reach out to me with any technical questions or recommendations!</li>
            </UL>
          </Callout>
        </div>
        <IconifyIcon icon="vscode-icons:file-type-python" />
        <ReactTypingEffect
          text={['Hello.', 'World!']}
          displayTextRenderer={(text) => {
            return <H2>{text}</H2>
          }}
        />
      </Card>
    </div>
  )
}
