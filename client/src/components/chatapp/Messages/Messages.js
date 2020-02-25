import React, { Fragment } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message/Message";

const Messages = ({ messages, name }) => {
  return (
    <Fragment>
      <ScrollToBottom style={messag}>
        {messages.map((message, i) => (
          <div key={i}>
            <Message message={message} name={name} />
          </div>
        ))}
      </ScrollToBottom>
    </Fragment>
  );
};

Messages.propTypes = {};

export default Messages;
const messag = {
  padding: "5% 0",
  overflow: "auto",
  flex: "auto"
};
