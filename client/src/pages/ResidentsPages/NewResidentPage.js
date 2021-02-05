import * as React from "react";

import ResidentsFilter from "../../containers/residents/ResidentsFilter";
import OverviewProfiles from "../../containers/residents/overview/OverviewProfiles";
import NewResidentCreated from "../../containers/residents/new-resident/NewResidentCreated";
import GoBack from "../../components/global/GoBack";
import BannerHeader from "../../components/global/BannerHeader";
import ResidentForm from "../../containers/residents/ResidentForm";

const NewResidentPage = () => {
  return (
    <>
      <h2 className="visually-hidden">Nieuwe bewoner aanmaken</h2>
      <div className="new-resident-container fit-height">
        <GoBack text={"Annuleren"} />
        <BannerHeader
          title={"Hallo!"}
          subtext={
            "Laten we samen een nieuwe bewoner in het platform toevoegen"
          }
          isNewResident
        />
        <ResidentForm />
      </div>
    </>
  );
};

export default NewResidentPage;
