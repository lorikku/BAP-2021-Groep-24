import * as React from "react";
import "./detailheader.css";
import GoBack from "../../../../../components/resident/resident/GoBack/index.js";
import ResidentProfile from "../../../../../components/resident/resident/ResidentProfile";

const DetailHeader = () => {
  return (
    <>
      <h2 className="visually-hidden">header bewoner</h2>
      <div className="detailresident-header">
        <GoBack text={"Terug naar overzicht"} />

        <ResidentProfile
          name={{ first: "Mathilda", last: "Dejonckheere" }}
          status={"Vast verblijf"}
          room={"Kamer 102"}
        />
      </div>
    </>
  );
};

export default DetailHeader;
