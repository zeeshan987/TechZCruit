import React, { Fragment } from "react";
import style from "../../../css/ecommerce/ProductDetail.module.css";
import Image from "../../../img/placeholder.png";
import ReviewForm from "./ReviewForm";

const ReviewSection = ({ product: { _id, reviews }, auth }) => {
  return (
    <Fragment>
      <div className={style.row}>
        <div className={style.col_lg_6}>
          <div className={`${style.row} ${style.total_rate}`}>
            <div className={`col-6`}>
              <div className={style.box_total}>
                <h5>Out of</h5>
                <h4>5.0</h4>
                {/* <h6>(03 Reviews)</h6> */}
              </div>
            </div>
            <div className={`col-6`}></div>
          </div>
          {reviews.length > 0 ? (
            reviews.map(review => (
              <div className={`review_list`}>
                <div className={style.review_item}>
                  <div className={style.media}>
                    <div className={style.d_flex}>
                      <img
                        className={`${style.image} rounded-circle`}
                        src={review.user !== null ? review.user.avatar : ""}
                        alt={Image}
                        style={imageStyle}
                      />
                    </div>
                    <div className={style.media_body}>
                      <h4>
                        <strong>{review.user.name}</strong>
                      </h4>
                      <i className={`fa fa-star`}></i>
                      <i className={`fa fa-star`}></i>
                      <i className={`fa fa-star`}></i>
                      <i className={`fa fa-star`}></i>
                      <i className={`fa fa-star`}></i>
                    </div>
                  </div>
                  <p>{review.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div className={style.lead}>No Reviews found</div>
          )}
        </div>
        <div className={style.col_lg_6}>
          <div className={style.review_box}>
            <h4>Add a Review</h4>
            <p>Your Rating:</p>
            <ul className={style.list}>
              <li>
                <a href='#'>
                  <i className={`fa fa-star`}></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className={`fa fa-star`}></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className={`fa fa-star`}></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className={`fa fa-star`}></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className={`fa fa-star`}></i>
                </a>
              </li>
            </ul>
            <p>Outstanding</p>
            <ReviewForm productId={_id} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const imageStyle = {
  borderRadius: "50%",
  width: "35px",
  height: "35px"
};

export default ReviewSection;
