import React from "react";
import { Fade } from "react-reveal";
import WorkingSkillCard from "../../components/Cards/WorkingSkillCard";

const certifications= {
    applied_ml_in_python =[
        color_code = "#8C151599",
        certifications = [
            {
                title: "Applied Machine Learning in Python",
                subtitle: "Python Data Science | University of Michigan, Coursera",
            },
            {
                title: "Introduction to Data Science in Python",
      subtitle: "Python Data Science | University of Michigan, Coursera",
            }
        ]
    ],
    {
      title: "Python Data Structures",
      subtitle: "Python for Everybody | University of Michigan, Coursera",
      logo_path: "p4e_dataStructures.webp",
      certificate_link: "Python Data Structures.pdf",
      alt_name: "University of Michigan | Coursera",
      color_code: "#47A048",
    },

    {
      title: "Programming for Everybody (Getting Started with Python)",
      subtitle: "Python for Everybody | University of Michigan, Coursera",
      logo_path: "p4e_gettingStarted.webp",
      certificate_link:
        "Programming for Everybody (Getting Started with Python).pdf",
      alt_name: "University of Michigan | Coursera",
      color_code: "#47A048",
    },
    {
      title: "Using Databases with Python",
      subtitle: "Python for Everybody | University of Michigan, Coursera",
      logo_path: "p4e_databases.webp",
      certificate_link: "Using Databases with Python.pdf",
      alt_name: "University of Michigan | Coursera",
      color_code: "#47A048",
    },
    {
      title: "Using Python to Access Web Data",
      subtitle: "Python for Everybody | University of Michigan, Coursera",
      logo_path: "p4e_webData.webp",
      certificate_link: "Using Python to Access Web Data.pdf",
      alt_name: "University of Michigan | Coursera",
      color_code: "#47A048",
    },

    {
      title: "Applied Text Mining in Python",
      subtitle: "Python Data Science | University of Michigan, Coursera",
      logo_path: "pds_textMining.webp",
      certificate_link: "Applied Text Mining in Python.pdf",
      alt_name: "University of Michigan | Coursera",
      color_code: "#8C151599",
    },
    {
      title: "Applied Social Network Analysis in Python",
      subtitle: "Python Data Science | University of Michigan, Coursera",
      logo_path: "pds_networkAnalysis.webp",
      certificate_link: "Applied Social Network Analysis in Python.pdf",
      alt_name: "University of Michigan | Coursera",
      color_code: "#8C151599",
    },
    {
      title: "Applied Plotting, Charting & Data Representation in Python",
      subtitle: "Python Data Science | University of Michigan, Coursera",
      logo_path: "pds_dataRep.webp",
      certificate_link:
        "Applied Plotting, Charting & Data Representation in Python.pdf",
      alt_name: "University of Michigan | Coursera",
      color_code: "#8C151599",
    },

    {
      title: "Web Application Technologies and Django",
      subtitle: "Django for Everybody | University of Michigan, Coursera",
      logo_path: "django_webTech.webp",
      certificate_link: "Web Application Technologies and Django.pdf",
      alt_name: "University of Michigan | Coursera",
      color_code: "#ffbfae",
    },
    {
      title: "Building Web Applications in Django",
      subtitle: "Django for Everybody | University of Michigan, Coursera",
      logo_path: "django_webApps.webp",
      certificate_link: "Building Web Applications in Django.pdf",
      alt_name: "University of Michigan | Coursera",
      color_code: "#ffbfae",
    }};

function Certifications() {
  return (
    <div className="bg-primary-50 dark:bg-primary-900 text-secondary-900 dark:text-primary-200">
      <div class="flex justify-center bg-primary-50 dark:bg-primary-900 text-secondary-900 dark:text-primary-200">
        <div className="grid grid-cols-3 w-3/4 m-5 bg-primary-50 dark:bg-primary-900 text-secondary-900 dark:text-primary-200">
          {certifications?.map((certification, index) => {
            return (
              <Fade bottom duration={6000}>
                <WorkingSkillCard
                  skill={certification}
                  theme={certification.supporting_software.color_code}
                />
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
