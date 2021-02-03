import * as React from 'react';

import './residentprofilepicture.css';

const ResidentProfilePicture = ({ src }) => {
  return src ? (
    <img
      className="res-profile-pic"
      alt="foto van bewoner"
      src={src}
    ></img>
  ) : (
    <img
      className="res-profile-pic"
      alt="foto van bewoner"
      src="/assets/img/emptystate-profile.svg"
    ></img>
  );
};

export default ResidentProfilePicture;
