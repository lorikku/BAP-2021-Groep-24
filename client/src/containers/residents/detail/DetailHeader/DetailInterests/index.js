import * as React from "react";
import InterestsCategory from "../../../../../components/interests/InterestsCategory";
import "./detailinterests.css";

const DetailInterests = ({ name }) => {
  return (
    <>
      <h2 className="visually-hidden">interesses bewoner</h2>
      <div className="detailresident-interests">
        <div className="detailresident-int-wrapper">
          <h3 className="detailresident-int-title">
            Interesses van {name.first}
          </h3>
          <div className="detailresident-edit-int-btn">
            <p className="detailresident-edit-int-text">Wijzig interesses</p>
          </div>
        </div>
        <div className="detailresident-int-collection">
          <InterestsCategory />
          <InterestsCategory />
          <InterestsCategory />
          <InterestsCategory />
        </div>
      </div>
    </>
  );
};

export default DetailInterests;
