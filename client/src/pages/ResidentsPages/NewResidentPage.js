import * as React from 'react';

import GoBack from '../../components/global/GoBack';
import BannerHeader from '../../components/global/BannerHeader';
import ResidentForm from '../../containers/residents/ResidentForm';
import NewResidentCreated from '../../containers/residents/new-resident/NewResidentCreated';

const NewResidentPage = () => {
  return (
    <>
      <h2 className="visually-hidden">Nieuwe bewoner aanmaken</h2>
      <div className="new-resident-container fit-height">
        <GoBack text={'Annuleren'} />
        <BannerHeader
          title={'Hallo!'}
          subtext={
            'Laten we samen een nieuwe bewoner in het platform toevoegen'
          }
          
        />
        <ResidentForm confirmText={"woon- en leefplan maken"}/>
        {/* <NewResidentCreated/> */}
      </div>
    </>
  );
};

export default NewResidentPage;
