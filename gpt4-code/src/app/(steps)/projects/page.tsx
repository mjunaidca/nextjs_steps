"use client";

import React from "react";
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';
import Link from "next/link";
import useState from "react";

// Export a default function that returns a React component
export default function Projects() {
  // Use React hooks or state to manage data or effects
  const [projects, setProjects] = React.useState([
    {
      name: "Project A",
      description: "A full stack project using NextJS and MongoDB",
      url: "/projects/full-stack-projects/project-a",
    },
    {
      name: "Project B",
      description: "A full stack project using NextJS and Firebase",
      url: "/projects/full-stack-projects/project-b",
    },
    {
      name: "Project C",
      description: "A past experience working as a web developer at Company X",
      url: "/projects/past-experience/project-c",
    },
    {
      name: "Project D",
      description: "A past experience working as a web developer at Company Y",
      url: "/projects/past-experience/project-d",
    },
  ]);

  // Return the JSX code for rendering the UI
  return (
    // Use a <div> element as the root of the component
    <div>
      // Use the Header component to show the navigation bar
      {/* <Header /> */}
      {/* // Use an <h1> element to show the title of the page */}
      <h1>Projects</h1>
      {/* // Use an <ul> element to show a list of projects */}
      <ul>
        {/* // Use a map function to iterate over the projects array and render each project as a list item */}
        {projects.map((project) => (
          // Use a <li> element to show each project's name and description
          <li key={project.name}>
            {/* // Use a Link component to create a link to each project's URL */}
            <Link href={project.url}>
              {/* // Use an <a> element to show each project's name as a clickable link */}
              {project.name}
            </Link>
            {/* // Use a <p> element to show each project's description */}
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
      // Use the Footer component to show the footer of the page
      {/* <Footer /> */}
    </div>
  );
}
