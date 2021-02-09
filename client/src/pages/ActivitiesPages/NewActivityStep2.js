import * as React from 'react';

import BannerHeader from '../../components/global/BannerHeader';
import GoBack from '../../components/global/GoBack';
import NameInput from '../../components/global/NameInput';
import SelectedInts from '../../components/matching/SelectedInts';

import DetailInterests from '../../containers/residents/detail/DetailInterests';
import { searchInterests } from '../../global/interestsFuncs';
import { fetchResidentById } from '../../services/ResidentsService';
import {detailSteps} from './detailSteps';

const NewActivityStep2 = ({
  changeInput,
  changeStep,
  submitActivity,
  step
}) => {
  /* --------- STEP 1: SEARCHING THROUGH INTERESTS ---------  */

  const [name, setName] = React.useState('');
  const [resident, setResident] = React.useState(undefined);
  const [interests, setInterests] = React.useState(undefined);

  //Interests fetched from 1 resident for testing purposes

  React.useEffect(() => {
    let componentMounted = true;

    const getInterests = async () => {
      const fetchedResident = await fetchResidentById(
        '600889e5f2a5381fee15405b',
        true
      );
      if (componentMounted) setResident(fetchedResident);
      if (componentMounted) setInterests(fetchedResident.interests);
    };

    getInterests();

    return () => (componentMounted = false);
  }, [setResident, setInterests]);

  React.useEffect(() => {
    let componentMounted = true;
    if (!resident) return;
    if (!name) {
      if (componentMounted) setInterests(resident.interests);
    }

    const getNewInterests = () => {
      if (componentMounted)
        setInterests(searchInterests(name, resident.interests));
    };

    const interval = setTimeout(getNewInterests, 100);
    return () => {
      clearTimeout(interval);
      componentMounted = false;
    };
  }, [name, resident, setInterests]);

  /* --------- STEP 2: SELECTING INTERESTS ---------  */

  const [selectedInterests, setSelectedInterests] = React.useState([]);

  const toggleInterest = (action) => {
    const { type, interest } = action;

    if (type === 'add') {
      setSelectedInterests((prevState) => [...prevState, interest]);
    } else {
      setSelectedInterests((prevState) => {
        const newState = [...prevState];

        const index = newState.indexOf(interest);
        newState.splice(index, 1);
        return newState;
      });
    }
  };

  React.useEffect(() => {
    changeInput('interests', selectedInterests);
  }, [selectedInterests, changeInput]);

  return resident ? (
    <>
      <GoBack func={() => changeStep(detailSteps.CONFIG)} text={'Terug naar activiteit informatie'} />
      <BannerHeader title={'Kies de bijhorende interesses'} />
      <div className="matching__input">
        <NameInput
          name={name}
          setName={setName}
          labelText="Zoek een interessetag"
          placeholderText="Golf"
        />
      </div>
      <div className="activities__newactivity fit-height">
        <DetailInterests
          interests={interests}
          isMatchingPage
          selectedInterests={selectedInterests}
          toggleInterest={toggleInterest}
        />
        <div className="activities__selectedints">
          {' '}
          <SelectedInts
            selectedInterests={selectedInterests}
            toggleInterest={toggleInterest}
            submitActivity={submitActivity}
            step={step}
          />
        </div>
      </div>
    </>
  ) : (
    <p className="notifications">Interesses ophalen...</p>
  );
};

export default NewActivityStep2;
