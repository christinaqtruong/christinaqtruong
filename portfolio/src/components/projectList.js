import React, { useContext } from "react";
import Project from "./project";
import { DataContext } from "./data";
import { Link } from "react-scroll";
import "../styles/project.scss";
import Navigation from "./nav";

const ProjectList = () => {
  const [projects] = useContext(DataContext);

  return (
    <div>
      <Navigation />

      <div id="work">
        <div className="projects">
          {projects.map(project => (
            <Project
              name={project.title}
              image={project.icon}
              key={project.slug}
              tags={project.tags.join(", ")}
              slug={project.slug}
            />
          ))}
        </div>

        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          id="anchor"
        >
          Back to Top
        </Link>
      </div>
    </div>
  );
};

export default ProjectList;
