import * as React from 'react';
import ProgressBall from '../../../components/wlp/ProgressBall';
import './progressbar.css';

const progressList = [
  'Persoonlijke gegevens',
  'Woon- en leefomstandigheden',
  'Mentaal welbevinden en autonomie',
];

const ProgressBar = () => {
  return (
    <div className="progress-container">
      {progressList.map((progress, index) => (
        <ProgressBall key={index} number={index + 1} title={progress} />
      ))}
    </div>
  );
};
export default ProgressBar;
