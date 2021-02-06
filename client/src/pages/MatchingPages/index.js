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
        <div className="results-list fit-height flex-content">
          <p className="results-title">12 resultaten</p>
          <img className="close-results" alt="kruisje" src="/assets/img/cross-white.svg"></img>
          <ul className="results-scrolllist">
            <MatchResult />
            <MatchResult />
            <MatchResult />
            <MatchResult />
            <MatchResult />
          </ul>
        </div>
      </Route>
      <Route>
        <Redirect to={paths.ROOT} />
      </Route>
    </Switch>
  );
};

export default MatchingPages;
