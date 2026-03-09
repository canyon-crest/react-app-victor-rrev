import React from "react";

function Message(props) {
  return (
    <div>
      <h2>Message:</h2>
      <p>{props.text}</p>

      <h3>From:</h3>
      <p>{props.name}</p>
    </div>
  );
}

export default Message;