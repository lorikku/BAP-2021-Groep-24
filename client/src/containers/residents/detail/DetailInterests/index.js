import * as React from 'react';
import InterestsCategory from '../../../../components/interests/InterestsCategory';
import './detailinterests.css';

const DetailInterests = ({ name, interests }) => {
  const [categories, setCategories] = React.useState(undefined);

  React.useEffect(() => {
    if (!interests) return;

    setCategories(null);
    const newCategories = {};

    interests.forEach((interest) => {
      if (!newCategories[interest.category._id]) {
        newCategories[interest.category._id] = {
          name: interest.category.name,
          interests: [],
        };
      }
      newCategories[interest.category._id].interests.push(interest);
    });

    if (newCategories === {}) {
      setCategories(undefined);
    } else {
      setCategories(newCategories);
    }
  }, [interests, setCategories]);

  return (
    <>
      <div className="detailresident-interests fit-height flex-content">
        <div className="detailresident-int-wrapper">
          <h3 className="detailresident-int-title">
            Interesses van {`${name}`}
          </h3>
          <div className="detailresident-edit-int-btn">
            <p className="detailresident-edit-int-text">Wijzig interesses</p>
          </div>
        </div>
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
