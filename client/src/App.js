import logo from './logo.svg';
import './App.css';

function App() {
  const getResidents = async () => {
    const response = await fetch('http://localhost:3001/residents');
    const result = await response.json();
    console.log('Residents fetch status:', result);
  };

  const getOneResidentSucces = async () => {
    const response = await fetch('http://localhost:3001/residents/random2');
    const result = await response.json();
    console.log('Resident fetch status:', result);
  };

  const getOneResidentFail = async () => {
    const response = await fetch('http://localhost:3001/residents/random444');
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
        <button onClick={getResidents}>Fetch all users</button>
        <button onClick={getOneResidentSucces}>Fetch one user (succesful)</button>
        <button onClick={getOneResidentFail}>Fetch one user (failing)</button>
      </header>
    </div>
  );
}

export default App;
