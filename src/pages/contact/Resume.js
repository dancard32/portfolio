import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import ResumeSVG from "../../assets/svg/ResumeSVG";
import "react-pdf/dist/esm/Page/TextLayer.css";

// This is required for pdf to load, see https://github.com/wojtekmaj/react-pdf/issues/321 for details
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const pdfURL = require(`../../assets/pdfs/Dan_Card-Resume.pdf`);

  return (
    <div className="bg-primary-50 dark:bg-primary-900 text-secondary-900 dark:text-primary-200 items-center">
      <div class="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <ResumeSVG />
        </div>
        <div class="place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            My Resume
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Feel free to view my Resume down below!
          </p>
        </div>
      </div>
      <div class="flex justify-center">
        <Document file={pdfURL}>
          <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false}/>
        </Document>
      </div>
    </div>
  );
};
export default Resume;
