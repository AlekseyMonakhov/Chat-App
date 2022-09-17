import React from "react";
import styled from "styled-components";

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

const Message = () => {
  return (
    <MessageContainer owner={true}>
      <MessageInfo>
        <Img
          src='https://images.unsplash.com/photo-1663343682877-94ca0839f383?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
          alt='User Photo'
        />
        <MessageDesc>just now</MessageDesc>
      </MessageInfo>
      <MessageContent>
        <p>Hello</p>
        <img
          src='https://images.unsplash.com/photo-1663360641928-3dd68e3d7e7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
          alt='user foto'
        />
      </MessageContent>
    </MessageContainer>
  );
};

export default Message;
