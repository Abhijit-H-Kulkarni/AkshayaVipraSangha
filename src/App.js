import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Home from './components/Home/index'
import Matrimonial from './components/Matrimonial/index'
import AboutUs from './components/AboutUs/About';
import Navigation from './components/NavigatioBar/NavBar';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="Title">
      <Navigation></Navigation>
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
        <Route path="/about" exact render={
          () => {
            return (<AboutUs></AboutUs>);
          }
        } />
        <Route path="/contact" exact render={
          () => {
            return (<Search></Search>);
          }
        } />
      </Router>
    </div>
  );
}

export default App;
