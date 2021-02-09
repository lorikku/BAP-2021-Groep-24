import * as React from 'react';
import { useHistory } from 'react-router-dom';

import NewActivityStep1 from './NewActivityStep1';
import NewActivityStep2 from './NewActivityStep2';

import paths from '../../consts/paths';
import { floorOptions } from '../../containers/residents/ResidentsFilter/filterOptions';
import { postActivity } from '../../services/ActivitiesService';
import {detailSteps} from './detailSteps';

const NewActivityPages = () => {
  const history = useHistory();

  //For changing steps (newActivityStep1/newActivitiyStep2)
  const [step, setStep] = React.useState(detailSteps.CONFIG);

  //initial date is today but at 00:00:00
  const initialDate = new Date();
  initialDate.setHours(0, 0, 0, 0, 0);

  const [floor, setFloor] = React.useState(floorOptions[0]);

  //useState with initial value
  const [inputs, setInput] = React.useState({
    title: '',
    floor: 'all',
    date: initialDate,
    startTime: '10:00',
    endTime: '16:00',
    location: '',
    interests: [],
  });

  const changeInput = React.useCallback((inputKey, newValue) => {
    setInput((prevState) => {
      const newState = Object.assign({}, prevState);
      newState[inputKey] = newValue;
      return newState;
    });
  }, []);

  React.useEffect(() => {
    changeInput('floor', floor);
  }, [floor, changeInput]);

  const changeStep = (step) => {
    setStep(step);
  }

  //Submitting to database
  const submitActivity = async () => {
    setStep(detailSteps.SUBMITTING);

    const activityId = await postActivity(inputs);

    if (activityId) {
      history.push(paths.PATH_ACTIVITIES.ROOT + `/${activityId}`);
    } else {
      history.push(paths.PATH_ACTIVITIES.ROOT);
    }
  };

  return (
    <>
      <h2 className="visually-hidden">Nieuwe activiteit toevoegen</h2>
      <div className="activities-new fit-height flex-content">
        {step === detailSteps.CONFIG ? (
          <NewActivityStep1
            inputs={inputs}
            changeInput={changeInput}
            changeStep={changeStep}
            floor={floor}
            setFloor={setFloor}
          />
        ) : (
          <NewActivityStep2
            inputs={inputs}
            changeInput={changeInput}
            changeStep={changeStep}
            submitActivity={submitActivity}
            step={step}
          />
        )}
      </div>
    </>
  );
};

export default NewActivityPages;
