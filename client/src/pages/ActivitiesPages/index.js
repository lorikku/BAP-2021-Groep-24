import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NewActivityHeader from "../../components/activities/NewActivityHeader";
import NewActivityOne from "../../containers/activities/NewActivityOne";
import OverviewAllActivities from "../../containers/activities/OverviewAllActivities";
import OverviewHeader from "../../containers/activities/OverviewHeader";
import GoBack from "../../components/residents/detail/GoBack/index.js";
import DetailActivityHeader from "../../containers/activities/DetailActivityHeader";
import DetailActivityPresent from "../../containers/activities/DetailActivityPresent";
import DetailActivityInterested from "../../containers/activities/DetailActivityInterested";
import "./activitiespage.css";

const ActivitiesPages = ({ paths }) => {
  return (
    <Switch>
      <Route path={paths.ROOT + paths.OVERVIEW + paths.WEEK} exact>
        <OverviewHeader />
        <OverviewAllActivities />
      </Route>
      <Route path={paths.ROOT + paths.NEW_ACTIVITY} exact>
        <GoBack text={"terug naar agenda"} />
        <NewActivityHeader />
        <NewActivityOne />
      </Route>
      <Route path={paths.ROOT + paths.DETAIL} exact>
        <GoBack text={"terug naar agenda"} />
        <DetailActivityHeader />
        <div className="dtl-act-present-int-container">
          <DetailActivityPresent />
          <DetailActivityInterested />
        </div>
      </Route>
      <Route>
        <Redirect to={paths.ROOT + paths.OVERVIEW + "/" + Date.now()} />
      </Route>
    </Switch>
  );
};

export default ActivitiesPages;
