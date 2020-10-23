import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
              Movies & Series
            </Link>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
            <a href="https://www.imdb.com/?ref_=nv_home"><i className="fab fa-imdb fa-5x" id="imdb-logo"/></a>
            </li>
            <li className="nav-item d-inline-block mr-4">
              <a href="https://tr.reactjs.org/"><i className="fab fa-react fa-5x" id="react-logo" /></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
