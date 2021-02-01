import * as React from 'react';
import InterestsCategory from '../../../../../components/interests/InterestsCategory';
import './detailinterests.css';

const DetailInterests = ({ resident }) => {
  return (
    <>
      <div className="detailresident-interests">
        <div className="detailresident-int-wrapper">
          <h3 className="detailresident-int-title">Interesses van {resident.name}</h3>
          <div className="detailresident-edit-int-btn">
            <p className="detailresident-edit-int-text">Wijzig interesses</p>
          </div>
        </div>
        <div className="detailresident-int-collection">
          <InterestsCategory />
          <InterestsCategory />
          <InterestsCategory />
          <InterestsCategory />
        </div>
      </div>
    </>
  );
};

export default DetailInterests;
