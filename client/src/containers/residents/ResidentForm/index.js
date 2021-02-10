import * as React from 'react';
import ToggleBtn from '../../../components/global/ToggleBtn';

import './residentform.css';

const ResidentForm = ({
  isEdit,
  confirmText,
  inputs,
  changeInput,
  filter,
  setOption,
  submitResident,
  step,
  steps,
}) => {
  //Extracting possible inputs from 'inputs' state
  const { name, roomNr, photoUri } = inputs;

  const [isInputValid, setIsInputValid] = React.useState(false);

  //Checks input validity
  React.useEffect(() => {
    const componentMounted = true;
    if (!inputs) return;

    if (!inputs.name || !inputs.roomNr || inputs.roomNr.split('').length < 3) {
      if (componentMounted) setIsInputValid(false);
    } else {
      if (componentMounted) setIsInputValid(true);
    }
  }, [inputs, setIsInputValid]);

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
        {isEdit ? (
          ''
        ) : (
          <p className="pic-notice">Dit kan later nog toegevoegd worden</p>
        )}

        {isEdit ? (
          <div className="delete-wlp-btn">
            <p className="delete-wlp-btn-text">Verwijder bewoner</p>
          </div>
        ) : (
          ''
        )}

        {}
      </div>

      <div className="residentform-right">
        <div className="residentform-right--wrapper">
          <label className="residentform-title residentform-name">
            Naam bewoner
            <input
              value={name}
              onChange={(e) => changeInput('name', e.currentTarget.value)}
              className="residentform-input residentform-input--name"
              type="text"
              placeholder="Gerda Willems"
            ></input>
          </label>
          <label className="residentform-title residentform-room">
            Kamernummer
            <input
              value={roomNr}
              onChange={(e) => changeInput('roomNr', e.currentTarget.value)}
              className="residentform-input residentform-input--room"
              placeholder="bv. 002"
            ></input>
          </label>

          <div className="residentform-stay">
            <p className=" form-title residentform-status-title">Verblijf</p>
            <ToggleBtn
              setOption={setOption}
              option1={filter.option1}
              option2={filter.option2}
            />
          </div>
        </div>
        <div
          onClick={
            !isInputValid || step === steps.SUBMITTING ? null : submitResident
          }
          className={`
            create-wlp-btn${
              !isInputValid || step === steps.SUBMITTING
                ? ' create-wlp-btn--disabled'
                : ''
            }
          `}
        >
          <p className="create-wlp-btn-text">{confirmText}</p>
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
