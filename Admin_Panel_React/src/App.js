import React from 'react';

import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import {Route, Link, Router} from 'react-router-dom';


function App() {
  return (
  <div className="App">
    <Route exact path='/' component={Home}  />
    <Route exact path='/dashboard' component={Dashboard}  />
  </div>
  );
}

export default App;
