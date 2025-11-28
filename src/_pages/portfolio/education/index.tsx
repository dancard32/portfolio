import { Card, H1, H3, Text, Icon, Button, Intent } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import { useNavigate } from 'react-router'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <Card className='page-not-found flex justify-center h-full! w-full'>
      <Card className='h-1/2 w-1/2 flex flex-col justify-center items-center m-4! !p4'>
        <H1 className='text-center' style={{ fontFamily: 'impact' }}>
          <strong>Oops!</strong>
        </H1>
        <Icon icon={IconNames.EMOJI} size={64} />
        <H3>Education</H3>

        <Text>We are sorry, but the page you requested was not found.</Text>

        <Button icon={IconNames.HOME} text='Navigate to homepage' onClick={() => navigate('portfolio/home')} intent={Intent.PRIMARY} />
      </Card>
    </Card>
  )
}
