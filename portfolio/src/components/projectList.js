import React, { useContext } from "react";
import Project from "./project";
import { Container } from "react-bootstrap";
import { DataContext } from "./data";
import { Link} from "react-scroll";
import "../styles/project.scss"

const ProjectList = () => {

  const [projects] = useContext(DataContext);

  return (
    <Container id="work">

      <div className="projects">
        {projects.map(project => (
          <Project
            name={project.title}
            image={project.icon}
            key={project.title}
            tags={project.tags.join(", ")}
            id={project.id}
          />
          // `/projects/${project.id}`
        ))}
      </div>

        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Back to Top
        </Link>

    </Container>
  );
};

export default ProjectList;
