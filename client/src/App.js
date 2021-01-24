import * as React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [matches, setMatches] = React.useState([
    {
      matchee: 'Matches will appear here, after you fetch all users',
      match: '',
      interests: [],
    },
  ]);

  const getResidents = async () => {
    const response = await fetch('http://localhost:3001/app/residents');
    const result = await response.json();
    const residents = result.residents;

    //Selecting a (random) resident as 'matchee' (resident who other residents will get matched against)
    const matchee = residents.find((resident) => resident.id === 'resident1');


    //Loop through all residents
    residents.forEach((resident) => {
      //Create a new (potential) match between matchee and current resident (match)
      const newMatch = {
        matchee: matchee.name,
        match: resident.name,
        interests: [],
      };

      //Loop through matchee interests
      matchee.interests.forEach((matcheeInterest) => {
        //If comparing resident is the matchee, skip (can't match yourself)
        if (resident.id === matchee.id) {
          return;
        }

        //If common interest is found, add interest to interests[] array in newMatch obj
        if (
          resident.interests.findIndex(
            (residentInterest) =>
              matcheeInterest.interestId === residentInterest.interestId
          ) !== -1
        ) {
          newMatch.interests.push(matcheeInterest.displayName);
        }
      });


      //If interests[] array in newMatch obj is NOT empty, add the new match (newMatch) to matches[] array to update UI
      if (newMatch.interests.length !== 0) {
        setMatches((prevMatches) => [...prevMatches, newMatch]);
      }
    });
  };

  const getOneResidentSucces = async () => {
    const response = await fetch('http://localhost:3001/app/residents/resident1');
    const result = await response.json();
    console.log('Resident fetch status:', result);
  };

  const getOneResidentFail = async () => {
    const response = await fetch(
      'http://localhost:3001/app/residents/random444'
    );
    const result = await response.json();
    console.log('Resident fetch status:', result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={getResidents}>Fetch all residents</button>
        <button onClick={getOneResidentSucces}>Fetch one resident (succesful)</button>
        <button onClick={getOneResidentFail}>Fetch one resident (failing)</button>

        {matches.map((match, index) =>
          index === 0 ? (
            <p key={index}>{match.matchee}</p>
          ) : (
            <p key={index}>
              {match.matchee} and {match.match} have interest(s) in common:{' '}
              <strong>{match.interests.join(', ')}</strong>
            </p>
          )
        )}
      </header>
    </div>
  );
}

export default App;
