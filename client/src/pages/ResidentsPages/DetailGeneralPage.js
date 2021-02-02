import * as React from 'react';
import { useParams } from 'react-router-dom';

import DetailContacts from '../../containers/residents/detail/DetailContacts';
import DetailInterests from '../../containers/residents/detail/DetailInterests';

import SubNav from '../../containers/residents/SubNav';

const DetailGeneralPage = ({ navItems, resident, setResidentId }) => {
  const { residentId } = useParams();

  React.useEffect(() => {
    setResidentId(residentId);
  }, [setResidentId, residentId]);

  return (
    <>
      <h2 className="visually-hidden">Algemene informatie van bepaalde bewoner</h2>
      {resident ? (
        <div className="residents-detailresident fit-height">
          <SubNav navItems={navItems} />
          <div className="detailresident-general fit-height">
            <DetailContacts contacts={resident.contacts}/>
            <DetailInterests name={resident.name} interests={resident.interests} />
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

export default DetailGeneralPage;
