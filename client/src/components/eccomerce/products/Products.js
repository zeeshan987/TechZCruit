import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllProducts } from "../../../actions/ecommerce/product";
import style from "../../../css/ecommerce/Products.module.css";
import ProductCard from "../homepage/ProductCard";

const Products = ({ getAllProducts, product: { loading, products }, auth }) => {
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts, loading]);

  return (
    <Fragment>
      <div
        className={`container-fluid`}
        // style='min-height: 130px; border-bottom: 1px solid #e6e6e6;'
      >
        <form className={`form-inline my-2 my-lg-0 `}>
          <input
            className={`form-control`}
            type='search'
            placeholder='Search within these results'
            aria-label='Search'
            // style='width: 1155px; height: 55px;'
          />
          <button className={style.btn} type='submit'>
            Search
          </button>
        </form>
        <div className={style.searchHeading}>
          <h1 className={style.heading}>
            Ready to create an app? With our 8,427 mobile app templates built by
            our creative community -- of course you are
          </h1>
        </div>
      </div>

      <div className={`container-fluid  mt-3`}>
        <div className={`row`}>
          <div className={`col-md-4`}>
            <h1
              className={`heading`}
              // style='font-size: 16px; font-weight: 550; color: black;'
            >
              Filter & Refine
            </h1>
          </div>
          <div className={`col-md-8`}>
            <div className={`row`}>
              <div className={`col-md-4`}></div>
              <div className={`col-md-8`}>
                <div className={`row`}>
                  <div
                    className={`col-md-4`}
                    // style='border-right: 2px solid #eaeaea;'
                  >
                    <h1 className={style.heading}>Find your product here</h1>
                  </div>
                  <div
                    className={`col-md-8 btn-group`}
                    // style='padding-left: 55px;'
                  >
                    {/* <button className={style.categoryBtn} type='submit'>
                      Best Sellers
                    </button>
                    <button className={style.categoryBtn} type='submit'>
                      Newest
                    </button>
                    <button className={style.categoryBtn} type='submit'>
                      Best Rated
                    </button>
                    <button className={style.categoryBtn} type='submit'>
                      Trending
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`container-fluid`}>
        <div className={`row`}>
          <div className={`col-md-4`}>
            {/* <ul className={style.sideBar}>
              <li>
                <a
                  className={`nav-link1 nav-link-ltr collapsed`}
                  data-toggle='collapse'
                  role='button'
                  href='#shop-woman'
                  // style='opacity: 1;'
                  aria-expanded='false'
                >
                  Tags
                </a>
                <ul className={`sub nav collapse show`} id='shop-woman'>
                  <div className={`tagMenu`}>
                    <input
                      className={`form-check-input`}
                      type='checkbox'
                      value=''
                      id='defaultCheck1'
                      // style='transform: scale(1);'
                    />
                    <label
                      className={`form-check-label`}
                      htmlFor='defaultCheck1'
                    >
                      Android
                    </label>
                  </div>
                  <div className={style.tagMenu}>
                    <input
                      className={`form-check-input`}
                      type='checkbox'
                      value=''
                      id='defaultCheck1'
                      // style='transform: scale(1);'
                    />
                    <label
                      className={`form-check-label`}
                      htmlFor='defaultCheck1'
                    >
                      Android
                    </label>
                  </div>
                  <div className={`tagMenu`}>
                    <input
                      className={`form-check-input`}
                      type='checkbox'
                      value=''
                      id='defaultCheck1'
                      // style='transform: scale(1);'
                    />
                    <label
                      className={`form-check-label`}
                      htmlFor='defaultCheck1'
                    >
                      Android
                    </label>
                  </div>
                </ul>
              </li>
            </ul> */}
          </div>
          <div className={`col-md-8`}></div>
        </div>
      </div>
      <div className={`container-fluid`}>
        <div className={`row`}>
          {!loading && products.length > 0 ? (
            products.map(product => (
              <ProductCard key={product._id} product={product} auth={auth} />
            ))
          ) : (
            <div className={`lead`}>No products found</div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

Products.propTypes = {
  product: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product,
  auth: state.auth
});

export default connect(mapStateToProps, {
  getAllProducts
})(Products);
