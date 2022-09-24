import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const MessageContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.owner ? "row" : "row-reverse")};
  gap: 20px;
  p {
    max-width: max-content;
    align-self: ${(props) => (props.owner ? "flex-start" : "flex-end")};
    background-color: ${(props) => (props.owner ? "white" : "#8da4f1")};
    color: ${(props) => (props.owner ? "black" : "white")};
    padding: 10px;
    border-radius: ${(props) =>
      props.owner ? "0px 10px 10px 10px" : "10px 0px 10px 10px"};
  }
  img {
    align-self: ${(props) => (props.owner ? "flex-start" : "flex-end")};
    object-fit: cover;
    max-width: 65%;
  }
`;
const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
  font-weight: 300;
  padding-bottom: 20px;
`;
const MessageContent = styled.div`
  max-width: 80%;
  min-width: 25%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
`;
const Img = styled.img`
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const MessageDesc = styled.span``;

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  return (
    <MessageContainer owner={message.senderId === currentUser.uid ? true : false}>
      <MessageInfo>
        <Img
          src={message.img}
          alt='User Photo'
        />
        <MessageDesc>just now</MessageDesc>
      </MessageInfo>
      <MessageContent>
        <p>{message.text}</p>
        <img
          src={message.img}
          alt='user foto'
        />
      </MessageContent>
    </MessageContainer>
  );
};

export default Message;
