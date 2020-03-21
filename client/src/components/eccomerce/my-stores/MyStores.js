import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyStoreItem from './MyStoreItem';
import { Button } from 'react-bootstrap';
import SideNav from '../../layout/SideNav';
import Alert from '../../layout/Alert';
import Footer from '../../layout/Footer';
import styles from '../../../css/ecommerce/my-stores/style.module.css';
import { getAllStoresForCurrentUser } from '../../../actions/ecommerce/store';

const MyStores = ({
  store: { loading, stores },
  getAllStoresForCurrentUser
}) => {
  useEffect(() => {
    getAllStoresForCurrentUser();
  }, [getAllStoresForCurrentUser]);

  return (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <h1 className={styles.heading}>
            <i className='fas fa-user'></i> My Stores
          </h1>
          <div className={styles.sub_heading}>
            Below is a list of all the stores you have created
          </div>
          <Button
            variant='primary'
            className={styles.btn_primary}
            href='/ecommerce/create-store'
          >
            <i className='fas fa-users'></i> Create new store
          </Button>
          {!loading && stores.length > 0 ? (
            stores.map(store => <MyStoreItem store={store} styles={styles} />)
          ) : (
            <div className={styles.sub_heading}>No stores found</div>
          )}
        </div>
      </section>

      <Footer styles={styles} />
    </Fragment>
  );
};

MyStores.propTypes = {
  getAllStoresForCurrentUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  store: state.store
});

export default connect(mapStateToProps, {
  getAllStoresForCurrentUser
})(MyStores);
