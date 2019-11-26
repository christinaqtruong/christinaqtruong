import React, { useContext } from "react";
import Project from "./project";
import { Container } from "react-bootstrap";
import { DataContext } from "./data";
import { Link} from "react-scroll";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "92vh",
  position: "relative"
};

const scrollBar = {
  display: "flex",
  justifyContent: "center",
  height: "5%"
};

const projectsStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "100%"
};

const ProjectList = () => {

  const [projects] = useContext(DataContext);

  return (
    <Container style={containerStyle} id="work">

      <div className="projects" style={projectsStyle} >
        {projects.map(project => (
          <Project
            style={{ flex: "1",}}
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
          style={scrollBar}
        >
          Back to Top
        </Link>

    </Container>
  );
};

export default ProjectList;
