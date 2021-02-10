import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ResidentProfilePicture from '../../../../components/residents/detail/ResidentProfilePicture';
import paths from '../../../../consts/paths';
import './newresidentcreated.css';

const NewResidentCreated = ({ resident }) => {
  const { _id, name, roomNr, isPermanent, photoUri } = resident;

  //Generating WLP link
  const location = window.location;
  const wlpLink =
    location.origin +
    '/wlp/' +
    _id;

  const copyToClipbard = () => {
    navigator.clipboard.writeText(wlpLink);
  };

  return (
    <div className="newresident-header-wrapper flex-content fit-height">
      <div className="newresident-container">
        <div className="newresident-welkom-left">
          <p className="newresident-welkom-title">
            Welkom bij het Heilig Hart:
          </p>
          <div className="newresident-profile">
            <ResidentProfilePicture src={photoUri} />
            <p className="newresident-name">{name}</p>
            <p className="newresident-status">
              {isPermanent ? 'Vast verblijf' : 'Kort verblijf'}
            </p>
            <div className="newresident-room-div">
              <p className="newresident-room">Kamer {roomNr}</p>
            </div>
          </div>
        </div>
        <div className="newresident-welkom-right">
          <p className="newresident-link-instruction">
            Kopieer de link en bezorg deze aan de toekomstige bewoner.
          </p>

          <div>
            <p className="newresident-link-title">Woon- en leef link:</p>
            <div className="newresident-link-wrapper">
              <p className="newresident-link">{wlpLink}</p>
              <div onClick={copyToClipbard} className="clipboard-btn">
                <img
                  className="clipboard-vector"
                  alt="clipboard icoon"
                  src="/assets/img/clipboard-misc.svg"
                ></img>
              </div>
            </div>
          </div>
          <Link to={paths.PATH_RESIDENTS.ROOT} className="back-home-btn">
            <p className="back-home-btn-text">Terug naar overzicht</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewResidentCreated;
