import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getAllProducts,
  getAllUsers
} from '../../../actions/ecommerce/product';
import styles from '../../../css/ecommerce/ProductPage.module.css';
import ServiceSection from './ServiceSection';
import ProductCard from './ProductCard';
import MultiCarousel from '../carousel/MultiCarousel';
import SideNav from '../../layout/SideNav';
import Footer from '../../layout/Footer';
import Alert from '../../layout/Alert';

const HomePage = ({
  getAllProducts,
  product: { loading, products, users },
  auth,
  getAllUsers
}) => {
  useEffect(() => {
    getAllProducts();
    getAllUsers();
  }, [getAllProducts, loading, getAllUsers]);

  return (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <div className={styles.header} id='topheader'>
            <section className={styles.header_section}>
              <div className={styles.center_div}>
                <h1 className={`font-weight-bold`}>Welcome to Digital Shop</h1>
                <p className={`web-paragragh`}>We create world best websites</p>
                <div className={styles.header_buttons}>
                  <a href='./products'>Search Product</a>
                </div>
              </div>
            </section>
          </div>
          {/* <!-- ************ header part end ************ --> */}
          <section className={styles.header_div}>
            <div className={`container`} style={container}>
              <div className={`row`}>
                <div className={`${styles.extra_div} col-lg-4 col-md-4 col-12`}>
                  <a href='#'>
                    <i className={`fa-3x fa fa-desktop`}></i>{' '}
                  </a>
                  <h2>EASY TO USE</h2>
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs.
                  </p>
                </div>
                <div className={`${styles.extra_div} col-lg-4 col-md-4 col-12`}>
                  <a href='#'>
                    <i className='fa-3x fa fa-trophy' aria-hidden='true'>
                      {' '}
                    </i>
                  </a>
                  <h2>AWESOME DESIGN</h2>
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs.
                  </p>
                </div>
                <div className={`${styles.extra_div} col-lg-4 col-md-4 col-12`}>
                  <a href='#'>
                    <i className={`fa-3x fa fa-magic`} aria-hidden='true'>
                      {' '}
                    </i>
                  </a>
                  <h2>EASY TO CSTOMIZE</h2>
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- ************ Three header div start ************ --> */}
          <ServiceSection />
          {/* <!-- ************ three header div end ************ --> */}
          {/* Stores */}
          <div className={styles.padcontainer}>
            <div className={`container ${styles.headings} text-center`}>
              <h1 className={`text-center font-weight-bold`}>
                OUR FEATURED STORES
              </h1>
              <p className={`text-center`}>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
            </div>
            <div className={styles.padlr}>
              {!loading && users.length >= 0
                ? users.map(user => <MultiCarousel user={user} />)
                : 'No Store Created'}
            </div>
            {/* Products */}
            <div className={`container headings text-center`}>
              <h1 className={`text-center font-weight-bold`}>
                OUR FEATURED PRODUCTS
              </h1>
              <h5 className={`text-capitalilize pt-1`}>OUR BEST PRODUCTS</h5>
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
                  <div className='lead'>No products found</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer styles={styles} />
    </Fragment>
  );
};

HomePage.propTypes = {
  product: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  getAllUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  product: state.product,
  auth: state.auth
});

export default connect(mapStateToProps, { getAllProducts, getAllUsers })(
  HomePage
);
const container = {
  'max-width': '720px',
  'min-width': '70%'
};
