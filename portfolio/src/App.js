import React from "react";
import "./App.scss";
import Resume from "./components/resume";
import Detail from "./components/detail";
import Homepage from "./components/homepage";
import { Data } from "./components/data";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/app.scss";

function App() {
  return (
    <Data>
      <div className="App">
        <Router>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/resume/christina_truong" component={Resume} />
          <Route exact path="/projects/:id" component={Detail} />
        </Router>
      </div>
    </Data>
  );
}

export default App;
