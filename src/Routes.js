import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import StudyTable from "./pages/studytable";

const Routes = () => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/studyTable" component={StudyTable} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
