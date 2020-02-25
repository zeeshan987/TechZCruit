import React, { Fragment, useEffect, useState } from "react";
import querystring from "query-string";
import io from "socket.io-client";
import style from "./Chat.module.css";
import inputStyle from "../Input/Input.module.css";
import InfoBar from "../InfoBar/InfoBar";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";

// let socket;

// location come from react router
const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  // const ENDPOINT = "localhost:7000";

  // let socket;
  useEffect(() => {
    const { name, room } = querystring.parse(location.search);
    // socket = io("http://localhost:6666");
    const socket = io.connect("/");
    setSocket(socket);

    socket.on("news", function(data) {
      console.log(data);
      socket.emit("my other event", { my: "data" });
    });

    setName(name);
    setRoom(room);

    //emit(Any msg we want to pass, data)
    socket.emit("join", { name, room }, error => {
      if (error) {
        alert(error);
      }
    });

    socket.on("message", message => {
      setMessages([...messages, message]);
      console.log("yahan pe message");
      console.log(message);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };

     console.log(message, messages);
  }, [messages]);

  // useEffect(() => {
  //   socket.on("message", message => {
  //     setMessages([...messages, message]);
  //   });
  // });
  const sendMessage = e => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
      console.log("call hota ha");
    }
  };

  return (
    <Fragment>
      <div className={style.outerContainer}>
        <div className={style.container}>
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
          {/* <input
            className={inputStyle.input}
            type='text'
            placeholder='Type a message...'
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={event =>
              event.key === "Enter" ? sendMessage(event) : null
            }
          />
          <button
            className={inputStyle.sendButton}
            onClick={e => sendMessage(e)}
          >
            Send
          </button> */}
        </div>
        {/* <TextContainer users={users}/> */}
      </div>
      {/* Chat page */}
    </Fragment>
  );
};

Chat.propTypes = {};

export default Chat;
