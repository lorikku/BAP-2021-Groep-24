import * as React from 'react';

import GoBack from '../../../components/global/GoBack';
import ResidentProfile from './../../../components/residents/detail/ResidentProfile';
import SelectedInts from '../../../components/matching/SelectedInts';

import './matchingprofileheader.css';
import paths from '../../../consts/paths';

const MatchingProfileHeader = ({resident, selectedInterests, toggleInterest}) => {
  return (
    <div className="match-header-profile">
      <div className="match-header-left">
        <GoBack  path={paths.PATH_MATCHING.ROOT} text={'Andere bewoner matchen'} />
        <ResidentProfile showIcons={false} customImg={null} resident={resident} />
      </div>
      <SelectedInts selectedInterests={selectedInterests} toggleInterest={toggleInterest}/>
    </div>
  );
};
export default MatchingProfileHeader;
