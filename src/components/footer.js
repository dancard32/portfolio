import { Footer } from "flowbite-react";
import ScrollToTop from "react-scroll-to-top";
import { Button } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import {Icon} from "../assets/icons/Icon";

function Component() {
  return (
    <Footer
      container
      class="bg-primary-50 dark:bg-primary-900 flex justify-center p-10"
    >
      <div className="w-full">
        <div>
          <ScrollToTop smooth class="content-center" component={<Icon nameIcon={"FaArrowCircleUp"} propsIcon={{ size: 50 }} />}/>
          <p class="text-2xl font-medium text-gray-900 dark:text-white">
            Made with ❤️ by Dan
          </p>
        </div>
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
            />
          </div>
          <div className="grid grid-cols-6 gap-8 sm:mt-4 sm:grid-cols-6 sm:gap-6">
            <Button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <Footer.Link
                href="/"
                active
                className="text-secondary-900 dark:text-primary-200 text-2xl list-none"
              >
                Home
              </Footer.Link>
            </Button>
            <Button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <Footer.Link
                href="/education"
                active
                className="text-secondary-900 dark:text-primary-200 text-2xl list-none"
              >
                Education
              </Footer.Link>
            </Button>
            <Button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <Footer.Link
                href="/experience"
                active
                className="text-secondary-900 dark:text-primary-200 text-2xl list-none"
              >
                Experience
              </Footer.Link>
            </Button>
            <Button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <Footer.Link
                href="/projects"
                active
                className="text-secondary-900 dark:text-primary-200 text-2xl list-none"
              >
                Projects
              </Footer.Link>
            </Button>
            <Button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <Footer.Link
                href="/blog"
                className="text-secondary-900 dark:text-primary-200 text-2xl list-none"
              >
                Blog
              </Footer.Link>
            </Button>
            <Button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <Footer.Link
                href="/contact"
                className="text-secondary-900 dark:text-primary-200 text-2xl list-none"
              >
                Contact
              </Footer.Link>
            </Button>
          </div>
        </div>

        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Component;
