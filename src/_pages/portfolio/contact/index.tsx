import { Card, H1, H3, Icon, Divider, Button, Intent, Section, SectionCard } from '@blueprintjs/core'
import { IconNames, IconSize } from '@blueprintjs/icons'
import ContactInfo from '../../../components/ContactInfo'

export default function ContactPage() {
  return (
    <div className='experience-page p-2 m-2 md:p-4 md:m-4'>
      <Card className='flex flex-col p-4! gap-y-2! h-[90vh]!'>
        <div className='flex flex-col gap-1 items-center w-1/2 mx-auto text-center'>
          <H1 className='flex flex-row items-center' style={{ fontFamily: 'impact' }}>
            Contact
          </H1>
          <div className='flex flex-row flex-wrap items-center gap-2'>
            <Icon icon={IconNames.ID_NUMBER} />
            <H3 className='my-auto!'>Personal Information</H3>
          </div>
          You can contact me at the places mentioned below. For fastest response, reach out to me via email.
          <ContactInfo />
          <Button
            className='rounded-md!'
            intent={Intent.PRIMARY}
            icon={IconNames.SHARE}
            text='More Projects (Github)'
            onClick={() => window.open('https://github.com/dancard32', '_blank')}
          />
        </div>
        <Divider />

        <Section
          className='p0! md:p-6!'
          title='Resume'
          icon={<Icon icon={IconNames.DOCUMENT_CODE} size={IconSize.LARGE} />}
          rightElement={
            <Button
              className='rounded-md!'
              intent={Intent.PRIMARY}
              icon={IconNames.SHARE}
              text='Full Screen'
              onClick={() => window.open('./pdfs/main.pdf', '_blank')}
            />
          }
        >
          <SectionCard className='p0! md:p-6! md:w-1/2 w-full mx-auto!'>
            <div className='h-[95vh]! w-full mx-auto! overflow-y-auto '>
              <embed className='w-full! h-full!' src='pdfs/main.pdf' type='application/pdf' />
            </div>
          </SectionCard>
        </Section>
      </Card>
    </div>
  )
}
