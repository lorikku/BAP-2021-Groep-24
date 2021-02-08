import * as React from 'react';

import ResidentProfile from '../../../../components/residents/detail/ResidentProfile';
import ResidentSpotlight from '../../../../components/residents/detail/ResidentSpotlight';

import './detailheader.css';

const DetailHeader = ({ resident, showIcons, customImg }) => {
  return (
    <>
      <div className="detailresident-header">
        <ResidentProfile resident={resident} showIcons={showIcons} />
        {customImg === undefined ? (
          <ResidentSpotlight resident={resident} />
        ) : customImg === null ? null : (
          <img alt="Een afbeelding ter illustratie" src={customImg}></img>
        )}
      </div>
    </>
  );
};

export default DetailHeader;
