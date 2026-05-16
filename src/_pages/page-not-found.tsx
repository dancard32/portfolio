import { Card, H1, H3, Text, Icon, Button, Intent } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import { useNavigate } from 'react-router'
import MainContent from '../components/main-content'

export default function PageNotFound() {
  const navigate = useNavigate()

  return (
    <MainContent className='page-not-found'>
      <div className='flex justify-center h-full! w-full'>
        <Card className='h-full w-full md:h-1/2 md:w-1/2 flex flex-col justify-center items-center m-4! !p4'>
          <H1 className='text-center' style={{ fontFamily: 'impact' }}>
            <strong>Oops!</strong>
          </H1>
          <Icon icon={IconNames.EMOJI} size={64} />
          <H3>404 - Page not found</H3>

          <Text>We are sorry, but the page you requested was not found.</Text>

          <Button icon={IconNames.HOME} text='Go back' onClick={() => navigate(-1)} intent={Intent.PRIMARY} />
        </Card>
      </div>
    </MainContent>
  )
}
