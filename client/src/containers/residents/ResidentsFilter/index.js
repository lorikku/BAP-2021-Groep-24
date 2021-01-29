import * as React from 'react';
import FloorInput from '../../../components/residents/FloorInput';

import NameInput from '../../../components/residents/NameInput';
import SelectInput from '../../../components/residents/SelectInput';

import './residentsfilter.css';

const OverviewFilter = () => {
  return (
    <div className="residents__filterwrapper">
      <NameInput />
      <SelectInput />
      <FloorInput />
    </div>
  );
};

export default OverviewFilter;
