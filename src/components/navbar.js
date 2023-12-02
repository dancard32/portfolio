import { Navbar } from 'flowbite-react';
import logo from '../assets/images/logo.png';
import { DarkThemeToggle, Flowbite, Button, Avatar} from 'flowbite-react';

function NavBar() {
  return (
    <Flowbite>
        <Navbar fluid className="bg-primary-50 dark:bg-primary-900">
            <Navbar.Brand href="https://flowbite-react.com">
                <img src={logo} className="mr-3 h-6 sm:h-9" alt="NavBar Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    DanCard()
                </span>
            </Navbar.Brand>
            <Navbar.Collapse className='flex items-center text-2xl'>
                <div className="flex flex-wrap gap-2">
                    <Button>
                        <Navbar.Link href="/home" active className="text-secondary-900 dark:text-primary-200">
                            Home
                        </Navbar.Link>
                    </Button>
                    <Button>
                        <Navbar.Link href="/about" className="text-secondary-900 dark:text-primary-200">
                            About
                        </Navbar.Link>
                    </Button>
                    <Button>
                        <DarkThemeToggle/>   
                    </Button>
                </div>
            </Navbar.Collapse>
        </Navbar>
    </Flowbite>
  );
}

export default NavBar;
