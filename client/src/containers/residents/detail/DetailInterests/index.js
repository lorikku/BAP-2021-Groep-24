import * as React from 'react';

import InterestsCategory from '../../../../components/interests/InterestsCategory';

import { getCategoriesFromInterests } from './categoriseInterests';

import './detailinterests.css';

const DetailInterests = ({ resident, interests }) => {
  const [categories, setCategories] = React.useState(undefined);

  React.useEffect(() => {
    //If no interests exists => return
    if (!interests) return;

    //Set it to null to tell UI that it is loading
    setCategories(null);
    const newCategories = getCategoriesFromInterests(interests);

    //If categories is empty => interests was an empty array
    if (newCategories === {}) {
      setCategories(undefined);
    } else {
      setCategories(newCategories);
    }
  }, [interests, setCategories]);

  return (
    <>
      <div className="detailresident-interests fit-height flex-content">
        {resident ? (
          <div className="detailresident-int-wrapper">
            <h3 className="detailresident-int-title">
              Interesses van {`${resident.name}`}
            </h3>
            <div className="detailresident-edit-int-btn">
              <p className="detailresident-edit-int-text">Wijzig interesses</p>
            </div>
          </div>
        ) : null}
        <ul className="detailresident-int-collection">
          {categories
            ? Object.keys(categories).map((key) => (
                <InterestsCategory key={key} category={categories[key]} />
              ))
            : categories === null
            ? 'Bewoners interesses ophalen...'
            : 'Geen interesses gevonden'}
        </ul>
      </div>
    </>
  );
};

export default DetailInterests;
