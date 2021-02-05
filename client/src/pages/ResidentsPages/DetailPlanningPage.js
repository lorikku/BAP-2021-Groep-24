import * as React from 'react';
import { useParams } from 'react-router-dom';

import DetailActivities from '../../containers/residents/detail/DetailActivities';
import DetailInteresting from '../../containers/residents/detail/DetailInteresting';

import SubNav from '../../containers/residents/SubNav';

const DetailPlanningPage = ({ navItems, resident }) => {
  return (
    <>
      <h2 className="visually-hidden">
        Informatie over planning van een bewoner
      </h2>
      <div className="residents-detailresident fit-height">
        <SubNav navItems={navItems} />
        <div className="detailresident-personal-planning">
          <DetailActivities name={{ first: 'Mathilda' }} />
          <DetailInteresting name={{ first: 'Mathilda' }} />
        </div>
      </div>
    </>
  );
};

export default DetailPlanningPage;
