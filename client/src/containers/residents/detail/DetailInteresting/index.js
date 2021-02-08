import * as React from "react";
import ActivityInteresting from "../../../../components/residents/detail/ActivityInteresting";
import "./detailinteresting.css";

const DetailInteresting = ({ name }) => {
  return (
    <>
      <h2 className="visually-hidden">Wellicht interessante activiteiten</h2>
      <div className="detailresident-interesting">
        <p className="detailresident-interesting-title">
          Wellicht interessant voor {name.first}
        </p>
        <ul className="interesting-list">
          {/* interesting-activity component */}
          <ActivityInteresting
            activity={{
              title: "Een uitstapje met de meiden langs het strand",
              hour: "14:00 - 16:00",
              location: "Centrum Kortrijk",
              day: "Maandag",
              dateNr: "15",
              month: "November",
            }}
          />
          <ActivityInteresting
            activity={{
              title: "Een uitstapje met de meiden langs het strand",
              hour: "14:00 - 16:00",
              location: "Centrum Kortrijk",
              day: "Maandag",
              dateNr: "15",
              month: "November",
            }}
          />
        </ul>
      </div>
    </>
  );
};

export default DetailInteresting;
