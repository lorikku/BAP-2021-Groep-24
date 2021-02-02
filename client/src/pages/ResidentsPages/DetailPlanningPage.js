import * as React from 'react';
import { useParams } from 'react-router-dom';

import DetailHeader from '../../containers/residents/detail/DetailHeader';
import DetailActivities from '../../containers/residents/detail/DetailActivities';
import DetailInteresting from '../../containers/residents/detail/DetailInteresting';

import SubNav from '../../containers/residents/SubNav';
import GoBack from '../../components/residents/detail/GoBack';
import paths from '../../consts/paths';

const DetailPlanningPage = ({ navItems }) => {
  const { residentId } = useParams();
  const [resident, setResident] = React.useState(undefined);

  //Fetch resident from database based off of residentId
  React.useEffect(() => {
    setResident(undefined);

    //Fetching residents from db
    const fetchResident = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/app/residents/${residentId}`
        );
        const result = await response.json();

        if (!response.ok) {
          setResident(null);
          return;
        }

        setResident(result.resident);
      } catch (err) {
        setResident(null);
        console.log(err);
      }
    };

    fetchResident();
  }, [residentId]);

  return (
    <>
      <h2 className="visually-hidden">
        Algemene informatie van bepaalde bewoner
      </h2>
      <GoBack path={paths.PATH_RESIDENTS.ROOT} text={'Terug naar overzicht'} />
      {resident ? (
        <div className="residents-detailresident fit-height">
          <DetailHeader resident={resident} />
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
