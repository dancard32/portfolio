import { Navbar } from 'flowbite-react';
import logo from '../assets/images/logo.png';

function Component() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="NavBar Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Collapse className='flex items-center text-2xl'>
        <Navbar.Link href="/home" active>Home</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Component;