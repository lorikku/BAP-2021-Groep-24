import * as React from 'react';

import ResidentProfile from '../../../../components/residents/detail/ResidentProfile';

import './detailheader.css';

const DetailHeader = ({ resident }) => {
  const { name, isPermanent, roomNr, photoUri } = {
    name: 'JOS',
    isPermanent: true,
    roomNr: 202,
    photoUri:
      'https://i.pinimg.com/564x/c3/b5/c5/c3b5c5920634a9267ca6244b980f801f.jpg',
  };

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
