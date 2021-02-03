import * as React from 'react';
import FloorInput from '../../../components/global/FloorInput';

import NameInput from '../../../components/global/NameInput';
import SortingInput from '../../../components/global/SortingInput';

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
    // componentMounted will be used to see if the component is mounted before using setResidents to prevent UI from updating when component is unmounted
    let componentMounted = true;
    if (componentMounted) setResidents(undefined);

    //Fetching residents from db
    const fetchResidents = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/app/residents?name=${name}&floor=${floor}&sorting=${sorting.value}`
        );
        const result = await response.json();

        if (!response.ok) {
          if (componentMounted) setResidents(null);
          return;
        }

        if (componentMounted) setResidents(result.residents);
      } catch (err) {
        if (componentMounted) setResidents(null);
        console.log(err);
      }
    };

    //This is to prevent that users spam requests from server (whenever the name field changes, for example) => 200 ms delays between input/filter changes
    const timeout = setTimeout(fetchResidents, 200);
    return () => {
      clearInterval(timeout);
      componentMounted = false;
    };
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
