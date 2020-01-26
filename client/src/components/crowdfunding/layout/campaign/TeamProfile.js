import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Image from "react-bootstrap/Image";
import { Row, Col, Container } from "react-bootstrap";

const TeamProfile = (Campaign) => {
  return (
    <Fragment>
      {/* <Container> */}
      <Row>
        <Col xs={6} md={4}>
          <Image
            style={{ marginLeft: "115px", marginTop: "35px" }}
            src={
              "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            }
            roundedCircle
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='col-md-6' style={{ marginLeft: "28%" }}>
            <h4 className='text-primary'>
              <strong>Zeeshan</strong>
            </h4>
            <small className='text-white' style={{ marginLeft: "5%" }}>
              Web Develper
            </small>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='col-md-6' style={{ marginLeft: "28%" }}>
            <h6 className='text-primary'>
              <strong>Started this Campaign</strong>
            </h6>
            <small className='text-white'>
              Date 10/3/2019
            </small>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
          <Image
            style={{ marginLeft: "125px",width:'50px',height:'50px' }}
            src={
              "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            }
            roundedCircle
          />
          <div className='col-md-8' style={{ marginLeft: "90%" }}>
            <h4 className='text-primary'>
              <strong>Shehryar</strong>
            </h4>
            <small className='text-white' style={{ marginLeft: "0px" }}>
              Android Develper
            </small>
          </div>
        </Col>
      </Row>

      {/* </Container> */}
    </Fragment>
  );
};

TeamProfile.propTypes = {};

export default TeamProfile;
