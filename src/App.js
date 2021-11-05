import React from 'react';
import { Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.jsx'
import AllBeers from './pages/AllBeers.jsx'
import RandomBeer from './pages/RandomBeer.jsx'
import SingleBeer from './pages/SingleBeer.jsx'
import CreateBeer from './pages/CreateBeer.jsx'

import Header from './components/Header.jsx'

function App() {
  return (
    <div className="App">
      <main className="content">
      <Header /> 
      {/* A la Florian */}
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/beers" component={AllBeers}/>
          <Route path="/beer/:id" component={SingleBeer}/>
          <Route path="/random-beer" component={RandomBeer}/>      
          <Route path="/new-beer" component={CreateBeer}/>          
        </Switch>
      </main>
    </div>
  );
}

export default App;
