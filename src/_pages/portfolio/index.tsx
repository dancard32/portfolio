import { Card, H1, H3, Text, Icon, Button, Intent, H2, CompoundTag, Tag } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import { useNavigate } from 'react-router'
import ReactTypingEffect from 'react-typing-effect'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className='home-page flex flex-col p-4'>
      <Card className='p-4!'>
        <H1>Dan Card</H1>
        <br />
        <H3>
          Forward Deployed Software Engineer @
          <Tag onClick={() => window.open('https://www.palantir.com/', '_blank')} icon={IconNames.OFFICE}>
            <a href='https://www.palantir.com/' target='_blank' rel='noopener noreferrer'>
              Palantir Technologies
            </a>
          </Tag>
        </H3>
        <br />
        With a strong background in software engineering, technical leadership, and product innovation, I excel at turning complex
        challenges into scalable, high-impact solutions—always staying ahead by leveraging the latest technologies and best practices.
        <br />
        <CompoundTag endIcon={IconNames.GLOBE} icon={IconNames.MAP_MARKER} leftContent='Arlington' round={true}>
          Virginia
        </CompoundTag>
        CTO Software Engineer AI Contact Me View Resume + more
        {/* <H1
          className="flex flex-row items-center"
          style={{ fontFamily: "impact" }}
        >
          <strong>Hello</strong>
          <img
            alt="Wave"
            src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
            width="48px"
          />
        </H1>

        <H2>
          I'm Dan Card. Former rocket scientist, and current software engineer.
          Always curious.
        </H2>

        <ReactTypingEffect
          text={["Hello.", "World!"]}
          displayTextRenderer={(text) => {
            return <H2>{text}</H2>;
          }}
        />

        <Button
          text="Contact Me"
          variant="outlined"
          onClick={() => navigate("portfolio/contact")}
        /> */}
      </Card>
    </div>
  )
}
