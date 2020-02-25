import React, { Fragment } from "react";
import style from "./Input.module.css";

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <Fragment>
      <form className={style.form}>
        <input
          className={style.input}
          type='text'
          placeholder='Type a message...'
          value={message}
          // onChange={({ target: { value } }) => setMessage(value)}
          onChange={e => setMessage(e.target.value)}
          onKeyPress={event =>
            event.key === "Enter" ? sendMessage(event) : null
          }
        />
        <button className={style.sendButton} onClick={e => sendMessage(e)}>
          Send
        </button>
      </form>
    </Fragment>
  );
};

Input.propTypes = {};

export default Input;
