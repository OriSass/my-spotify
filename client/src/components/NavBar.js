import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import "../App.css"
function NavBar() {
  return (
     
    <div key="list-wrapper">
      <Switch>
      <ul key="link-list" className="nav-bar">
          <Link to="/">
            <li className="nav-bar-item">Home</li>
          </Link>
          <Link to="/song">
            <li className="nav-bar-item">Song</li>
          </Link>
          <Link to="/artist">
            <li className="nav-bar-item">Artist</li>
          </Link>
          <Link to="/playlist">
            <li className="nav-bar-item">Playlist</li>
          </Link>
      </ul>
      </Switch>
    </div>
    
  );
}

export default NavBar;
