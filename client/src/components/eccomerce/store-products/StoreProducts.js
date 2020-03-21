import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  // getAllProductsForStore,
  deleteTestcaseForProject
} from '../../../actions/testing/project';
import { getAllProductsForStore } from '../../../actions/ecommerce/product';
import styles from '../../../css/testing/projects-testcases/style.module.css';
import SideNav from '../../layout/SideNav';
import Alert from '../../layout/Alert';
import Footer from '../../layout/Footer';

const StoreProducts = ({
  product: { loading, products },
  getAllProductsForStore,
  match,
  deleteTestcaseForProject
}) => {
  useEffect(() => {
    getAllProductsForStore(match.params.id);
  }, [getAllProductsForStore, match.params.id]);

  return (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <div className={styles.heading}>
            <i className='fas fa-user'></i> Store products
          </div>
          <div className={styles.sub_heading}>
            Below is a list of all the products in the store
          </div>
          <Button
            variant='primary'
            className={`my-3 ${styles.btn_primary}`}
            href={`/ecommerce/store/products/${match.params.id}/create-product`}
          >
            <i className='fas fa-users'></i> Create new product
          </Button>

          {!loading && products.length > 0 ? (
            <Table striped hover>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>
                      <Button
                        variant='danger'
                        onClick={() =>
                          deleteTestcaseForProject(match.params.id, product._id)
                        }
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div className={styles.sub_heading}>No products found</div>
          )}
        </div>
      </section>

      <Footer styles={styles} />
    </Fragment>
  );
};

StoreProducts.propTypes = {
  getAllProductsForStore: PropTypes.func.isRequired,
  deleteTestcaseForProject: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(mapStateToProps, {
  getAllProductsForStore,
  deleteTestcaseForProject
})(StoreProducts);
