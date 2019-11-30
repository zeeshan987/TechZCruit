import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { Navbar as CustomNavbar, Nav, NavDropdown } from 'react-bootstrap';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Nav className='ml-auto'>
      <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
      <Nav.Link href='/profiles'>Profiles</Nav.Link>
      <Nav.Link href='/posts'>Posts</Nav.Link>
      <Nav.Link href='/login'>Logout</Nav.Link>
    </Nav>
  );

  const normalLinks = (
    <Nav className='ml-auto'>
      <Nav.Link href='/profiles'>Profiles</Nav.Link>
      <Nav.Link href='/register'>Register</Nav.Link>
      <Nav.Link href='/login'>Login</Nav.Link>
      <NavDropdown title='Community' id='basic-nav-dropdown'>
        <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
        <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
        <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
      </NavDropdown>
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
