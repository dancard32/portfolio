import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

function Contact() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <section>
      <h1 className="text-3xl font-bold underline dark:text-secondary-500">
        This is the about page!
      </h1>
      <p className='text-blue-500 text-3xl font-bold underline'>
        testing
      </p>

    </section>
  );
}

export default Contact;
