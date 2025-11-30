import { ButtonGroup, Button } from "@blueprintjs/core";
import { TooltipIconifyIcon } from "./TooltipIconifyIcon";

export default function ContactInfo() {

  return (
    <ButtonGroup>
      <Button
        icon={
          <TooltipIconifyIcon skillsDictionary={{ 'My Github': { iconifyIcon: 'simple-icons:github', style: { fontSize: '24px' } } }} />
        }
        onClick={() => window.open('https://github.com/dancard32', '_blank')}
        variant='minimal'
      />
      <Button
        icon={<TooltipIconifyIcon skillsDictionary={{ LinkedIn: { iconifyIcon: 'logos:linkedin-icon', style: { fontSize: '24px' } } }} />}
        onClick={() => window.open('https://www.linkedin.com/in/dan-card/', '_blank')}
        variant='minimal'
      />
      <Button
        icon={<TooltipIconifyIcon skillsDictionary={{ Email: { iconifyIcon: 'logos:google-gmail', style: { fontSize: '24px' } } }} />}
        onClick={() => window.open('mailto:dcard@umich.edu', '_blank')}
        variant='minimal'
      />
    </ButtonGroup>
  )
}
