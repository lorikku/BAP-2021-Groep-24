import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MatchingProfileHeader from "../../containers/matching/MatchingProfileHeader";
import MatchResult from "../../containers/matching/MatchResult";

const MatchingPages = ({ paths }) => {
  return (
    <Switch>
      <Route path={paths.ROOT} exact>
        <MatchingProfileHeader />
        <MatchResult name={{ first: "Jos", last: "Van Poelkapelle" }} />
      </Route>
      <Route>
        <Redirect to={paths.ROOT} />
      </Route>
    </Switch>
  );
};

export default MatchingPages;
