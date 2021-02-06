import * as React from "react";
import DetailEditInterests from "../../containers/residents/detail/DetailEditInterests";
import DetailInterests from "../../containers/residents/detail/DetailInterests";
import ResidentForm from "../../containers/residents/ResidentForm";
import SubNav from "../../containers/residents/SubNav";

const DetailEditPage = ({ resident }) => {
  return (
    <>
      <h2 className="visually-hidden">Bewerken van interesses</h2>
      <div className="residents-editresident fit-height">
        <DetailEditInterests resident={resident} />
      </div>
    </>
  );
};

export default DetailEditPage;
