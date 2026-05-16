import { H1, Icon, H3 } from '@blueprintjs/core'
import type { BlueprintIcons_16Id } from '@blueprintjs/icons/lib/esm/generated/16px/blueprint-icons-16'
import type { ReactNode } from 'react'

interface HeaderSectionProps {
  title: string
  subTitle: string
  description?: string
  icon: BlueprintIcons_16Id
  button?: ReactNode
}

export default function HeaderSection({ title, subTitle, description, icon, button }: HeaderSectionProps) {
  return (
    <div className='flex flex-col gap-1 items-center w-full md:w-1/2 mx-auto text-center'>
      <H1 className='flex flex-row items-center' style={{ fontFamily: 'impact' }}>
        {title}
      </H1>
      <div className='flex flex-row flex-wrap items-center gap-2'>
        <Icon icon={icon} />
        <H3 className='my-auto!'>{subTitle}</H3>
      </div>
      {description}
      {button}
    </div>
  )
}
