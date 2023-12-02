import { Footer } from 'flowbite-react';

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
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
        <p>
        Made with ❤️ by Dan
        </p>
      </div>
    </Footer>
  );
}

export default Component;