import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "../../../css/ecommerce/ServiceSection.module.css";

const FeaturedProducts = () => {
  return (
    <Fragment>
      <div class={styles.services_section}>
        <div class={styles.inner_width}>
          <h1 class={styles.section_title}>Our Services</h1>
          <div class={styles.border}></div>
          <div class={styles.services_container}>
            <div class={styles.service_box}>
              <div class={styles.service_icon}>
                <i class='fas fa-paint-brush'></i>
              </div>
              <div class={styles.service_title}>Web Designs</div>
              <div class={styles.service_desc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                eaque ratione rem porro, nihil.
              </div>
            </div>

            <div class={styles.service_box}>
              <div class={styles.service_icon}>
                <i class='fas fa-code'></i>
              </div>
              <div class={styles.service_title}>Web Development</div>
              <div class={styles.service_desc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                eaque ratione rem porro, nihil.
              </div>
            </div>

            <div class={styles.service_box}>
              <div class={styles.service_icon}>
                <i class='fas fa-brush'></i>
              </div>
              <div class={styles.service_title}>Responsive Designs</div>
              <div class={styles.service_desc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                eaque ratione rem porro, nihil.
              </div>
            </div>

            <div class={styles.service_box}>
              <div class={styles.service_icon}>
                <i class='fas fa-object-ungroup'></i>
              </div>
              <div class={styles.service_title}>Product Components</div>
              <div class={styles.service_desc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                eaque ratione rem porro, nihil.
              </div>
            </div>

            <div class={styles.service_box}>
              <div class={styles.service_icon}>
                <i class='fas fa-database'></i>
              </div>
              <div class={styles.service_title}>Softwares</div>
              <div class={styles.service_desc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                eaque ratione rem porro, nihil.
              </div>
            </div>

            <div class={styles.service_box}>
              <div class={styles.service_icon}>
                <i class='fab fa-android'></i>
              </div>
              <div class={styles.service_title}>Android</div>
              <div class={styles.service_desc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                eaque ratione rem porro, nihil.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

FeaturedProducts.propTypes = {};

export default FeaturedProducts;
