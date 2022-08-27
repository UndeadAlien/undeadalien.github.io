import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Resume from "./components/Resume/Resume";

import "./App.css";
import "./components/Styles/responsive/responsive.scss";
import "./components/Styles/imports/imports.scss";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/resume" component={Resume} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
