import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { Navbar as CustomNavbar, Nav, NavDropdown } from 'react-bootstrap';

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const authLinks = (
    <Nav className='ml-auto'>
      <Nav.Link href='/chat'>
        <i class='fas fa-envelope'></i>
      </Nav.Link>
      <NavDropdown
        title={
          <img
            src={user !== null ? user.avatar : ''}
            alt=''
            className='round-img'
          />
        }
      >
        <img
          src={user !== null ? user.avatar : ''}
          alt=''
          className='round-img'
        />
        <div>
          <strong>{user !== null ? user.name : ''}</strong>
        </div>
        <div>{user !== null ? user.email : ''}</div>
        <NavDropdown.Divider />
        <NavDropdown.Item href='/dashboard'>Dashboard</NavDropdown.Item>
        <NavDropdown.Item href={`/profile/${user !== null ? user._id : ''}`}>
          My Profile
        </NavDropdown.Item>
        <NavDropdown.Item href='/settings'>Settings</NavDropdown.Item>
        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );

  const normalLinks = (
    <Nav className='ml-auto'>
      <Nav.Link href='/register'>REGISTER</Nav.Link>
      <Nav.Link href='/login'>LOGIN</Nav.Link>
    </Nav>
  );

  return (
    <CustomNavbar bg='dark' expand='lg'>
      <CustomNavbar.Brand href='/'>
        <i className='fab fa-connectdevelop'></i> TechZCruit
      </CustomNavbar.Brand>
      <CustomNavbar.Toggle aria-controls='basic-navbar-nav' />
      <CustomNavbar.Collapse id='basic-navbar-nav'>
        {!isAuthenticated && !loading ? normalLinks : authLinks}
      </CustomNavbar.Collapse>
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
