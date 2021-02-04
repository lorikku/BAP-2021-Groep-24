import * as React from 'react';
import GoBack from '../../../components/global/GoBack';
import './matchingprofileheader.css';
import ResidentProfile from './../../../components/residents/detail/ResidentProfile';
import SelectedInts from '../../../components/matching/SelectedInts';

const MatchingProfileHeader = () => {
  const resident = {
    _id: 5,
    name: 'JOS',
    isPermanent: true,
    roomNr: 202,
    photoUri:
      'https://i.pinimg.com/564x/c3/b5/c5/c3b5c5920634a9267ca6244b980f801f.jpg',
  };
  return (
    <div className="match-header-profile">
      <div className="match-header-left">
        <GoBack text={'Andere bewoner matchen'} />
        <ResidentProfile resident={resident} />
      </div>
      <SelectedInts />
    </div>
  );
};
export default MatchingProfileHeader;
