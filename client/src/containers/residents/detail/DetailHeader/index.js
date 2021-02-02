import * as React from 'react';

import ResidentProfile from '../../../../components/residents/detail/ResidentProfile';

import './detailheader.css';

const DetailHeader = ({ resident }) => {
  const {name, isPermanent, roomNr, photoUri} = resident;

  return (
    <>
      <div className="detailresident-header">
        <ResidentProfile
          name={name}
          status={isPermanent ? 'Vast verblijver' : 'Kort verblijver'}
          room={`Kamer ${roomNr}`}
          photoUri={photoUri}
        />
      </div>
    </>
  );
};

export default DetailHeader;
