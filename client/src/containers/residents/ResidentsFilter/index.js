import * as React from 'react';

import FloorInput from '../../../components/global/FloorInput';
import NameInput from '../../../components/global/NameInput';
import SortingInput from '../../../components/global/SortingInput';

import { fetchResidents } from '../../../services/ResidentsService';
import { fetchMyResidents } from '../../../services/MyResidentsService';

import {
  floorOptions,
  sortingOptionsMyResidents,
  sortingOptions,
} from './filterOptions';

import './residentsfilter.css';

const ResidentsFilter = ({ setResidents, isMyResidentsPage }) => {
  const [name, setName] = React.useState('');
  const [floor, setFloor] = React.useState(floorOptions[0]);
  const [sorting, setSorting] = React.useState(
    isMyResidentsPage ? sortingOptionsMyResidents[0] : sortingOptions[0]
  );

  //Fetch runs automatically after input/filter change, with 200ms timeout so that the server doesn't get spammed
  React.useEffect(() => {
    // componentMounted will be used to see if the component is mounted before using setResidents to prevent UI from updating when component is unmounted
    let componentMounted = true;
    if (componentMounted) setResidents(undefined);

    const filterResidents = async () => {
      let residents;
      if (isMyResidentsPage) {
        residents = await fetchMyResidents(name, floor, sorting);
      } else {
        residents = await fetchResidents(name, floor, sorting);
      }
      if (componentMounted) setResidents(residents);
    };

    //This is to prevent that users spam requests from server (whenever the name field changes, for example) => 200 ms delays between input/filter changes
    const timeout = setTimeout(filterResidents, 200);
    return () => {
      clearInterval(timeout);
      componentMounted = false;
    };
  }, [name, sorting, floor, setResidents, isMyResidentsPage]);

  return (
    <div className="residents__filterwrapper">
      <NameInput name={name} setName={setName} />
      <SortingInput
        options={isMyResidentsPage ? sortingOptionsMyResidents : sortingOptions}
        defaultValue={sorting}
        setSorting={setSorting}
      />
      <FloorInput options={floorOptions} floor={floor} setFloor={setFloor} />
    </div>
  );
};

export default ResidentsFilter;
