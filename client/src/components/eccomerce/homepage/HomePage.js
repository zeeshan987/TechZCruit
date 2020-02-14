import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import Spinner from "../../../components/layout/Spinner";
import { connect } from "react-redux";
import style from "../../../css/ecommerce/ProductPage.module.css";

const HomePage = () => {
  return (
    <Fragment>
      <div class={style.header} id='topheader'>
        <section class={style.header_section}>
          <div class={style.center_div}>
            <h1 class={`font-weight-bold`}>Welcome to Digital Shop</h1>
            <p class={`web-paragragh`}>We create world best websites</p>
            <div class={style.header_buttons}>
              <a href='#'>AboutUs</a>
              <a href='#'>Contact</a>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- ************ header part end ************ --> */}
      <section class={style.header_div}>
        <div class={`container`}>
          <div class={`row`}>
            <div class={`${style.extra_div} col-lg-4 col-md-4 col-12`}>
              <a href='#'>
                <i class={`fa-3x fa fa-desktop`}></i>{" "}
              </a>
              <h2>EASY TO USE</h2>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
            </div>
            <div class={`${style.extra_div} col-lg-4 col-md-4 col-12`}>
              <a href='#'>
                <i class='fa-3x fa fa-trophy' aria-hidden='true'>
                  {" "}
                </i>
              </a>
              <h2>AWESOME DESIGN</h2>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
            </div>
            <div class={`${style.extra_div} col-lg-4 col-md-4 col-12`}>
              <a href='#'>
                <i class={`fa-3x fa fa-magic`} aria-hidden='true'>
                  {" "}
                </i>
              </a>
              <h2>EASY TO CSTOMIZE</h2>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ************ Three header div start ************ --> */}
      <section class={style.serviceoffers} id='servicediv'>
        <div class={`container ${style.headings} text-center`}>
          <h1 class={`text-center font-weight-bold`}>What do we offer</h1>
          <p class={`text-center`}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.
          </p>
        </div>
        <div class={`container`}>
          <div class={`row`}>
            <div class={`col-lg-6 col-md-12 col-10 offset-lg-0`}>
              <div class={`${style.names} my-3`}>
                <h1>Html</h1>
                <div class={`${style.progress} w-75`}>
                  <div
                    class={`progress-bar progress-bar-striped progress-bar-animated`}
                    style={{ width: "100%" }}
                  >
                    100%
                  </div>
                </div>
              </div>
              <div class={`${style.names} my-3`}>
                <h1>Css</h1>
                <div class={`${style.progress} w-75`}>
                  <div
                    class={`progress-bar progress-bar-striped progress-bar-animated bg-warning`}
                    style={{ width: "100%" }}
                  >
                    90%
                  </div>
                </div>
              </div>
              <div class={`${style.names} my-3`}>
                <h1>React</h1>
                <div class='progress w-75'>
                  <div
                    class={`progress-bar progress-bar-striped progress-bar-animated bg-secondary`}
                    style={{ width: "100%" }}
                  >
                    65%
                  </div>
                </div>
              </div>
              <div class={`${style.names} my-3`}>
                <h1>Jacavascript</h1>
                <div class={`${style.progress} w-75`}>
                  <div
                    class={`progress-bar progress-bar-striped progress-bar-animated bg-info`}
                    style={{ width: "100%" }}
                  >
                    70%
                  </div>
                </div>
              </div>
              <div class={`${style.names} my-3`}>
                <h1>Css</h1>
                <div class={`${style.progress} w-75`}>
                  <div
                    class={`progress-bar progress-bar-striped progress-bar-animated bg-success`}
                    style={{ width: "100%" }}
                  >
                    80%
                  </div>
                </div>
              </div>
            </div>
            <div class={`col-lg-6 col-md-12 col-12 ${style.servicediv}`}>
              <div class={`row`}>
                <div class={`col-lg-2 col-2 ${style.service_icons}`}>
                  <i class='fa-3x fa fa-desktop' aria-hidden='true'></i>
                </div>
                <div class={`col-lg-10 col-10`}>
                  <h2>Website Development</h2>
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs.
                  </p>
                </div>
              </div>
              <div class={`row`}>
                <div class={`col-lg-2 col-2 ${style.servicediv}`}>
                  <i class={`fa-3x fa fa-wifi`} aria-hidden='true'></i>
                </div>
                <div class={`col-lg-10 col-10`}>
                  <h2>Digital Marketing</h2>
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs.
                  </p>
                </div>
              </div>
              <div class={`row`}>
                <div class={`col-lg-2 col-2 ${style.servicediv}`}>
                  <i class={`fa-3x fa fa-phone`} aria-hidden='true'></i>
                </div>
                <div class={`col-lg-10 col-10`}>
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
      {/* <!-- ************ three header div end ************ --> */}
    </Fragment>
  );
};

HomePage.propTypes = {};

export default HomePage;
// export default connect(mapStateToProps, { getCampaignById })(Campaign);

