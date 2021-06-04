import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import {Route, Link, Router} from 'react-router-dom';
import ReactDOM from "react-dom";


class App extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "script.js";

    // For body
    document.body.appendChild(script);
  }
    render() {
    return (
    <div className="App">
      <Route exact path='/' component={Home}  />
      <Route exact path='/dashboard' component={Dashboard}  />
    </div>
    );
  }
}

export default App;
