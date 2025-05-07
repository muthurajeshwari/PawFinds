import React from 'react';
import './Navbar.css';
import logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom'; // <-- Import Link

const Navbar = () => {
  return (
    <header className="header">
      <div className="name">
        <img src={logo} alt="logo" className="img" />
        <Link to="/" className="logo">PawFinds</Link>
      </div>

      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/adopts" className="nav-link">Adopt a Pet</Link> 
        <Link to="/about" className="nav-link">About PawFinds</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/login" className="nav-link">Login</Link> 
      </nav>
    </header>
  );
};

export default Navbar;
