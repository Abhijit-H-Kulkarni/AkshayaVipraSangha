import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Home from './components/Home/index'
import Matrimonial from './components/Matrimonial/index'

function App() {
  return (
    <div className="Title">
      <Router>
        <Route path="/" exact render={
          () => {
            return (<Home></Home>);
          }
        } />

        <Route path="/matrimonial" exact render={
          () => {
            return (<Matrimonial></Matrimonial>);
          }
        } />
      </Router>
    </div>
  );
}

export default App;
