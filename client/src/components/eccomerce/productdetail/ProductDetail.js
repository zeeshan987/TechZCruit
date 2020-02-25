import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Image from "../../../img/placeholder.png";
import style from "../../../css/ecommerce/ProductDetail.module.css";
import ProductReview from "./ProductReview";
import {
  favouriteProduct,
  unfavouriteProduct,
  getProductById
} from "../../../actions/ecommerce/product";
import { Button } from "react-bootstrap";

const ProductDetail = ({
  product: { loading, product },
  getProductById,
  match,
  auth,
  favouriteProduct,
  unfavouriteProduct
}) => {
  useEffect(() => {
    getProductById(match.params.id);
  }, [getProductById, match.params.id]);
  return (
    <Fragment>
      {!loading && product !== null && (
        <Fragment>
          {/* <!--================Single Product Area =================--> */}
          <div className={style.product_image_area}>
            <div className={`container`}>
              <div className={`${style.row} ${style.s_product_inner}`}>
                <div className={style.col_lg_6}>
                  <div className={style.setheight}>
                    <div className={`single-prd-item`}>
                      <img className={style.img_fluid} src={Image} alt='' />
                    </div>
                  </div>
                </div>
                <div className={`col-lg-5 offset-lg-1`}>
                  <div className={style.s_product_text}>
                    <h3> {product.productTitle} </h3>
                    <h2>{product.price}$</h2>
                    <ul className={style.list}>
                      <li>
                        <a className={style.active}>
                          <span>Category</span> : {product.productCategory}
                        </a>
                      </li>
                      <li>
                        <a>
                          <span>Sales</span> : {product.sales}
                        </a>
                      </li>
                      <li>
                        <a>
                          <span>Sales</span> : {product.productTechnology}
                        </a>
                      </li>
                    </ul>
                    <p>{product.productDescription}</p>

                    <div className={style.product_count}>
                      <Button className={style.btn}>BUY</Button>
                      <Button
                        className={`${style.button} ${style.primary_btn}`}
                        href='#'
                      >
                        Add to Cart
                      </Button>
                    </div>

                    <div className={`${style.card_area} ${style.d_flex}`}>
                      <a className={style.icon_btn}>
                        <Button
                          variant='dark'
                          className={style.btn_dark}
                          onClick={() => favouriteProduct(match.params.id)}
                        >
                          <i className='far fa-thumbs-up'></i>{" "}
                          <span>
                            {product.favourite.length > 0
                              ? product.favourite.length
                              : ""}
                          </span>
                        </Button>
                      </a>
                      <a className={style.icon_btn}>
                        <Button
                          variant='dark'
                          className={style.btn_dark}
                          onClick={() => unfavouriteProduct(match.params.id)}
                        >
                          <i className='far fa-thumbs-down'></i>{" "}
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End Single Product Area =--> */}

          {/* <!--Product Description Area =--> */}
          <ProductReview product={product} auth={auth} />
          {/* <!--End Product Description Area =--> */}

          {/* <!-- Start related Product area =-->   */}
        </Fragment>
      )}
    </Fragment>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
  getProductById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  favouriteProduct: PropTypes.func.isRequired,
  unfavouriteProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  product: state.product,
  auth: state.auth
});

export default connect(mapStateToProps, {
  getProductById,
  favouriteProduct,
  unfavouriteProduct
})(ProductDetail);
