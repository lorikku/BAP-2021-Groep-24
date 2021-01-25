import * as React from 'react';
import logo from './logo.svg';
import './App.css';

const initialMatches = [
  {
    matchee: 'Matches will appear here, after you fetch all users',
    match: '',
    interests: [],
  },
];

function App() {
  const [matches, setMatches] = React.useState(initialMatches);

  const calculateResidentMatches = async () => {
    setMatches(initialMatches);

    const response = await fetch('http://localhost:3001/app/residents');
    const result = await response.json();
    const residents = result.residents;

    //Selecting a (random) resident as 'matchee' (resident who other residents will get matched against)
    const matchee = residents[Math.floor(Math.random() * residents.length)];

    //Loop through all residents
    residents.forEach((resident) => {
      //Create a new (potential) match between matchee and current resident (match)
      const newMatch = {
        matchee: matchee.firstName,
        match: resident.firstName,
        interests: [],
      };

      //Loop through matchee interests
      matchee.interests.forEach((matcheeInterest) => {
        //If comparing resident is the matchee, skip (can't match yourself)
        if (resident._id === matchee._id) {
          return;
        }

        //If common interest is found, add interest to interests[] array in newMatch obj
        if (
          resident.interests.findIndex((residentInterest) => {
            /* 
            First, we will check if an interest contains a dependency interest (subcategory) and add it to the
            newMatch interests array if it's not yet in there. We need to check this because multiple different interests
            can have the same dependency interest
            */

            if (matcheeInterest.dependency && residentInterest.dependency) {
              if (matcheeInterest.dependency._id === residentInterest.dependency._id) {
                if (newMatch.interests.findIndex((interest) =>(interest.name = matcheeInterest.dependency.name)) === -1) {
                  newMatch.interests.push(matcheeInterest.dependency.name);
                }
              }
            }
            
            return matcheeInterest._id === residentInterest._id;}) !== -1
        ) {
          newMatch.interests.push(matcheeInterest.name);
        }
      });

      //If interests[] array in newMatch{} obj is NOT empty, add the new match (newMatch) to matches[] state to update UI
      if (newMatch.interests.length !== 0) {
        setMatches((prevMatches) => [...prevMatches, newMatch]);
      }
    });
  };

  const getResidentById = async (id) => {
    const response = await fetch(`http://localhost:3001/app/residents/${id}`);
    const result = await response.json();
    console.log('Resident fetch status:', result);
  };

  const getInterests = async () => {
    const response = await fetch('http://localhost:3001/app/interests');
    const result = await response.json();
    console.log('Interests fetch status:', result);
  };

  const getInterestById = async (id) => {
    const response = await fetch(`http://localhost:3001/app/interests/${id}`);
    const result = await response.json();
    console.log('Interest fetch status:', result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={calculateResidentMatches}>
          Fetch all residents and match towards a random one
        </button>
        <button onClick={() => getResidentById('600889e5f2a5381fee15405b')}>
          Fetch one resident (succesful) {'=>'} in console
        </button>
        <button onClick={() => getResidentById('example-invalid-resident-id')}>
          Fetch one resident (failing) {'=>'} in console
        </button>
        <br />
        <button onClick={getInterests}>
          Fetch all interests {'=>'} in console
        </button>
        <button onClick={() => getInterestById('600d776939cd240b72fc5dec')}>
          Fetch one interest {'=>'} in console
        </button>

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
