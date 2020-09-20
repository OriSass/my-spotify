import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import Carousel from 'react-elastic-carousel';
import Card from './components/Card';
function App() {
  
  const breakPoints = [
    {width: 1, itemsToShow:1},
    {width: 500, itemsToShow:2},
    {width: 768, itemsToShow:3},
    {width: 1200, itemsToShow:4}    
  ]
  
  return (
    <div className="App">
    
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Homepage}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
