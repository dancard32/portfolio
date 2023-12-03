import { Navbar } from 'flowbite-react';
import logo from '../assets/images/logo.png';
import { DarkThemeToggle, Flowbite, Button, Avatar} from 'flowbite-react';

function NavBar() {
  return (
    <Flowbite>
        <Navbar fluid className="bg-primary-50 dark:bg-primary-900 flex justify-stretch p-10 items-end">
            <Navbar.Collapse className='flex items-start text-2xl justify-stretch'>
                    <Navbar.Brand href="https://flowbite-react.com" className='py-5 px-10 relative inline-flex  items-end'>
                        <img src={logo} className="mr-3 h-6 sm:h-9 self-center items-end" alt="NavBar Logo" />
                        <span className="self-center whitespace-nowrap items-end text-4xl font-semibold dark:text-white">
                            DanCard()
                        </span>
                    </Navbar.Brand>
                    <Button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <Navbar.Link href="/home" active className="text-secondary-900 dark:text-primary-200 text-2xl">
                            Home
                        </Navbar.Link>
                    </Button>
                    <Button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <Navbar.Link href="/education" active className="text-secondary-900 dark:text-primary-200  text-2xl">
                            Education
                        </Navbar.Link>
                    </Button>
                    <Button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <Navbar.Link href="/experience" active className="text-secondary-900 dark:text-primary-200  text-2xl">
                            Experience
                        </Navbar.Link>
                    </Button>
                    <Button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <Navbar.Link href="/projects" active className="text-secondary-900 dark:text-primary-200  text-2xl">
                            Projects
                        </Navbar.Link>
                    </Button>
                    <Button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <Navbar.Link href="/contact" className="text-secondary-900 dark:text-primary-200  text-2xl">
                            Contact
                        </Navbar.Link>
                    </Button>
                    <Button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <DarkThemeToggle/>
                    </Button>
            </Navbar.Collapse>
        </Navbar>
    </Flowbite>
  );
}

export default NavBar;
