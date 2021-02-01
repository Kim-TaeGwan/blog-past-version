import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import StudyTable from "./pages/studytable";

const Routes = () => {
  return (
    <BrowserRouter basename="/">
      {/* github pages에서 spa지원을위해 <BrowserRouter basename="/"> 사용 */}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/studyTable" component={StudyTable} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
