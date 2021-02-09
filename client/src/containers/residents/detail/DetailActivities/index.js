import * as React from 'react';
import ToggleBtn from '../../../../components/global/ToggleBtn';
import ActivitySmall from '../../../../components/residents/detail/ActivitySmall';
import './detailactivities.css';

const DetailActivities = ({ name }) => {

  /* ------------- FILTER OPTION ------------- */
  //Filter for selecting 'future' or 'passed' activities
  const [filter, setFilter] = React.useState({
    option1: {
      text: 'Gepland',
      isActive: true,
    },
    option2: {
      text: 'Afgelopen',
      isActive: false,
    },
  });

  const setOption = (option) => {
    setFilter((prevState) => {
      const newFilter = Object.assign({}, prevState);

      //Reset actives
      newFilter.option1.isActive = false;
      newFilter.option2.isActive = false;

      //Set new active
      newFilter[option].isActive = true;

      return newFilter;
    });
  };

  return (
    <>
      <h2 className="visually-hidden">Activiteiten bewoner</h2>
      <div className="detailresident-activities">
        <p className="detailresident-activities-title">
          {name.first}'s Activiteiten
        </p>
        <ToggleBtn setOption={setOption} option1={filter.option1} option2={filter.option2} />

        <ul className="activities-list">
          <ActivitySmall
            name={"Wandeltocht: 't park van Kortrijk"}
            date={{ dateNr: '26', day: 'Do' }}
            location={'Centrum Stad Kortrijk'}
            hour={'14:00 - 15:15'}
          />
          <ActivitySmall
            name={"Wandeltocht: 't park van Kortrijk"}
            date={{ dateNr: '26', day: 'Do' }}
            location={'Centrum Stad Kortrijk'}
            hour={'14:00 - 15:15'}
          />
          <ActivitySmall
            name={"Wandeltocht: 't park van Kortrijk"}
            date={{ dateNr: '26', day: 'Do' }}
            location={'Centrum Stad Kortrijk'}
            hour={'14:00 - 15:15'}
          />
        </ul>
      </div>
    </>
  );
};

export default DetailActivities;
