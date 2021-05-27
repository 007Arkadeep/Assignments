import React, { Component } from 'react'
import {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Login'
import Register from './Register';
import Home from '../src/pages/Home';
import Dashboard from '../src/pages/Dashboard';
  
function App() {
  
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path='/Register' component={Register} />
      <Route exact path='/Login' component={Login} />
      <Route exact path='/Dashboard' component={Dashboard} />
     </div>
     </Router>
  );
}
  
export default App;