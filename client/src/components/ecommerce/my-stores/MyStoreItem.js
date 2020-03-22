import React, { Fragment } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteStore } from '../../../actions/ecommerce/store';
import { Link } from 'react-router-dom';

const MyStoreItem = ({ store, deleteStore, styles }) => {
  return (
    <Fragment>
      <Row className={styles.list_item}>
        <Col md={12}>
          <Link
            to={`/ecommerce/store/${store._id}`}
            className={styles.group_name}
          >
            {store.name}
          </Link>
          <div className='mt-2'>{store.description}</div>
          <div className='mt-2'>
            <Button
              variant='primary'
              href={`/ecommerce/store/products/${store._id}`}
            >
              Manage products
            </Button>
            <Button
              variant='success'
              href={`/ecommerce/edit-store/${store._id}`}
            >
              Update store
            </Button>
            <Button variant='danger' onClick={() => deleteStore(store._id)}>
              Delete store
            </Button>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

MyStoreItem.propTypes = {
  store: PropTypes.object.isRequired,
  deleteStore: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired
};

export default connect(null, {
  deleteStore
})(MyStoreItem);
