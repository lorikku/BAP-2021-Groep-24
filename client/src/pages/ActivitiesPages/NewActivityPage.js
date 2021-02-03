import * as React from 'react';

import NewActivityHeader from '../../components/activities/NewActivityHeader';
import GoBack from '../../components/global/GoBack';
import paths from '../../consts/paths';
import NewActivityOne from '../../containers/activities/NewActivityOne';

const NewActivityPage = () => {
  return (
    <>
      <h2 className="visually-hidden">Nieuwe activiteit</h2>
      <div className="activities-new fit-height flex-content">
        <GoBack path={paths.PATH_ACTIVITIES.ROOT} text={'Terug naar agenda'} />
        <NewActivityHeader />
        <NewActivityOne />
      </div>
    </>
  );
};

export default NewActivityPage;
