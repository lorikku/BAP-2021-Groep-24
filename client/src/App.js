import logo from './logo.svg';
import './App.css';

function App() {
  const getUsers = async () => {
    const response = await fetch('http://localhost:3001/app/residents');
    const result = await response.json();
    console.log('Users fetch status:', result);
  };

  const getOneUserSucces = async () => {
    const response = await fetch('http://localhost:3001/app/residents/random2');
    const result = await response.json();
    console.log('User fetch status:', result);
  };

  const getOneUserFail = async () => {
    const response = await fetch(
      'http://localhost:3001/app/residents/random444'
    );
    const result = await response.json();
    console.log('User fetch status:', result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={getUsers}>Fetch all residents</button>
        <button onClick={getOneUserSucces}>Fetch one user (succesful)</button>
        <button onClick={getOneUserFail}>Fetch one user (failing)</button>
      </header>
    </div>
  );
}

export default App;
