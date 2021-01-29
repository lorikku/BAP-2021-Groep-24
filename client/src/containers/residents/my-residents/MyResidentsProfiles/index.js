import * as React from 'react';

import MyResidentProfile from '../../../../components/residents/my-residents/MyResidentsProfile/index.js';

import './myresidentsprofiles.css';

const residents = [
  {
    id: '213123123',
    roomNr: 101,
    floor: 1,
    name: 'Gerda Willems',
    photoUri:
      'https://i.pinimg.com/564x/c3/b5/c5/c3b5c5920634a9267ca6244b980f801f.jpg',
    isPermanent: true,
  },
  {
    id: '213asdasd23',
    roomNr: 105,
    floor: 1,
    name: 'Jos Decaestecker',
    photoUri:
      'https://i.pinimg.com/564x/c3/b5/c5/c3b5c5920634a9267ca6244b980f801f.jpg',
    isPermanent: true,
  },
  {
    id: '2156756723123',
    roomNr: 207,
    floor: 2,
    name: 'Alex De Vos',
    photoUri:
      'https://i.pinimg.com/564x/c3/b5/c5/c3b5c5920634a9267ca6244b980f801f.jpg',
    isPermanent: false,
  },
];

const MyResidentsProfiles = () => {
  return (
    <div className="residents-myresidents__profiles">
      {residents.map((resident, index) => {
        const isSpacer = (index - 1) % 3 === 0;
        return <MyResidentProfile key={index} isSpacer={isSpacer} resident={resident} />;
      })}
    </div>
  );
};

export default MyResidentsProfiles;
