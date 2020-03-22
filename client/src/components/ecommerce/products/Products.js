import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  getAllProducts,
  searchProduct
} from '../../../actions/ecommerce/product';
import ProductItem from './ProductItem';
import styles from '../../../css/crowdfunding/campaigns/style.module.css';
import SideNav from '../../layout/SideNav';
import Alert from '../../layout/Alert';
import Footer from '../../layout/Footer';

const Products = ({
  getAllProducts,
  product: { loading, products },
  searchProduct
}) => {
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

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
      searchProduct(description);
    }
  };

  return (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <div className={styles.heading}>
            <i className='fas fa-user'></i> Products
          </div>
          <div className={styles.sub_heading}>
            Below is a list of all the products
          </div>
          <Form onSubmit={e => onSubmit(e)}>
            <Form.Group>
              <Form.Control
                type='text'
                name='description'
                value={description}
                placeholder='Search products'
                onChange={e => onChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Button type='submit' hidden />
            </Form.Group>
          </Form>
          <Row>
            {!loading && products.length > 0 ? (
              products.map(product => (
                <ProductItem
                  key={product._id}
                  product={product}
                  styles={styles}
                />
              ))
            ) : (
              <div className={styles.sub_heading}>No products found</div>
            )}
          </Row>
        </div>
      </section>

      <Footer styles={styles} />
    </Fragment>
  );
};

Products.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  searchProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(mapStateToProps, {
  getAllProducts,
  searchProduct
})(Products);
