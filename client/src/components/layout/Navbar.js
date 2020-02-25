import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import { Navbar as CustomNavbar, Nav, NavDropdown } from "react-bootstrap";

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const imageStyle = {
    borderRadius: "50%",
    width: "30px",
    height: "30px"
  };

  const authLinks = (
    <Nav className='ml-auto'>
      <NavDropdown title='Ecommerce'>
        <NavDropdown.Item href='/ecommerce/homepage'>Homepage</NavDropdown.Item>
        <NavDropdown.Item href='/ecommerce/products'>
          Search Products
        </NavDropdown.Item>
        <NavDropdown.Item href='/ecommerce'>Add New Product</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title='Testing'>
        <NavDropdown.Item href='/testing'>Homepage</NavDropdown.Item>
        <NavDropdown.Item href='/testing/ongoing-projects'>
          Ongoing projects
        </NavDropdown.Item>
        <NavDropdown.Item href='/testing/my-projects'>
          My projects
        </NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title='Crowdfunding'>
        <NavDropdown.Item href='/crowdfunding'>Homepage</NavDropdown.Item>
        <NavDropdown.Item href='/crowdfunding/my-campaigns'>
          My Campaigns
        </NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title='Community'>
        <NavDropdown.Item href='/community'>Homepage</NavDropdown.Item>
        <NavDropdown.Item href='/community/my-groups'>
          My groups
        </NavDropdown.Item>
      </NavDropdown>

      <NavDropdown
        title={
          <img
            src={user !== null ? user.avatar : ""}
            alt=''
            style={imageStyle}
          />
        }
      >
        <NavDropdown.Item href='/dashboard'>Dashboard</NavDropdown.Item>
        <NavDropdown.Item href={`/profile/${user !== null ? user._id : ""}`}>
          My Profile
        </NavDropdown.Item>
        <NavDropdown.Item href='/settings'>Settings</NavDropdown.Item>
        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );

  const normalLinks = (
    <Nav className='ml-auto'>
      <Nav.Link href='/register'>Register</Nav.Link>
      <Nav.Link href='/login'>Login</Nav.Link>
    </Nav>
  );

  return (
    <CustomNavbar bg='dark' variant='dark' relative='top'>
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
