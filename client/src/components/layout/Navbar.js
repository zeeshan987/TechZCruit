import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className='navbar-nav ml-auto'>
      <li className='nav-item'>
        <Link className='nav-link' to='/dashboard'>
          Dashboard
        </Link>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='profiles.html'>
          Profiles
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='posts.html'>
          Posts
        </a>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' onClick={logout} to='/login'>
          Logout
        </Link>
      </li>
    </ul>
  );

  const normalLinks = (
    <ul className='navbar-nav ml-auto'>
      <li className='nav-item'>
        <Link className='nav-link' to='/register'>
          Register
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/login'>
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/'>
        <i className='fab fa-connectdevelop'></i> TechZCruit
      </Link>
      {!isAuthenticated && !loading ? normalLinks : authLinks}
    </nav>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
