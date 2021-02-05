import * as React from 'react';
import { useParams } from 'react-router-dom';
import GoBack from '../../components/global/GoBack';
import paths from '../../consts/paths';
import DetailHeader from '../../containers/residents/detail/DetailHeader';

const DetailPage = ({
  showIcons,
  customImg,
  resident,
  setResidentId,
  setResident,
  // props.children will return all children the parent component (DetailPage) has
  children,
}) => {
  const { residentId } = useParams();

  React.useEffect(() => {
    setResidentId(residentId);
  }, [setResidentId, residentId]);

  return resident ? (
    <>
      <GoBack path={paths.PATH_RESIDENTS.ROOT} text={'Terug naar overzicht'} />
      <DetailHeader
        customImg={customImg}
        showIcons={showIcons}
        resident={resident}
        setResident={setResident}
      />
      {children}
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
