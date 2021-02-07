import * as React from 'react';
import { useParams } from 'react-router-dom';

import NameInput from '../../components/global/NameInput';
import MatchingProfileHeader from '../../containers/matching/MatchingProfileHeader';
import MatchResultList from '../../containers/matching/MatchResultList';
import DetailInterests from '../../containers/residents/detail/DetailInterests';
import {
  calculateResidentMatches,
  searchInterests,
} from '../../global/interestsFuncs';
import { fetchResident } from '../../services/ResidentsService/index.js';
import OverviewPage from '../ResidentsPages/OverviewPage';

import './matchingpage.css';

const DetailPage = () => {
  /* --------- STEP 1: GETTING RESIDENT---------  */

  const { residentId } = useParams();

  //Fetching resident single from db
  const [resident, setResident] = React.useState(undefined);

  React.useEffect(() => {
    let componentMounted = true;

    if (!residentId) {
      setResident(null);
      return;
    }

    if (componentMounted) setResident(undefined);

    const getResident = async () => {
      const fetchedResident = await fetchResident(
        residentId,
        setResident,
        true
      );
      if (componentMounted) setResident(fetchedResident);
      if (componentMounted) setInterests(fetchedResident.interests);
    };

    getResident();

    return () => (componentMounted = false);
  }, [residentId, setResident]);

  /* --------- STEP 2: SEARCHING THROUGH INTERESTS ---------  */

  const [name, setName] = React.useState('');
  const [interests, setInterests] = React.useState(undefined);

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

  /* --------- STEP 3: SELECTING INTERESTS ---------  */

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

  /* --------- STEP 4: CALCULATING MATCHES ---------  */

  const [matches, setMatches] = React.useState([]);

  React.useEffect(() => {
    if (selectedInterests.length === 0) return;

    let componentMounted = true;

    const getMatches = async () => {
      const calcMatches = await calculateResidentMatches(
        resident,
        selectedInterests
      );
      if (componentMounted) setMatches(calcMatches);
    };

    getMatches();

    return () => (componentMounted = false);
  }, [selectedInterests, setMatches, resident]);

  /* --------- UI STUFF AND COMPONENT ---------  */

  const [matchesVisibility, setMatchesVisibility] = React.useState(false);

  const toggleMatchesVisibility = () => {
    if (selectedInterests.length === 0) return;
    setMatchesVisibility((prevState) => !prevState);
  };

  return resident ? (
    <>
      <MatchingProfileHeader
        resident={resident}
        selectedInterests={selectedInterests}
        toggleInterest={toggleInterest}
      />
      <div className="matching__input">
        <NameInput
          name={name}
          setName={setName}
          labelText="Zoek een interesse"
          placeholderText="Krant"
        />
      </div>
      {!matchesVisibility ? (
        <DetailInterests
          resident={resident}
          interests={interests}
          isMatchingPage
          selectedInterests={selectedInterests}
          toggleInterest={toggleInterest}
          changedInput={name}
        />
      ) : null}
      <MatchResultList
        matchee={resident}
        matches={matches}
        selectedInterests={selectedInterests}
        matchesVisibility={matchesVisibility}
        toggleMatchesVisibility={toggleMatchesVisibility}
      />
    </>
  ) : resident === null ? (
    <p className="notification">
      Er werd geen bewoner gevonden met deze identificatiecode
    </p>
  ) : (
    <p className="notification">Bewoner ophalen...</p>
  );
};

export default DetailPage;
