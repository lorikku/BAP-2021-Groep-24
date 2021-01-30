import * as React from 'react';

import ResidentsFilter from '../../containers/residents/ResidentsFilter';
import OverviewProfiles from '../../containers/residents/overview/OverviewProfiles';

const initialResidents = [
  {
    id: '213123123',
    roomNr: 101,
    floor: 1,
    name: 'Gerda Willems',
    photoUri:
      'https://i.pinimg.com/564x/c3/b5/c5/c3b5c5920634a9267ca6244b980f801f.jpg',
    isPermanent: true,
    isNew: true,
  },
  {
    id: '213asdasd23',
    roomNr: 105,
    floor: 1,
    name: 'Jos Decaestecker',
    photoUri:
      'https://i.pinimg.com/564x/c3/b5/c5/c3b5c5920634a9267ca6244b980f801f.jpg',
    isPermanent: true,
    isNew: true,
  },
  {
    id: '2156756723123',
    roomNr: 207,
    floor: 2,
    name: 'Alex De Vos',
    photoUri:
      'https://i.pinimg.com/564x/c3/b5/c5/c3b5c5920634a9267ca6244b980f801f.jpg',
    isPermanent: false,
    isNew: true,
  },
  {
    id: '213123123',
    roomNr: 101,
    floor: 1,
    name: 'Gerda Willems',
    photoUri:
      'https://i.pinimg.com/564x/c3/b5/c5/c3b5c5920634a9267ca6244b980f801f.jpg',
    isPermanent: true,
    isNew: false,
    isHeart: true,
  },
  {
    id: '213asdasd23',
    roomNr: 105,
    floor: 1,
    name: 'Jos Decaestecker',
    photoUri:
      'https://i.pinimg.com/564x/c3/b5/c5/c3b5c5920634a9267ca6244b980f801f.jpg',
    isPermanent: true,
    isNew: false,
  },
  {
    id: '2156756723123',
    roomNr: 207,
    floor: 2,
    name: 'Alex De Vos',
    photoUri:
      'https://i.pinimg.com/564x/c3/b5/c5/c3b5c5920634a9267ca6244b980f801f.jpg',
    isPermanent: false,
    isNew: false,
  },
  {
    id: '213123123',
    roomNr: 101,
    floor: 1,
    name: 'Gerda Willems',
    photoUri:
      'https://i.pinimg.com/564x/c3/b5/c5/c3b5c5920634a9267ca6244b980f801f.jpg',
    isPermanent: true,
    isNew: false,
  },
  {
    id: '213asdasd23',
    roomNr: 105,
    floor: 1,
    name: 'Jos Decaestecker',
    photoUri:
      'https://i.pinimg.com/564x/c3/b5/c5/c3b5c5920634a9267ca6244b980f801f.jpg',
    isPermanent: true,
    isNew: false,
  },
  {
    id: '2156756723123',
    roomNr: 207,
    floor: 2,
    name: 'Alex De Vos',
    photoUri:
      'https://i.pinimg.com/564x/c3/b5/c5/c3b5c5920634a9267ca6244b980f801f.jpg',
    isPermanent: false,
    isNew: false,
    isHeart: true,
  },
  {
    id: '213123123',
    roomNr: 101,
    floor: 1,
    name: 'Gerda Willems',
    photoUri:
      'https://i.pinimg.com/564x/c3/b5/c5/c3b5c5920634a9267ca6244b980f801f.jpg',
    isPermanent: true,
    isNew: false,
  },
  {
    id: '213asdasd23',
    roomNr: 105,
    floor: 1,
    name: 'Jos Decaestecker',
    photoUri:
      'https://i.pinimg.com/564x/c3/b5/c5/c3b5c5920634a9267ca6244b980f801f.jpg',
    isPermanent: true,
    isNew: false,
  },
  {
    id: '2156756723123',
    roomNr: 207,
    floor: 2,
    name: 'Alex De Vos',
    photoUri:
      'https://i.pinimg.com/564x/c3/b5/c5/c3b5c5920634a9267ca6244b980f801f.jpg',
    isPermanent: false,
    isNew: false,
  },
];

const OverviewPage = () => {
  const [residents, setResidents] = React.useState(initialResidents);
  return (
    <>
      <h2 className="visually-hidden">Overzicht bewoners</h2>
      <div className="residents-overview fit-height flex-content">
        <ResidentsFilter setResidents={setResidents} />
        <OverviewProfiles residents={residents} />
      </div>
    </>
  );
};

export default OverviewPage;
