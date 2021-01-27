import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Router, Switch } from 'react-router-dom';

import Header from './containers/Header';

import './App.css';



const App = () => {
  return (
    <div className="content">
      <Header/>
      <main>
        <p>This is the rest of the page</p>
      </main>
    </div>
  );
};

export default App;
