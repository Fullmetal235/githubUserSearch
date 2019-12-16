
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
return (
    <header style={{marginBottom: "6rem"}}>
      <nav className='navbar navbar-expand-lg fixed-top navbar-dark bg-info static-top'>
        <Link className='navbar-brand text-dark' to='/' id='title'>
          <i src ='GitHub-Mark.ai' className='fab fa-github-square' /> {title}
        </Link>
       {/* <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>*/}
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='ul'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

Navbar.defaultProps = {
    title: "GitHub Finder"
  };
  Navbar.propTypes = {
    title: PropTypes.string.isRequired
  };
  export default Navbar;