import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="#00695c teal darken-2 ">
      <div className="nav-wrapper container">
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <NavLink to="/">Todo</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
