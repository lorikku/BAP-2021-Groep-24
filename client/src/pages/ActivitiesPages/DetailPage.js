import * as React from 'react';

import DetailActivityHeader from '../../containers/activities/DetailActivityHeader';
import DetailActivityPresent from '../../containers/activities/DetailActivityPresent';
import DetailActivityInterested from '../../containers/activities/DetailActivityInterested';

import GoBack from '../../components/global/GoBack';
import paths from '../../consts/paths';

const DetailPage = () => {
  return (
    <>
      <h2 className="visually-hidden">Activteitnaam</h2>
      <div className="activities-detail fit-height flex-content">
        <GoBack path={paths.PATH_ACTIVITIES.ROOT} text={'Terug naar agenda'} />
        <DetailActivityHeader />
        <div className="dtl-act-present-int-container">
          <DetailActivityPresent />
          <DetailActivityInterested />
        </div>
      </div>
    </>
  );
};

export default DetailPage;
