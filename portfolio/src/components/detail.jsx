import React, { useContext } from "react";
import {Container} from "react-bootstrap";
import {DataContext} from "./data";

const Detail = () => {
  const [projects] = useContext(DataContext);
  // when the component mounts, check to see what the id of the url is
  let url = window.location.pathname.lastIndexOf("/");
  let id = window.location.pathname.substring(url + 1);
  console.log(id);
  // match url id with the array id
  // look up the data stored in that id and set as state
  // load data based off of state that has just been set
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
