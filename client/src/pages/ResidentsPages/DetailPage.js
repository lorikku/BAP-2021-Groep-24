import * as React from 'react';
import { useParams } from 'react-router-dom';
import GoBack from '../../components/global/GoBack';
import paths from '../../consts/paths';
import DetailHeader from '../../containers/residents/detail/DetailHeader';
import {useGlobalState} from '../../global/states';
import {fetchResidentById} from '../../services/ResidentsService';

const DetailPage = ({
  showIcons,
  customImg,
  // props.children will return all children the parent component (DetailPage) has
  children,
  navItems,
}) => {
  const { residentId } = useParams();

  //Fetching resident single from db
  const [resident, setResident] = useGlobalState('resident');

  React.useEffect(() => {
    let componentMounted = true;

    if (!residentId) {
      setResident(null);
      return;
    }

    if (componentMounted) setResident(undefined);

    const getResident = async () => {
      const fetchedResident = await fetchResidentById(residentId);
      if (componentMounted) setResident(fetchedResident);
    };

    getResident();

    return () => (componentMounted = false);
  }, [residentId, setResident]);

  return resident ? (
    <>
    {/* This is header */}
      <GoBack path={paths.PATH_RESIDENTS.ROOT} text={'Terug naar overzicht'} />
      <DetailHeader
        customImg={customImg}
        showIcons={showIcons}
        resident={resident}
        setResident={setResident}
      />
      {/* This is the actual detail page, depending on what was passed as child in parent component (./index.js) */}
      {React.cloneElement(children, {
        resident,
        navItems: navItems ? navItems : null,
      })}
    </>
  ) : resident === null ? (
    <p className="notification">
      Er werd geen bewoner gevonden met deze identificatiecode
    </p>
  ) : (
    <p className="notification">Bewoner ophalen...</p>
  );
};

export default DetailPage;
