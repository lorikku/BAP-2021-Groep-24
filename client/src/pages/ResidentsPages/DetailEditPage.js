import * as React from "react";
import ResidentForm from "../../containers/residents/ResidentForm";

const DetailEditPage = ({ resident }) => {
  return (
    <>
      <h2 className="visually-hidden">Bewerken van een bewoner</h2>
      <div className="residents-editresident fit-height">
        <ResidentForm confirmText={"Wijzigingen toepassen"} isEdit />
      </div>
    </>
  );
};

export default DetailEditPage;
