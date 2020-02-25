import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import style from "../../../css/ecommerce/Store.module.css";
import Image from "../../../img/placeholder.png";
import { getAllProducts } from "../../../actions/ecommerce/product";
import ProductCard from "../homepage/ProductCard";
import PropTypes from "prop-types";
import { getProfileById } from "../../../actions/profile";

const Store = ({
  getAllProducts,
  product: { loading, products },
  auth,
  match,
  getProfileById,
  profile: { profile }
  // profile: {
  //   user: { name }
  // }
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
    getAllProducts();
  }, [getAllProducts, getProfileById, loading, match.params.id]);

  return (
    <Fragment>
      {/* {console.log("start here", profile, "profile")} */}
      <section
        className={`${style.page_section} ${style.h_pt3} ${style.h_mb3} ${style.h_pb0}  ${style._border_bottom} ${style._theme_elite}`}
      >
        <div className={style.grid_container}>
          <div className={`${style.user_info_header} ${style.h_mb0}`}>
            <div className={`${style.user_info_header__user_details}`}>
              <img alt='dream_space' src={Image} width='80' height='80' />
              <div
                className={`${style.user_info_header__content} ${style.h_ml2}`}
              >
                <a
                  className={`${style.t_link} ${style._decoration_none}`}
                  href='#'
                >
                  <h1
                    className={`${style.t_heading} ${style.h_display_inlineblock} ${style.h_m0} ${style.h_p0} ${style._size_m}`}
                  >
                    {/* {profile.user.name} */}name
                  </h1>
                </a>

                <p
                  className={`${style.t_body} ${style._size_m} ${style.h_p0} ${style.h_mb0}`}
                >
                  Indonesia, Member since January 2015
                </p>

                {/* <div className={style.user_info_header__cta_buttons}>
                  <a
                    className={`${style.e_btn} ${style} ${style._color_primary}`}
                    href='#'
                  >
                    View Profile
                  </a>
                </div> */}
              </div>
            </div>

            <div className={style.user_info_header__user_stats}>
              <div
                className={`${style.user_info_header__stats} ${style.h_mx2}`}
              >
                <div>
                  <div className={`${style.user_info_header__stats_label}`}>
                    <strong className={style.t_body}>Author Rating</strong>
                  </div>
                  <div
                    className={`${style.user_info_header__stats} -extra-padding`}
                  >
                    <div className={`star-rating`}>
                      <b className={`star-rating__star--full`}></b>
                      <b className={`star-rating__star--full`}></b>
                      <b className={`star-rating__star--full`}></b>
                      <b className={`star-rating__star--full`}></b>
                      <b className={`star-rating__star--full`}></b>
                      <span className={`is-visually-hidden`}>4.80 stars</span>
                    </div>
                    <span className={`${style.t_body} ${style._size_s}`}>
                      (545 ratings)
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`${style.user_info_header__stats} ${style.h_ml2}`}
              >
                <div className={style.user_info_header__stats_label}>
                  <span className={style.t_body}>Sales</span>
                </div>
                <div className={style.user_info_header__stats_label}>
                  <strong className={`${style.t_heading} ${style._size_m}`}>
                    7,337
                  </strong>
                </div>
              </div>
            </div>
          </div>

          <div className={`${style.user_info_header} ${style.h_pt3}`}>
            <div className={style.page_tabs}>
              <ul>
                <li>
                  <a
                    className={`${style.t_link} ${style._decoration_none}`}
                    href='#'
                  >
                    Profile
                  </a>
                </li>
                <li className={style.selected}>
                  <a
                    className={`style.t_link} ${style._decoration_none}`}
                    href='#'
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className={`container-fluid`}>
        <div className={`row`}>
          {!loading && products.length > 0 ? (
            products.map(product => (
              <ProductCard key={product._id} product={product} auth={auth} />
            ))
          ) : (
            <div className={style.lead}>No products found</div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

Store.propTypes = {
  product: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product,
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, {
  getAllProducts,
  getProfileById
})(Store);
