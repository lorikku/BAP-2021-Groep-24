import * as React from 'react';

import DetailHeader from '../../containers/residents/detail/DetailHeader/DetailHeader';
import DetailContacts from '../../containers/residents/detail/DetailHeader/DetailContacts';
import DetailInterests from '../../containers/residents/detail/DetailHeader/DetailInterests';
import SubNav from '../../containers/residents/SubNav';

const DetailGeneralPage = ({ navItems }) => {
  const [residents, setResidents] = React.useState(undefined);
  return (
    <>
      <h2 className="visually-hidden">Mijn bewoners</h2>
      <div className="residents-detailresident fit-height flex-content">
        <DetailHeader />
        <SubNav navItems={navItems} />
        <div className="detailresident-general-grid">
          <DetailContacts />
          <DetailInterests name={{ first: 'Mathilda' }} />
        </div>
      </div>
    </>
  );
};

export default DetailGeneralPage;
