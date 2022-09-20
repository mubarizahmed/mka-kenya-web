import React from 'react'
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo}/>
      </div>
      <div className="navbar-links">
        <Link className="navbar-link" to="/">Home</Link>
        <Link className="navbar-link" to="/about">About</Link>
      </div>
    </nav>
  )
}

export default Navbar