import * as React from 'react';

import NameInput from '../../../components/residents/NameInput';
import SelectInput from '../../../components/residents/SelectInput';

import './residentsfilter.css';

const OverviewFilter = () => {
  return (
    <div className="residents__filterwrapper">
      <NameInput/>
      <SelectInput />
      <div className="residents__filter"></div>
    </div>
  );
};

export default OverviewFilter;
