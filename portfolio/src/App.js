import React from "react";
import About from "./components/about";
import "./App.scss";
import Navigation from "./components/nav";
import ProjectList from "./components/projectList";
// import Detail from "./components/detail";
import { Data } from "./components/data";
// import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Data>
      <div className="App">
        <Navigation />
        <About/>
        <ProjectList/>
        {/* <Router>
          <Route path="/about" component={About} />
          <Route path="/projects" component={ProjectList} />
          <Route path="#" component={Detail} />
        </Router> */}
      </div>
    </Data>
  );
}

export default App;
