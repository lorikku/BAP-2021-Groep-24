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

  React.useEffect(() => {}, [name, sorting, floor]);

  React.useEffect(() => console.log('yes!'), []);

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
