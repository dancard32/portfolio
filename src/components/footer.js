import { Footer } from 'flowbite-react';
import ScrollToTop from 'react-scroll-to-top';
import { Button } from 'flowbite-react';

function Component() {
  return (
    <Footer container>
      <div className="w-full text-center bg-primary-50 dark:bg-primary-900 text-secondary-900 dark:text-primary-200">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="Flowbite"
          />
          <Footer.LinkGroup>
            <Footer.Link href="/home">
              <Button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                Home
              </Button>
            </Footer.Link>
            <Footer.Link href="/contact">
              <Button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                Contact
              </Button>
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <p>
          Made with ❤️ by Dan
        </p>
        <ScrollToTop smooth class="content-center"/>
        <Footer.Copyright href="CopyRight" by=" Dan Card™" year={2022} />
      </div>
    </Footer>
  );
}

export default Component;