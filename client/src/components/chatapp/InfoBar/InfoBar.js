import React, { Fragment } from "react";
import style from "./InfoBar.module.css";
import closeIcon from "../../../img/icons/closeIcon.png";
import onlineIcon from "../../../img/icons/onlineIcon.png";

const InfoBar = ({ room }) => {
  return (
    <Fragment>
      <div className={style.infoBar}>
        <div className={style.leftInnerContainer}>
          <img
            className={style.onlineIcon}
            src={onlineIcon}
            alt='online icon'
          />
          <h3>{room}</h3>
        </div>
        <div className={style.rightInnerContainer}>
          <a href='/chatapp/join'>
            <img src={closeIcon} alt='close icon' />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default InfoBar;
