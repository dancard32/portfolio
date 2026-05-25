import { Tooltip } from '@blueprintjs/core'
import { useTheme } from '../hooks/context'
import IconifyIcon from './iconify-icon'

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
            <IconifyIcon icon={skillsDictionary[key]} style={{ fontSize: fontSizeStyling }} />
          ) : (
            <IconifyIcon
              icon={skillsDictionary[key].iconifyIcon}
              style={{
                fontSize: fontSizeStyling,
                ...skillsDictionary[key].style,
              }}
            />
          )}
        </Tooltip>
      ))}
    </div>
  )
}
