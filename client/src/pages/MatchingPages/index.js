import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MatchingProfileHeader from "../../containers/matching/MatchingProfileHeader";
import MatchResult from "../../containers/matching/MatchResult";
import "./matchingpage.css";

const MatchingPages = ({ paths }) => {
  return (
    <Switch>
      <Route path={paths.ROOT} exact>
        <MatchingProfileHeader />
        <div className="results-list">
          <p className="results-title">12 resultaten</p>
          <img className="close-results" alt="kruisje" src="/assets/img/cross-white.svg"></img>
          <MatchResult />
          <MatchResult />
          <MatchResult />
        </div>
      </Route>
      <Route>
        <Redirect to={paths.ROOT} />
      </Route>
    </Switch>
  );
};

export default MatchingPages;
