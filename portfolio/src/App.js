import React from "react";
import Resume from "./components/resume";
import Detail from "./components/detail";
import Homepage from "./components/homepage";
import NotFound from "./components/NotFound";
import { Data } from "./components/data";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/app.scss";

function App() {
  return (
    <Data>
      <div className="App">
        <Router>
          <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/resume/christina_truong" component={Resume} />
          <Route exact path="/projects/:id" component={Detail} />
          <Route component={NotFound}/>
          </Switch>
        </Router>
      </div>
    </Data>
  );
}

export default App;
