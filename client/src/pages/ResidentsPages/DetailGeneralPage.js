import * as React from 'react';

import DetailContacts from '../../containers/residents/detail/DetailContacts';
import DetailInterests from '../../containers/residents/detail/DetailInterests';

import SubNav from '../../containers/residents/SubNav';

const DetailGeneralPage = ({ navItems, resident }) => {
  return (
    <>
      <h2 className="visually-hidden">
        Algemene informatie van bepaalde bewoner
      </h2>
      <div className="residents-detailresident fit-height">
        <SubNav navItems={navItems} />
        <div className="detailresident-general fit-height">
          <DetailContacts resident={resident} />
          <DetailInterests resident={resident} interests={resident.interests} />
        </div>
      </div>
    </>
  );
};

export default DetailGeneralPage;
