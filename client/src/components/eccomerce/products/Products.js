import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getAllProducts,
  searchProduct
} from '../../../actions/ecommerce/product';
import style from '../../../css/ecommerce/Products.module.css';
import ProductCard from '../homepage/ProductCard';
import { Form, Row, Button } from 'react-bootstrap';
import SideNav from '../../layout/SideNav';
import Footer from '../../layout/Footer';
import Alert from '../../layout/Alert';

const Products = ({
  getAllProducts,
  product: { loading, products },
  auth,
  searchProduct
}) => {
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts, loading]);

  const [formData, setFormData] = useState({
    description: ''
  });

  const { description } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (description === '') {
      getAllProducts();
    } else {
      console.log(description);
      searchProduct(description);
    }
  };

  return (
    <Fragment>
      <section className={style.section}>
        <SideNav styles={style} />

        <div className={style.content}>
          <Alert />
          <div
            className={`container-fluid`}
            // style='min-height: 130px; border-bottom: 1px solid #e6e6e6;'
          >
            <Form onSubmit={e => onSubmit(e)}>
              <Form.Group>
                <Form.Control
                  type='text'
                  name='description'
                  value={description}
                  placeholder='Search Products'
                  onChange={e => onChange(e)}
                />
              </Form.Group>
              {/* <Form.Group>
            <Button type='submit' />
          </Form.Group> */}
            </Form>
            {/* <form
          className={`form-inline my-2 my-lg-0 `}
          onSubmit={e => onSubmit(e)}
        >
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
        </form> */}
            <div className={style.searchHeading}>
              <h1 className={style.heading}>
                Ready to create or buy an app? With our software apps built by
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
                        <h1 className={style.heading}>
                          Find your product here
                        </h1>
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
              <div className={`col-md-4`}></div>
              <div className={`col-md-8`}></div>
            </div>
          </div>
          <div className={`container-fluid`}>
            <div className={`row`}>
              {!loading && products.length > 0 ? (
                products.map(product => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    auth={auth}
                  />
                ))
              ) : (
                <div className={`lead`}>No products found</div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer styles={style} />
    </Fragment>
  );
};

Products.propTypes = {
  product: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  searchProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  product: state.product,
  auth: state.auth
});

export default connect(mapStateToProps, {
  getAllProducts,
  searchProduct
})(Products);
