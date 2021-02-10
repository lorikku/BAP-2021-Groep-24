import * as React from 'react';

import GoBack from '../../components/global/GoBack';
import BannerHeader from '../../components/global/BannerHeader';
import ResidentForm from '../../containers/residents/ResidentForm';
import NewResidentCreated from '../../containers/residents/new-resident/NewResidentCreated';
import paths from '../../consts/paths';
import {
  fetchResidentById,
  postNewResident,
} from '../../services/ResidentsService';

const steps = {
  CONFIG: 'config',
  SUBMITTING: 'submitting',
  SUBMITTED: 'submitted',
};

const NewResidentPage = () => {
  //setting initial step
  const [step, setStep] = React.useState(steps.CONFIG);

  const [filter, setFilter] = React.useState({
    option1: {
      text: 'Vast verblijf',
      isActive: true,
    },
    option2: {
      text: 'Kort verblijf',
      isActive: false,
    },
  });

  const setOption = (option) => {
    setFilter((prevState) => {
      const newFilter = Object.assign({}, prevState);

      //Reset actives
      newFilter.option1.isActive = false;
      newFilter.option2.isActive = false;

      //Set new active
      newFilter[option].isActive = true;

      return newFilter;
    });
  };

  //useState with initial value
  const [inputs, setInput] = React.useState({
    name: '',
    floor: '',
    roomNr: '',
    photoUri: '',
    spotlightTimestamp: null,
    isPermanent: filter.option1.isActive, //default option is option1,
    isActive: false, //user gets put active after woon-en-leefplan is filled in
    interests: [],
    contacts: [],
  });

  const changeInput = React.useCallback((inputKey, newValue) => {
    setInput((prevState) => {
      const newState = Object.assign({}, prevState);

      if (inputKey === 'roomNr') {
        /* ---- ROOM NUMBER HANDLER ---- */
        //Filter all non-number characters from newValue
        let newRoomNr = newValue
          .split('')
          .filter((nr) => !isNaN(nr))
          .join('');

        switch (true) {
          case newRoomNr < 0:
            //No number less than 0
            newRoomNr = '0';
            break;

          case newRoomNr > 399 || newRoomNr.split('').length > 3:
            //No number bigger than 399 (max floor is 3)
            newRoomNr = '399';
            break;

          default:
            break;
        }

        const floor = newRoomNr.split('')[0]; //first number of new room represents floor
        newState['floor'] = floor;
        newState['roomNr'] = newRoomNr;
      } else if (inputKey === 'isPermanent') {
        /* ---- ISPERMANENT FILTER HANDLER ---- */
        if (newValue.option1.isActive) newState['isPermanent'] = true;
        if (newValue.option2.isActive) newState['isPermanent'] = false;
      } else {
        /* ---- DEFAULT HANDLER ---- */
        newState[inputKey] = newValue;
      }

      return newState;
    });
  }, []);

  // For when filter changes (ToggleBtn handler)
  React.useEffect(() => {
    changeInput('isPermanent', filter);
  }, [filter, changeInput]);

  const [submittedResident, setSubmittedResident] = React.useState(undefined);

  const submitResident = async () => {
    setStep(steps.SUBMITTING);
    const residentId = await postNewResident(inputs);

    if (residentId) {
      const fetchedResident = await fetchResidentById(residentId);
      setSubmittedResident(fetchedResident);
      setStep(steps.SUBMITTED);
    }
  };

  return (
    <>
      <h2 className="visually-hidden">Nieuwe bewoner aanmaken</h2>
      <div className="new-resident-container">
        <GoBack
          path={paths.PATH_RESIDENTS.ROOT}
          text={'Terug naar overzicht bewoners'}
        />
        <BannerHeader
          title={'Hallo!'}
          subtext={
            'Laten we samen een nieuwe bewoner in het platform toevoegen'
          }
        />
        {step === steps.CONFIG ? (
          <ResidentForm
            inputs={inputs}
            changeInput={changeInput}
            filter={filter}
            setOption={setOption}
            confirmText={'Woon- en leefplan maken'}
            submitResident={submitResident}
            step={step}
            steps={steps}
          />
        ) : step === steps.SUBMITTED ? (
          <NewResidentCreated resident={submittedResident} />
        ) : null}
      </div>
    </>
  );
};

export default NewResidentPage;
