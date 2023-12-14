import React from "react";

export default function ResumeLink({ repo, theme }) {
  return (
    <div>
      <a
        className="general-btn"
        target="_blank"
        rel="noopener noreferrer"
        href={require(`../../assets/pdfs/Dan_Card-Resume.pdf`)}
      >
        See my Resume
      </a>
    </div>
  );
}
