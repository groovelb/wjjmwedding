import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Ver1 from './page/ver1';
import Ver2 from './page/ver2';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Ver1} />
        <Route path='/ver2' exact component={Ver2} />
      </Switch>
    </Router>
  );
}

export default App;
