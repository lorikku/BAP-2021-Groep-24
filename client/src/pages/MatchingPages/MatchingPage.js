import * as React from "react";

import BannerHeader from "../../components/global/BannerHeader";
import OverviewPage from "../ResidentsPages/OverviewPage";

import "./matchingpage.css";

const MatchingPage = () => {
  return (
    <>
      <div className="matching__banner">
        <BannerHeader
          title="Vind een match"
          subtext="Zoek of selecteer een bewoner"
          img={"/assets/img/illustrations/matching-header.svg"}
        />
      </div>

      <OverviewPage isMatchingPage />
    </>
  );
};

export default MatchingPage;
