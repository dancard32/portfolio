import { Spinner, Tooltip } from '@blueprintjs/core'
import { useTheme } from '../hooks/Context'
import IconifyIcon from './IconifyIcon'
import { Suspense } from 'react'

interface DictionaryToolTipProps {
  iconifyIcon: string
  style: any
}
interface TooltipIconifyIconProps {
  skillsDictionary: Record<string, string | DictionaryToolTipProps>
}

export function TooltipIconifyIcon({ skillsDictionary }: TooltipIconifyIconProps) {
  const { isMobile } = useTheme()

  const fontSizeStyling = `${isMobile ? '24px' : '32px'}`

  return (
    <div className='justify-center flex flex-row flex-wrap gap-2 mx-auto!'>
      {Object.keys(skillsDictionary).map((key) => (
        <Tooltip key={key} content={key} placement='bottom'>
          {typeof skillsDictionary[key] === 'string' ? (
            <Suspense fallback={<Spinner />}>
              <IconifyIcon fallback={<Spinner />} icon={skillsDictionary[key]} style={{ fontSize: fontSizeStyling }} />
            </Suspense>
          ) : (
            <Suspense fallback={<Spinner />}>
              <IconifyIcon
                fallback={<Spinner />}
                icon={skillsDictionary[key].iconifyIcon}
                style={{ fontSize: fontSizeStyling, ...skillsDictionary[key].style }}
              />
            </Suspense>
          )}
        </Tooltip>
      ))}
    </div>
  )
}
