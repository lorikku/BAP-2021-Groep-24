import * as React from 'react';

import ResidentProfile from '../../../../components/residents/detail/ResidentProfile';
import ResidentSpotlight from '../../../../components/residents/detail/ResidentSpotlight';

import './detailheader.css';

const DetailHeader = ({ resident }) => {
  return (
    <>
      <div className="detailresident-header">
        <ResidentProfile
          resident={resident}
          showIcons
        />
        <ResidentSpotlight resident={resident} />
      </div>
    </>
  );
};

export default DetailHeader;
