import { Tooltip } from "@blueprintjs/core"
import { useTheme } from "../hooks/Context"
import IconifyIcon from "./IconifyIcon"

interface DictionaryToolTipProps {
  iconifyIcon: string
  style: any
}
interface TooltipIconifyIconProps {
  skillsDictionary: Record<string, string | DictionaryToolTipProps>
}

export function TooltipIconifyIcon({ skillsDictionary }: TooltipIconifyIconProps) {
  const { isMobile } = useTheme()

  const fontSizeStyling = `${isMobile ? '24px' : '48px'}`

  return (
    <div className='justify-center flex flex-row flex-wrap gap-2'>
      {Object.keys(skillsDictionary).map((key) => (
        <Tooltip content={key} placement='bottom'>
          {typeof skillsDictionary[key] === 'string' ? (
            <IconifyIcon icon={skillsDictionary[key]} style={{ fontSize: fontSizeStyling }} />
          ) : (
            <IconifyIcon icon={skillsDictionary[key].iconifyIcon} style={{ fontSize: fontSizeStyling, ...skillsDictionary[key].style }} />
          )}
        </Tooltip>
      ))}
    </div>
  )
}