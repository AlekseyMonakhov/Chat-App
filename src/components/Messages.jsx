import React from "react";
import styled from "styled-components";
import Message from "./Message";

const MessageContainer = styled.div`
  background-color: #ddddf7;
  padding: 10px;
  height: calc(100% - 100px);
  overflow-x: hidden;
  overflow-y: scroll;
`;

const Messages = () => {
  return (
    <MessageContainer>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </MessageContainer>
  );
};

export default Messages;
