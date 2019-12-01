import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { Navbar as CustomNavbar, Nav, NavDropdown } from 'react-bootstrap';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Nav className='ml-auto'>
      <NavDropdown title='Crowdfunding' id='basic-nav-dropdown'>
        <NavDropdown.Item href='/crowdfunding'>Homepage</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title='Community' id='basic-nav-dropdown'>
        <NavDropdown.Item href='/dashboard'>Dashboard</NavDropdown.Item>
        <NavDropdown.Item href='/profiles'>Profiles</NavDropdown.Item>
        <NavDropdown.Item href='/posts'>Posts</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link onClick={logout}>Logout</Nav.Link>
    </Nav>
  );

  const normalLinks = (
    <Nav className='ml-auto'>
      <NavDropdown title='Crowdfunding' id='basic-nav-dropdown'>
        <NavDropdown.Item href='/crowdfunding'>Homepage</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title='Community' id='basic-nav-dropdown'>
        <NavDropdown.Item href='/profiles'>Profiles</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href='/register'>Register</Nav.Link>
      <Nav.Link href='/login'>Login</Nav.Link>
    </Nav>
  );

  return (
    <CustomNavbar bg='dark' variant='dark' fixed='top'>
      <CustomNavbar.Brand href='/'>
        <i className='fab fa-connectdevelop'></i> TechZCruit
      </CustomNavbar.Brand>
      {!isAuthenticated && !loading ? normalLinks : authLinks}
    </CustomNavbar>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
