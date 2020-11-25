import React from 'react';
import {Switch, Link} from 'react-router-dom';
import "../App.css"
function NavBar() {
  return (
     
    <div key="list-wrapper">
      <Switch>
      <ul key="link-list" className="nav-bar">
          <Link to="/">
            <li className="nav-bar-item">Home</li>
          </Link>
      </ul>
      </Switch>
    </div>
    
  );
}

export default NavBar;
