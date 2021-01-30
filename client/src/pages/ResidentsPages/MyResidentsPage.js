import * as React from 'react';

import ResidentsFilter from '../../containers/residents/ResidentsFilter';
import MyResidentsProfiles from '../../containers/residents/my-residents/MyResidentsProfiles';

const initialResidents = [
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

const MyResidentsPage = () => {
  const [residents, setResidents] = React.useState(initialResidents);
  return (
    <>
      <h2 className="visually-hidden">Mijn bewoners</h2>
      <div className="residents-myresidents fit-height flex-content">
        <ResidentsFilter setResidents={setResidents} />
        <MyResidentsProfiles residents={residents} />
      </div>
    </>
  );
};

export default MyResidentsPage;
