import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NextPrev from "../../components/wlp/NextPrev";
import Container1 from "../../containers/wlp/Container1";
import LandingContainer from "../../containers/wlp/LandingContainer";
import ProgressBar from "../../containers/wlp/ProgressBar";
import WlpContainerEight from "../../containers/wlp/WlpContainerEight";
import WlpContainerActivity from "../../containers/wlp/WlpContainerActivity";
import WlpContainerEleven from "../../containers/wlp/WlpContainerEleven";
import WlpContainerFive from "../../containers/wlp/WlpContainerFive";
import WlpContainerFour from "../../containers/wlp/WlpContainerFour";
import WlpContainerNine from "../../containers/wlp/WlpContainerNine";
import WlpContainerOne from "../../containers/wlp/WlpContainerOne";
import WlpContainerSeven from "../../containers/wlp/WlpContainerSeven";
import WlpContainerThree from "../../containers/wlp/WlpContainerThree";
import WlpStepDivision from "../../containers/wlp/WlpStepDivision";
import WlpContainerTwo from "../../containers/wlp/WlpStepDivision";
import "./wlppage.css";

const WlpPages = ({ paths }) => {
  return (
    <section className="wlp-page">
      <Switch>
        <Route path={paths.ROOT} exact>
          <div className="wlp-bg fit-height">
            <div className="content-container">
              <ProgressBar />
              <WlpContainerActivity
                section={"Activiteiten & Participatie"}
                category={"Mentaal stimulerende activiteiten"}
              />
              <NextPrev />
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
