import * as React from 'react';
import FloorInput from '../../../components/residents/FloorInput';

import NameInput from '../../../components/residents/NameInput';
import SortingInput from '../../../components/residents/SortingInput';

import './residentsfilter.css';

const sortingOptions = [
  {
    value: 'new-old',
    label: 'Niew - Oud',
  },
  {
    value: 'old-new',
    label: 'Oud - Nieuw',
  },
];

const floorOptions = [123, 1, 2, 3];

const ResidentsFilter = ({ setResidents }) => {
  const [name, setName] = React.useState('');
  const [sorting, setSorting] = React.useState(sortingOptions[0]);
  const [floor, setFloor] = React.useState(floorOptions[0]);

  //Fetch runs automatically after input/filter change, with 200ms timeout so that the server doesn't get spammed
  React.useEffect(() => {
    setResidents(undefined);

    //Fetching residents from db
    const fetchResidents = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/app/residents?name=${name}&floor=${floor}&sorting=${sorting.value}`
        );
        const result = await response.json();

        if (!response.ok) {
          setResidents(null);
          return;
        }

        setResidents(result.residents);
      } catch (err) {
        setResidents(null);
        console.log(err);
      }
    };

    //This is to prevent that users spam requests from server (whenever the name field changes, for example) => 200 ms delays between input/filter changes
    const timeout = setTimeout(fetchResidents, 200);
    return () => clearInterval(timeout);
  }, [name, sorting, floor, setResidents]);

  return (
    <div className="residents__filterwrapper">
      <NameInput name={name} setName={setName} />
      <SortingInput
        options={sortingOptions}
        sorting={sorting}
        setSorting={setSorting}
      />
      <FloorInput options={floorOptions} floor={floor} setFloor={setFloor} />
    </div>
  );
};

export default ResidentsFilter;
