import React, { Fragment, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import { Row, Col, Grid, Container } from "react-bootstrap";
// import "../../../css/crowdfunding/HomePage.css";
import { connect } from "react-redux";
import { getAllCampaigns } from "../../../actions/crowdfunding/campaign";
import Card from "react-bootstrap/Card";
import caro1 from "../../../img/caro1.jpg";
import caro2 from "../../../img/caro2.jpg";
import caro3 from "../../../img/caro3.jpg";
import CarousalItem from "./CarousalItem";

function ControlledCarousel({ campaigns, auth }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  return (
    <Fragment>
      {/* <CardsGroup /> */}
      {campaigns === null ? (
        <div className='lead'>No campaigns found</div>
      ) : (
        <Carousel
          className='box-2'
          activeIndex={index}
          direction={direction}
          onSelect={handleSelect}
          // fade
          pauseOnHover
          slide
          interval={2000}
        >
          <Carousel.Item>
            <Row>
              {campaigns.map(campaign => (
                <Fragment key={campaign._id}>
                  <CarousalItem campaign={campaign} auth={auth} />
                </Fragment>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>
      )}
    </Fragment>
    //   className='box-2'
    //   activeIndex={index}
    //   direction={direction}
    //   onSelect={handleSelect}
    //   // fade
    //   pauseOnHover
    //   slide
    //   interval={2000}
    // >
    //   <Carousel.Item>
    //     <Row>
    //       <Col md={3}>
    //         <Card>
    //           <Card.Img variant='top' src={caro1} />
    //           <Card.Body>
    //             <Card.Title>Digital Product 2</Card.Title>
    //             <Card.Text>
    //               This is a wider card with supporting text below as a natural
    //               lead-in to additional content. This content is a little bit
    //               longer.
    //             </Card.Text>
    //           </Card.Body>
    //           <Card.Footer>
    //             <small className='text-muted'>Last updated 3 mins ago</small>
    //           </Card.Footer>
    //         </Card>
    //       </Col>
    //       <Col md={3}>
    //         <Card>
    //           <Card.Img variant='top' src={caro2} />
    //           <Card.Body>
    //             <Card.Title>Digital Product 2</Card.Title>
    //             <Card.Text>
    //               This is a wider card with supporting text below as a natural
    //               lead-in to additional content. This content is a little bit
    //               longer.
    //             </Card.Text>
    //           </Card.Body>
    //           <Card.Footer>
    //             <small className='text-muted'>Last updated 3 mins ago</small>
    //           </Card.Footer>
    //         </Card>
    //       </Col>
    //       <Col md={3}>
    //         <Card>
    //           <Card.Img variant='top' src={caro3} />
    //           <Card.Body>
    //             <Card.Title>Digital Product 2</Card.Title>
    //             <Card.Text>
    //               This is a wider card with supporting text below as a natural
    //               lead-in to additional content. This content is a little bit
    //               longer.
    //             </Card.Text>
    //           </Card.Body>
    //           <Card.Footer>
    //             <small className='text-muted'>Last updated 3 mins ago</small>
    //           </Card.Footer>
    //         </Card>
    //       </Col>
    //       <Col md={3}>
    //         <Card>
    //           <Card.Img variant='top' src={caro1} />
    //           <Card.Body>
    //             <Card.Title>Digital Product 2</Card.Title>
    //             <Card.Text>
    //               This is a wider card with supporting text below as a natural
    //               lead-in to additional content. This content is a little bit
    //               longer.
    //             </Card.Text>
    //           </Card.Body>
    //           <Card.Footer>
    //             <small className='text-muted'>Last updated 3 mins ago</small>
    //           </Card.Footer>
    //         </Card>
    //       </Col>
    //     </Row>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <Row>
    //       <Col md={3}>
    //         <Card>
    //           <Card.Img variant='top' src={caro1} />
    //           <Card.Body>
    //             <Card.Title>Digital Product 2</Card.Title>
    //             <Card.Text>
    //               This is a wider card with supporting text below as a natural
    //               lead-in to additional content. This content is a little bit
    //               longer.
    //             </Card.Text>
    //           </Card.Body>
    //           <Card.Footer>
    //             <small className='text-muted'>Last updated 3 mins ago</small>
    //           </Card.Footer>
    //         </Card>
    //       </Col>
    //       <Col md={3}>
    //         <Card>
    //           <Card.Img variant='top' src={caro2} />
    //           <Card.Body>
    //             <Card.Title>Digital Product 2</Card.Title>
    //             <Card.Text>
    //               This is a wider card with supporting text below as a natural
    //               lead-in to additional content. This content is a little bit
    //               longer.
    //             </Card.Text>
    //           </Card.Body>
    //           <Card.Footer>
    //             <small className='text-muted'>Last updated 3 mins ago</small>
    //           </Card.Footer>
    //         </Card>
    //       </Col>
    //       <Col md={3}>
    //         <Card>
    //           <Card.Img variant='top' src={caro3} />
    //           <Card.Body>
    //             <Card.Title>Sofwate Product</Card.Title>
    //             <Card.Text>
    //               This is a wider card with supporting text below as a natural
    //               lead-in to additional content. This content is a little bit
    //               longer.
    //             </Card.Text>
    //           </Card.Body>
    //           <Card.Footer>
    //             <small className='text-muted'>Last updated 3 mins ago</small>
    //           </Card.Footer>
    //         </Card>
    //       </Col>
    //       <Col md={3}>
    //         <Card>
    //           <Card.Img variant='top' src={caro2} />
    //           <Card.Body>
    //             <Card.Title>Sofwate Product</Card.Title>
    //             <Card.Text>
    //               This is a wider card with supporting text below as a natural
    //               lead-in to additional content. This content is a little bit
    //               longer.
    //             </Card.Text>
    //           </Card.Body>
    //           <Card.Footer>
    //             <small className='text-muted'>Last updated 3 mins ago</small>
    //           </Card.Footer>
    //         </Card>
    //       </Col>
    //     </Row>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <Row>
    //       <Col md={3}>
    //         <Card>
    //           <Card.Img variant='top' src={caro1} />
    //           <Card.Body>
    //             <Card.Title>Sofwate Product</Card.Title>
    //             <Card.Text>
    //               This is a wider card with supporting text below as a natural
    //               lead-in to additional content. This content is a little bit
    //               longer.
    //             </Card.Text>
    //           </Card.Body>
    //           <Card.Footer>
    //             <small className='text-muted'>Last updated 3 mins ago</small>
    //           </Card.Footer>
    //         </Card>
    //       </Col>
    //       <Col md={3}>
    //         <Card>
    //           <Card.Img variant='top' src={caro2} />
    //           <Card.Body>
    //             <Card.Title>Sofwate Product</Card.Title>
    //             <Card.Text>
    //               This is a wider card with supporting text below as a natural
    //               lead-in to additional content. This content is a little bit
    //               longer.
    //             </Card.Text>
    //           </Card.Body>
    //           <Card.Footer>
    //             <small className='text-muted'>Last updated 3 mins ago</small>
    //           </Card.Footer>
    //         </Card>
    //       </Col>
    //       <Col md={3}>
    //         <Card>
    //           <Card.Img variant='top' src={caro3} />
    //           <Card.Body>
    //             <Card.Title>Sofwate Product</Card.Title>
    //             <Card.Text>
    //               This is a wider card with supporting text below as a natural
    //               lead-in to additional content. This content is a little bit
    //               longer.
    //             </Card.Text>
    //           </Card.Body>
    //           <Card.Footer>
    //             <small className='text-muted'>Last updated 3 mins ago</small>
    //           </Card.Footer>
    //         </Card>
    //       </Col>
    //       <Col md={3}>
    //         <Card>
    //           <Card.Img variant='top' src={caro1} />
    //           <Card.Body>
    //             <Card.Title>Digital Product 2</Card.Title>
    //             <Card.Text>
    //               This is a wider card with supporting text below as a natural
    //               lead-in to additional content. This content is a little bit
    //               longer.
    //             </Card.Text>
    //           </Card.Body>
    //           <Card.Footer>
    //             <small className='text-muted'>Last updated 3 mins ago</small>
    //           </Card.Footer>
    //         </Card>
    //       </Col>
    //     </Row>
    //   </Carousel.Item>
    // </Carousel>
  );
}

ControlledCarousel.propTypes = {
  auth: PropTypes.object.isRequired,
  campaigns: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(ControlledCarousel);
