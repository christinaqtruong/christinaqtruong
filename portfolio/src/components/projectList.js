import React, { useContext } from "react";
import Project from "./project";
import { Container} from "react-bootstrap";
import {DataContext} from "./data";

const ProjectList = () => {
  const [projects] = useContext(DataContext);
  return (
    <Container style={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center"
    }}>
        {projects.map(project => (
            <Project style={{flex: "1"}} 
              name={project.title}
              image={project.icon}
              key={project.title}
              tags={project.tags.join(", ")}
            />
        ))}
    </Container>
  );
};

export default ProjectList;
