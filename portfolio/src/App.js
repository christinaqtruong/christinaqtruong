import React from "react";
import Title from "./components/title";
import "./App.scss";
import ProjectList from "./projectList"

function App() {
  return (
    <div className="App">
      <Title/>
      <ProjectList/>
    </div>
  );
}

export default App;
