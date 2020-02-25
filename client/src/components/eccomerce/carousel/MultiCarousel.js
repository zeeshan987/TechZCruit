import React, { useState, useEffect, Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./carousel.module.css";
import Slider from "react-slick";
import styles from "../../../css/ecommerce/ProductPage.module.css";
import Image from "../../../img/placeholder.png";
import { Link } from "react-router-dom";

export const MultiCarousel = ({ products, profiles }) => {
  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <Fragment>
      {/* {console.log(products, "container  ==?")}  ${styles.pad_store*/}
      <div className={`${classes.container}`}>
        {products.length === 0 ? (
          <div className={`spinner-border`} role='status'>
            <span className={`sr-only`}>Loading...</span>
          </div>
        ) : (
          <Slider {...settings}>
            {/* {products.map(product => ( */}
            {profiles.map(profile =>
              profile.user.storeOwner === true ? (
                // return  profile.user.storeOwner === true ? 'and':('kjh')
                <div className={`out`} key={profile._id}>
                  {console.log(profile, "I am here")}
                  <div
                    className={`${classes.card} ${styles.carouselCard} ${styles.transition_box}`}
                  >
                    <img
                      className={`rounded-circle`}
                      alt={"users here"}
                      src={Image}
                      height={56}
                      width={56}
                      style={img}
                    />
                    <div className='card-body'>
                      <h5 className={classes.cardtitle}>{profile.user.name}</h5>
                      <small className='card-text text-sm-center text-muted'>
                        {/* {profile.productDescription} */}
                      </small>
                      <br />
                      <button className='btn btn-sm follow btn-primary'>
                        <Link
                          to={`/ecommerce/store/${profile.user._id}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          View Product
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                "Not Store Found"
              )
            )}
          </Slider>
        )}
      </div>
    </Fragment>
  );
};

const img = {
  borderradius: "50%",
  margintop: "20px",
  border: "2px solid #dee2e6"
};

export default MultiCarousel;
