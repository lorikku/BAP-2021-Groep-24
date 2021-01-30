import * as React from 'react';
import { Link } from 'react-router-dom';

import './overviewprofile.css';

const OverviewProfile = ({ resident }) => {
  const { _id, name, roomNr, photoUri, isPermanent, isNew } = resident;
  const [activeHeart, setHeart] = React.useState(false);

  const toggleHeart = () => setHeart((prevHeart) => !prevHeart);

  return (
    <li className={`residents-overview__overviewprofile`}>
      <div className="residents-myresidents__overviewprofile__container">
        <Link className="residents-myresidents__overviewprofile__link" to={_id}>
          <div className="residents-myresidents__overviewprofile__wrapper">
            {isNew ? (
              <p className="residents-myresidents__overviewprofile__nieuw">
                Nieuw
              </p>
            ) : null}
            <img
              alt={`Foto van ${name}.`}
              className="residents-myresidents__overviewprofile__img"
              src={photoUri}
            />
            <div className="residents-myresidents__overviewprofile__wrapper residents-myresidents__overviewprofile__wrapper--name">
              <p className="residents-myresidents__overviewprofile__name">
                {name}
              </p>
              <p className="residents-myresidents__overviewprofile__ispermanent">
                {isPermanent ? 'Vast verblijver' : 'Kort verblijver'}
              </p>
            </div>
          </div>
          <div className="residents-myresidents__overviewprofile__wrapper residents-myresidents__overviewprofile__wrapper--room">
            <p className="residents-myresidents__overviewprofile__roomtext">
              kamer
            </p>
            <p className="residents-myresidents__overviewprofile__roomnr">
              {roomNr}
            </p>
          </div>
        </Link>
        <img
          alt="Hartje om bewoner toe te voegen aan Mijn Bewoners."
          onClick={toggleHeart}
          className={`residents-myresidents__overviewprofile__heart${
            activeHeart
              ? ' residents-myresidents__overviewprofile__heart--active'
              : ''
          }`}
          src="/assets/img/heart-empty.svg"
        />
      </div>
    </li>
  );
};

export default OverviewProfile;
