import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Join.module.css";

const Join = props => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Fragment>
      <div className={style.joinOuterContainer}>
        <div className={style.joinInnerContainer}>
          <h1 className={style.heading}>Join</h1>
          <div>
            <input
              placeholder='Name'
              className={style.joinInput}
              type='text'
              onChange={event => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder='Room'
              className={`${style.joinInput} mt-20`}
              type='text'
              onChange={event => setRoom(event.target.value)}
            />
          </div>
          <Link
            onClick={e => (!name || !room ? e.preventDefault() : null)}
            to={`/chatapp/chat?name=${name}&room=${room}`}
          >
            <button className={`${style.button} mt-20`} type='submit'>
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

Join.propTypes = {};

export default Join;