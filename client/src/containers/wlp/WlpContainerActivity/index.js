import * as React from 'react';
import InputActivity from '../../../components/wlp/InputActivity';
import InputAddSubtags from '../../../components/wlp/InputAddSubTags';
import InputBirthDate from '../../../components/wlp/InputBirthDate';
import InputBirthPlace from '../../../components/wlp/InputBirthPlace';
import InputCheckSelection from '../../../components/wlp/InputCheckSelection';
import InputCheckSelectionBig from '../../../components/wlp/InputCheckSelectionBig';
import './wlpcontainer.css';

const WlpContainerActivity = ({ contentInfo, selectedInterests, toggleInterest }) => {
  const { interests, category, subtitle, icon } = contentInfo;
  return (
    <div>
      <h2 className="wlp-title">{category}</h2>
      <div className="wlp-act-container">
        <div className="wlp-activity-container">
          <div className="wlp-activity-container-subtitle">
            <div className="wlp-activity-suncontainer-subtitle">
              <p className="wlp-input-deptitle">{subtitle}</p>
              {contentInfo.subCatName ? <p className="wlp-input-title--subcat">{contentInfo.subCatName}</p> : null}
            </div>
            <img
              className="activity-vector"
              alt="illustratie activiteit"
              src={icon}
            />
          </div>
          <div className="activities-list-wrapper">
            <div className="wlp-activities-list">
              {interests.map((interest, index) => (
                <InputActivity selectedInterests={selectedInterests} toggleInterest={toggleInterest} key={index} interest={interest} />
              ))}
            </div>
            <InputAddSubtags
              title={'Voeg een andere optie toe'}
              placeholder={'Andere...'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default WlpContainerActivity;
