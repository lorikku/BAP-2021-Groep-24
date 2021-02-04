import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NextPrev from "../../components/wlp/NextPrev";
import Container1 from "../../containers/wlp/Container1";
import LandingContainer from "../../containers/wlp/LandingContainer";
import ProgressBar from "../../containers/wlp/ProgressBar";
import WlpContainerFour from "../../containers/wlp/WlpContainerFour";
import WlpContainerOne from "../../containers/wlp/WlpContainerOne";
import WlpContainerThree from "../../containers/wlp/WlpContainerThree";
import WlpContainerTwo from "../../containers/wlp/WlpContainerTwo";
import "./wlppage.css";

const WlpPages = ({ paths }) => {
  return (
    <section className="wlp-page">
      <Switch>
        <Route path={paths.ROOT} exact>
          <div className="wlp-bg fit-height">
            <div className="content-container">
              {/* header */}
              <ProgressBar />
              <WlpContainerFour section={"Levensverhaal"} />
              <NextPrev />
              {/*  */}
            </div>
          </div>
        </Route>
        <Route>
          <Redirect to={paths.ROOT} />
        </Route>
      </Switch>
    </section>
  );
};

export default WlpPages;
