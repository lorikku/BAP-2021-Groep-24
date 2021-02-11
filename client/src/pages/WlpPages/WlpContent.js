import * as React from 'react';
import NextPrev from '../../components/wlp/NextPrev';
import ProgressBar from '../../containers/wlp/ProgressBar';
import WlpContainerActivity from '../../containers/wlp/WlpContainerActivity';
import LandingContainer from '../../containers/wlp/LandingContainer';
import WlpSubmitted from '../../containers/wlp/WlpSubmitted';

import './wlppage.css';
import './wlpcontainer.css';

import { contentGenerator } from './wlpContentGenerator';
import { useHistory, useParams } from 'react-router-dom';
import {
  fetchResidentById,
  updateResident,
} from '../../services/ResidentsService';

//All steps will get imported/listed here
const contentArr = contentGenerator();

const steps = {
  START: 'start',
};

const stepsArr = [steps.START];

const WlpContent = () => {
  /* --------- STEP 1: GETTING RESIDENT ---------  */
  const history = useHistory();

  const { residentId } = useParams();
  const [resident, setResident] = React.useState(undefined);

  React.useEffect(() => {
    let componentMounted = true;
    if (resident) return;
    if (!residentId) history.push('/wlp');

    const fetchResident = async () => {
      const fetchedResident = await fetchResidentById(residentId, true);
      if (fetchedResident) {
        if (fetchedResident.isActive) {
          history.push('/wlp');
        } else {
          if (componentMounted) setResident(fetchedResident);
        }
      } else {
        history.push('/wlp');
      }
    };

    fetchResident();

    return () => (componentMounted = false);
  }, [residentId, setResident, resident, history]);

  /* --------- STEP 2: IF RESIDENT IS FOUND -> HANDLE STEPS ---------  */
  const [step, setStep] = React.useState(0);
  const [actualStep, setActualStep] = React.useState(steps.START);

  const incrStep = () =>
    setStep((prevState) => {
      //Check if next step is end of this WLP
      if (prevState + 1 - stepsArr.length + 1 > contentArr.length) {
        submitResident();
        return prevState;
      }
      return prevState + 1;
    });
  const decrStep = () =>
    setStep((prevState) => {
      //Don't go under 0
      if (prevState - 1 < 0) return prevState;
      //Else return
      return prevState - 1;
    });

  React.useEffect(() => {
    const localStep = stepsArr[step];
    if (!localStep) {
      //Switch to index numbers (for checkbox)
      setActualStep(step - stepsArr.length);
    } else {
      setActualStep(localStep);
    }
  }, [step, setActualStep]);

  /* --------- STEP 3: INTERESTS HANDLER ---------  */

  //Selected interests will be kept here
  const [selectedInterests, setSelectedInterests] = React.useState([]);

  //Handling interest selection/deselection
  const toggleInterest = (interest) => {
    setSelectedInterests((prevInterests) => {
      const foundInterestIndex = prevInterests.findIndex(
        (prevInterest) => prevInterest._id === interest._id
      );

      const newInterests = [...prevInterests];
      if (foundInterestIndex !== -1) {
        //If it was found -> remove
        newInterests.splice(foundInterestIndex, 1);
      } else {
        //If it wasnt found -> add
        newInterests.push(interest);
      }

      return newInterests;
    });
  };

  /* --------- STEP 4: SUBMIT HANDLER ---------  */

  const [submitted, setSubmitted] = React.useState(false);

  const submitResident = async () => {
    const interestsForDb = selectedInterests.map(
      (selectedInterest) => selectedInterest.toDb
    ); //Extracts necessary info (instead of pushing the whole interest object)

    //Update resident
    const newResident = await updateResident(resident._id, {
      isActive: true,
      interests: interestsForDb,
    });

    if (newResident) setSubmitted(true);

    console.log(newResident);
  };

  return resident ? (
    <div className="wlp-bg fit-height">
      <div className="content-container">
        {submitted ? (
          <WlpSubmitted name={resident.name} />
        ) : actualStep === steps.START ? (
          <LandingContainer onClick={incrStep} />
        ) : (
          <>
            <ProgressBar />
            <WlpContainerActivity
              selectedInterests={selectedInterests}
              toggleInterest={toggleInterest}
              contentInfo={contentArr[actualStep].contentInfo}
            />
            <NextPrev incrStep={incrStep} decrStep={decrStep} />
          </>
        )}
      </div>
    </div>
  ) : (
    <p className="notification">Bewoner ophalen...</p>
  );
};

export default WlpContent;
