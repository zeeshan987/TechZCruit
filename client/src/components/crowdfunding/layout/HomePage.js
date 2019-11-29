import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../../../css/crowdfunding/HomePage.css";

const HomePage = props => {
  return (
    <Fragment>
      <Navbar />
      <div class='main-container'>
        {/* Box 1  */}
        <div class='box box-1 '>
          <img src='./img/c1.jpg' width='100%' alt='' />
        </div>
        {/* <!-- Box 2 --> */}
        <div class='box box-2'>
          <div style='padding-left: 11px;'>
            <h1>Popular Projects</h1>
            <hr />
          </div>
          {/* <!-- Card rows --> */}
          <div class='cardsrow'>
            <div class='card'>
              <img src='./img/card1.jpg' class='card-img-top' alt='...' />
              <div class='card-body'>
                <h5 class='card-title'>Card title</h5>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p>--staring time--</p>
              </div>
            </div>

            <div class='card'>
              <img src='./img/card1.jpg' class='card-img-top' alt='...' />
              <div class='card-body'>
                <h5 class='card-title'>Card title</h5>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p>--staring Time--</p>
              </div>
            </div>

            <div class='card'>
              <img src='./img/card1.jpg' class='card-img-top' alt='...' />
              <div class='card-body'>
                <h5 class='card-title'>Card title</h5>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p>--staring Time--</p>
              </div>
            </div>

            <div class='card'>
              <img src='./img/card1.jpg' class='card-img-top' alt='...' />
              <div class='card-body'>
                <h5 class='card-title'>Card title</h5>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p>--staring Time--</p>
              </div>
            </div>
          </div>
        </div>
        <div class='box box-3'>
          {/* <!-- Grid --> */}
          <h1>Collection</h1>
          <hr />
          <div class='wrapper'>
            <div>
              <div class='align-text'>
                <div class='text-centered'>10 Cool & Clever Finds</div>
                <img src='./img/square4.jpeg' class='card-img-top' alt='...' />
              </div>
              <h3>Our roundup of standout projects</h3>
            </div>
            <div>
              <div class='align-text'>
                <div class='text-centered'>Team Favorite</div>
                <img src='./img/square2.jpeg' class='card-img-top' alt='...' />
              </div>
              <h3>Most Liked projects</h3>
            </div>
            <div>
              <div class='align-text'>
                <div class='text-centered'>10 Cool & Clever Finds</div>
                <img src='./img/square3.jpeg' class='card-img-top' alt='...' />
              </div>
              <h3>Campaigns just launched and are gaining traction</h3>
            </div>
            <div>
              <div class='align-text'>
                <div class='text-centered'>10 Cool & Clever Finds</div>
                <img src='./img/square2.jpeg' class='card-img-top' alt='...' />
              </div>
              <h3>Campaigns with perks one step closer to shipping</h3>
            </div>
          </div>
        </div>
        <div class='box box-4'>
          <div class='head'>
            <h1>Clever Things For Curious Humans™</h1>
          </div>
          <div class='parag-text'>
            <p>
              There’s no better place to start the hunt for something new and
              special. Begin on Indiegogo to find clever and unconventional
              things that solve everyday problems large and small.
            </p>
          </div>
          <div class='buttons'>
            <a href='register.html' class='btn btn-primary'>
              Sign Up
            </a>
            <a href='login.html' class='btn btn'>
              Login
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

HomePage.propTypes = {};

export default HomePage;
