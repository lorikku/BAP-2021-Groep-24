import * as React from 'react';

import InterestsCategory from '../../../../components/interests/InterestsCategory';

import { getCategoriesFromInterests } from '../../../../global/interestsFuncs';

import './detailinterests.css';

const DetailInterests = ({
  resident,
  interests,
  //Edit profile props
  isEdit,
  //Matching page props
  isMatchingPage,
  selectedInterests,
  toggleInterest,
}) => {
  const [categories, setCategories] = React.useState(undefined);

  React.useEffect(() => {
    //If no interests exists => return
    if (!interests) return;

    //Set it to null to tell UI that it is loading
    setCategories(null);

    const newCategories = getCategoriesFromInterests(interests, isMatchingPage);

    //If categories is empty => interests was an empty array
    if (newCategories === {}) {
      setCategories(undefined);
    } else {
      setCategories(newCategories);
    }
  }, [interests, setCategories, isMatchingPage]);

  return (
    <>
    <h2 className="visually-hidden">Interesses van bewoner</h2>
      <div className="detailresident-interests fit-height flex-content">
        {resident ? (
          <div className="detailresident-int-wrapper">
            {isMatchingPage ? null : (
              <p className="detailresident-int-title">
                {isEdit ? 'Verwijder ' : ''}Interesses
                {isEdit ? '' : ` van ${resident.name}`}
              </p>
            )}
            {isMatchingPage ? null : (
              <div
                className={`detailresident-edit-int-btn${
                  isEdit ? ' edit-confirm-btn' : ''
                }`}
              >
                <p
                  className={`detailresident-edit-int-text${
                    isEdit ? ' edit-confirm-btn-text' : ''
                  }`}
                >
                  {isEdit ? 'Wijzigingen toepassen' : 'Wijzig interesses'}
                </p>
              </div>
            )}
          </div>
        ) : null}
        <ul className="detailresident-int-collection">
          {categories
            ? Object.keys(categories).map((key) => (
                <InterestsCategory
                  key={key}
                  category={categories[key]}
                  isEdit={isEdit}

                  isMatchingPage={isMatchingPage}
                  selectedInterests={selectedInterests }
                  toggleInterest={toggleInterest}
                />
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
