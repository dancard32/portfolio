import { Icon, Divider, Button, Intent, Section, SectionCard } from '@blueprintjs/core'
import { IconNames, IconSize } from '@blueprintjs/icons'
import ContactInfo from '../../../components/contact-info'
import MainContent from '../../../components/main-content'
import HeaderSection from '../../../components/header-section'

export default function ContactPage() {
  return (
    <MainContent className='contact-page'>
      <HeaderSection
        title='Contact'
        subTitle='Personal Information'
        icon={IconNames.ID_NUMBER}
        description='You can contact me at the places mentioned below. For fastest response, reach out to me via email.'
        button={
          <div className='flex flex-row items-center'>
            <ContactInfo />
            <Button
              className='rounded-md!'
              intent={Intent.PRIMARY}
              icon={IconNames.SHARE}
              text='More Projects (Github)'
              onClick={() => window.open('https://github.com/dancard32', '_blank')}
            />
          </div>
        }
      />

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
    </MainContent>
  )
}
