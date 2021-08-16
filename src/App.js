import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import "./app.css";
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
