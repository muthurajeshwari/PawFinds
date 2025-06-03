import React from "react";
import "./navbar.css";
import logo from "../../Assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <div className="name">
        <img src={logo} alt="logo" className="img" />
        <NavLink to="/home" className="logo">
          PawFinds
        </NavLink>
      </div>

      <nav className="navbar">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/pets"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Adopt a Pet
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About PawFinds
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
