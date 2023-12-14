import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Blogs from "./Blogs";
import ContactSVG from "../../assets/svg/ContactSVG";
import { Fade } from "react-reveal";
import Resume from "./Resume";

function Contact() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <section>
      <Resume />
      <Blogs />
    </section>
  );
}

export default Contact;
