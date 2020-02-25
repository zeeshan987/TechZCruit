import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Styles from "../../../css/ecommerce/ProductCard.module.css";
import Image from "../../../img/placeholder.png";
import { Button } from "react-bootstrap";

const Products = ({
  product: {
    _id,
    productTitle,
    productDescription,
    productTechnology,
    price,
    rating,
    sales
  },
  auth
}) => {
  return (
    <Fragment>
      <div className={`col-md-3`} style={bottomspace}>
        <div className={Styles.card}>
          <div className={Styles.top_section}>
            <img src={Image} alt='' />
            <div className={Styles.menuicon}>
              <span className={Styles.s1}></span>
              <span className={Styles.s2}></span>
            </div>
            <div className={Styles.name}>
              <br />
              <span></span>
            </div>
          </div>

          <div className={Styles.info_section}>
            <h2 style={heading}>
              {productTitle}
              <div className={Styles.border}></div>
            </h2>
            <p className={`truncate`} style={paragragh}>
              {productDescription}
            </p>
            <div className={Styles.inlineelement}>
              <h2 style={heading}>Rating</h2>
              <p className={`${Styles.s_m} ${Styles.grey}`} style={Price}>
                {" "}
                {/* {rating > 0 ? rating : 0} */}
              </p>
              <span
                className={`fa fa-star ${Styles.checked}`}
                style={Inline}
              ></span>
            </div>

            <div className={Styles.inlineelement}>
              <h2 style={heading}>Price:</h2>
              <p className={`${Styles.s_m} ${Styles.grey}`} style={Price}>
                {price}$
              </p>
              <span style={Inline}>
                Sales:
                {sales}
              </span>
            </div>
            <button className={Styles.cardbutton} style={Price}>
              {" "}
              <Link
                to={`/ecommerce/product/${_id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                View Product
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;

const heading = {
  marginTop: "5px",
  position: "relative",
  "font-size": "1rem",
  "font-weight": "600"
};
const Price = {
  "font-size": "16px",
  "margin-right": "50px"
};

const paragragh = {
  textalign: "justify",
  "line-height": "1.2",
  fontsize: "12px",
  display: "block",
  "margin-block-start": "0.2em",
  "margin-block-end": "0.2em",
  "white-space": "nowrap",
  overflow: "hidden",
  "text-overflow": "ellipsis"
};
const Inline = {
  display: "inline"
};
const bottomspace = {
  "margin-bottom": "25px"
};
