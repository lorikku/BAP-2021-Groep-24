import * as React from 'react';

import NewActivityStep1 from './NewActivityStep1';
import NewActivityStep2 from './NewActivityStep2';

import { postActivity } from '../../services/ActivitiesService';
import { useHistory } from 'react-router-dom';
import paths from '../../consts/paths';

const steps = {
  CONFIG: 'config',
  INTERESTS_SELECTION: 'interests',
  SUBMITTING: 'submitting',
};

const NewActivityPages = () => {
  const history = useHistory();

  //For changing steps (newActivityStep1/newActivitiyStep2)
  const [step, setStep] = React.useState(steps.CONFIG);

  //initial date is today but at 00:00:00
  const initialDate = new Date();
  initialDate.setHours(0, 0, 0, 0, 0);

  //useState with initial value
  const [inputs, setInput] = React.useState({
    title: '',
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

  const backToConfig = () => {
    setStep(steps.CONFIG);
  };

  const nextToInterests = () => {
    setStep(steps.INTERESTS_SELECTION);
  };

  //Submitting to database
  const submitActivity = async () => {
    setStep(steps.SUBMITTING);

    const activityId = await postActivity(inputs);
    console.log(activityId);

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
        {step === steps.CONFIG ? (
          <NewActivityStep1
            inputs={inputs}
            changeInput={changeInput}
            nextToInterests={nextToInterests}
          />
        ) : (
          <NewActivityStep2
            inputs={inputs}
            changeInput={changeInput}
            backToConfig={backToConfig}
            submitActivity={submitActivity}
            steps={steps}
            step={step}
          />
        )}
      </div>
    </>
  );
};

export default NewActivityPages;
