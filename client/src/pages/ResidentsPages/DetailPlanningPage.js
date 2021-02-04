import * as React from 'react';
import { useParams } from 'react-router-dom';

import DetailActivities from '../../containers/residents/detail/DetailActivities';
import DetailInteresting from '../../containers/residents/detail/DetailInteresting';

import SubNav from '../../containers/residents/SubNav';

const DetailPlanningPage = ({
  navItems,
  resident,
  setResidentId,
  setShowHeader,
}) => {
  const { residentId } = useParams();

  React.useEffect(() => {
    setShowHeader(true);
  }, [setShowHeader]);

  React.useEffect(() => {
    setResidentId(residentId);
  }, [setResidentId, residentId]);

  return (
    <>
      <h2 className="visually-hidden">
        Algemene informatie van bepaalde bewoner
      </h2>
      {resident ? (
        <div className="residents-detailresident fit-height">
          <SubNav navItems={navItems} />
          <div className="detailresident-personal-planning">
            <DetailActivities name={{ first: 'Mathilda' }} />
            <DetailInteresting name={{ first: 'Mathilda' }} />
          </div>
        </div>
      ) : resident === null ? (
        <p className="notification">
          Er werd geen bewoner gevonden met deze identificatiecode
        </p>
      ) : (
        <p className="notification">Bewoner ophalen...</p>
      )}
    </>
  );
};

export default DetailPlanningPage;
