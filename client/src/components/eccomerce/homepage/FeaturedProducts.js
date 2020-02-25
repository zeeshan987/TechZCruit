import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "../../../css/ecommerce/ProductPage.module.css";

const FeaturedProducts = () => {
  return (
    <Fragment>
      <section className={styles.serviceoffers} id='servicediv'>
        <div className={`container ${styles.headings} text-center`}>
          <h1 className={`text-center font-weight-bold`}>What do we offer</h1>
          <p className={`text-center`}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.
          </p>
        </div>
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-lg-6 col-md-12 col-10 offset-lg-0`}>
              <div className={`${styles.names} my-3`}>
                <h1>Html</h1>
                <div className={`${styles.progress} w-75`}>
                  <div
                    className={`progress-bar progress-bar-striped progress-bar-animated`}
                    style={{ width: "100%" }}
                  >
                    100%
                  </div>
                </div>
              </div>
              <div className={`${styles.names} my-3`}>
                <h1>Css</h1>
                <div className={`${styles.progress} w-75`}>
                  <div
                    className={`progress-bar progress-bar-striped progress-bar-animated bg-warning`}
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
              </div>
              <div className={`${styles.names} my-3`}>
                <h1>React</h1>
                <div className='progress w-75'>
                  <div
                    className={`progress-bar progress-bar-striped progress-bar-animated bg-secondary`}
                    style={{ width: "60%" }}
                  >
                    65%
                  </div>
                </div>
              </div>
              <div className={`${styles.names} my-3`}>
                <h1>Jacavascript</h1>
                <div className={`${styles.progress} w-75`}>
                  <div
                    className={`progress-bar progress-bar-striped progress-bar-animated bg-info`}
                    style={{ width: "70%" }}
                  >
                    70%
                  </div>
                </div>
              </div>
              <div className={`${styles.names} my-3`}>
                <h1>Css</h1>
                <div className={`${styles.progress} w-75`}>
                  <div
                    className={`progress-bar progress-bar-striped progress-bar-animated bg-success`}
                    style={{ width: "80%" }}
                  >
                    80%
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-lg-6 col-md-12 col-12 ${styles.servicediv}`}>
              <div className={`row`}>
                <div className={`col-lg-2 col-2 ${styles.service_icons}`}>
                  <i
                    style={iconColor}
                    className={`fa-3x fa fa-desktop`}
                    aria-hidden='true'
                  ></i>
                </div>
                <div className={`col-lg-10 col-10`}>
                  <h2>Website Development</h2>
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs.
                  </p>
                </div>
              </div>
              <div className={`row`}>
                <div className={`col-lg-2 col-2 ${styles.servicediv}`}>
                  <i
                    style={iconColor}
                    className={`fa-3x fa fa-wifi`}
                    aria-hidden='true'
                  ></i>
                </div>
                <div className={`col-lg-10 col-10`}>
                  <h2>Digital Marketing</h2>
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs.
                  </p>
                </div>
              </div>
              <div className={`row`}>
                <div className={`col-lg-2 col-2 ${styles.servicediv}`}>
                  <i
                    style={iconColor}
                    className={`fa-3x fa fa-phone`}
                    aria-hidden='true'
                  ></i>
                </div>
                <div className={`col-lg-10 col-10`}>
                  <h2>Support24/7</h2>
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

FeaturedProducts.propTypes = {};

const iconColor = {
  color: "#2fccd0"
};

export default FeaturedProducts;
