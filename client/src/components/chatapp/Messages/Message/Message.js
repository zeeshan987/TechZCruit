import React, { Fragment } from "react";
import style from "./Message.module.css";
import ReactEmoji from "react-emoji";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return (
    // <Fragment>
    isSentByCurrentUser ? (
      <div className={`${style.messageContainer} ${style.justifyEnd}`}>
        <p className={`${style.sentText} pr-10`}>{trimmedName}</p>
        <div className={`${style.messageBox} ${style.backgroundBlue}`}>
          <p className={`${style.messageText} ${style.colorWhite}`}>
            {ReactEmoji.emojify(text)}
          </p>
        </div>
      </div>
    ) : (
      <div className={`${style.messageContainer} ${style.justifyStart}`}>
        <div className={`${style.messageBox} ${style.backgroundLight}`}>
          <p className={`${style.messageText} ${style.colorDark}`}>
            {ReactEmoji.emojify(text)}
          </p>
        </div>
        <p className={`${style.sentText} pl-10`}>{user}</p>
      </div>
    )
    // { </Fragment> }
  );
};

Message.propTypes = {};

export default Message;
