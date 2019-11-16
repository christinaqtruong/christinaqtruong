import React, { useContext } from "react";
import {Container} from "react-bootstrap";
import {DataContext} from "./data";

const Detail = () => {
  const [projects] = useContext(DataContext);
  return (
    <Container style={{
      display: "flex",
      justifyContent: "center"
    }}>
        <h3>Project Title</h3>
        <p>Development Process</p>
        {projects[0].dev.map(dev => (
            <li style={{flex: "1"}}
            >{projects[0].dev}</li>
        ))}
    </Container>
  );
};

export default Detail;
