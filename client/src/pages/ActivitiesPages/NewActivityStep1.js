import * as React from 'react';

import BannerHeader from '../../components/global/BannerHeader';
import GoBack from '../../components/global/GoBack';
import NewActivityOne from '../../containers/activities/NewActivityOne';

import paths from '../../consts/paths';

const NewActivityStep1 = ({ inputs, changeInput, changeStep, floor, setFloor }) => {
  const [isInputValid, setIsInputValid] = React.useState(false);

  React.useEffect(() => {
    const componentMounted = true;
    if (!inputs) return;

    if (!inputs.title || !inputs.location) {
      if (componentMounted) setIsInputValid(false);
    } else {
      if (componentMounted) setIsInputValid(true);
    }
  }, [inputs, setIsInputValid]);

  return (
    <>
      <GoBack path={paths.PATH_ACTIVITIES.ROOT} text={'Terug naar agenda'} />
      <BannerHeader
        title={'Plan je activiteit'}
        subtext={
          'Vul de nodige gegevens in om je activiteit tot leven te wekken.'
        }
        img={'/assets/img/illustrations/plan-activity.svg'}
      />
      <NewActivityOne
        inputs={inputs}
        changeInput={changeInput}
        isInputValid={isInputValid}
        changeStep={changeStep}
        floor={floor}
        setFloor={setFloor}
      />
    </>
  );
};

export default NewActivityStep1;
