import React from "react";
import Title from "./components/title";
import "./App.scss";
import ProjectList from "./components/projectList";
import Detail from "./components/detail";
import { Data } from "./components/data";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Data>
      <div className="App">
        <Title />
        <Router>
          <Route path="/projects" component={ProjectList} />
          <Route path="/project" component={Detail}/>
        </Router>
      </div>
    </Data>
  );
}

export default App;
