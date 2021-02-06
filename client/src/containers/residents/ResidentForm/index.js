import * as React from 'react';
import ToggleBtn from '../../../components/global/ToggleBtn';

import './residentform.css';

const ResidentForm = () => {
  return (
    <div className="residentform-container">
      <div className="residentform-left">
        <div className="residentform-pic-container">
          <p className="pic-title">Foto uploaden</p>
          <div className="pic-container">
            <img
              className="residentform-pic"
              alt="foto van bewoner"
              src="/assets/img/emptystate-profile.svg"
            ></img>
          </div>
          <div className="pic-btn">
            <p className="pic-btn-text">Kies foto</p>
          </div>
        </div>
        <p className="pic-notice">Dit kan later nog toegevoegd worden</p>
        {/* delete-btn enkel bij edit resident */}
        <div className="delete-wlp-btn">
          <p className="delete-wlp-btn-text">Verwijder bewoner</p>
        </div>
      </div>

      <div className="residentform-right">
        <div className="residentform-right--wrapper">
          <label className="residentform-title residentform-name">
            Naam bewoner
            <input
              className="residentform-input residentform-input--name"
              type="text"
            ></input>
          </label>
          <label className="residentform-title residentform-room">
            Kamernummer
            <input
              className="residentform-input residentform-input--room"
              type="text"
            ></input>
          </label>
  
          <div className="residentform-stay">
            <p className=" form-title">Verblijf</p>
            <ToggleBtn option1={'Vast verblijf'} option2={'Kort verblijf'} />
          </div>
        </div>
        <div className="create-wlp-btn">
          <p className="create-wlp-btn-text">Woon- en leefplan maken</p>
          <img
            className="create-wlp-arrow"
            alt="pijl naar rechts"
            src="/assets/img/arrow-right-white.svg"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ResidentForm;
