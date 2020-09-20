import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
function NavBar() {
  return (
     
    <div key="list-wrapper">
      <Switch>
      <ul key="link-list">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/song">
            <li>Song</li>
          </Link>
          <Link to="/artist">
            <li>Artist</li>
          </Link>
          <Link to="/playlist">
            <li>Playlist</li>
          </Link>
      </ul>
      </Switch>
    </div>
    
  );
}

export default NavBar;
