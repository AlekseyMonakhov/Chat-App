import React from "react";
import styled from "styled-components";
import { Chat, UserImg, UserInfo, UserName } from "./Search";

const ChatsContainer = styled.div``;
const LastMessage = styled.p`
  font-size: 14px;
  color: lightgray;
`;
const Chats = () => {
  return (
    <ChatsContainer>
      <Chat>
        <UserImg src='https://images.unsplash.com/photo-1662695088711-acfdfda51c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
        <UserInfo>
          <UserName>Jane</UserName>
          <LastMessage>Hello</LastMessage>
        </UserInfo>
      </Chat>
      <Chat>
        <UserImg src='https://images.unsplash.com/photo-1662695088711-acfdfda51c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
        <UserInfo>
          <UserName>Jane</UserName>
          <LastMessage>Hello</LastMessage>
        </UserInfo>
      </Chat>
      <Chat>
        <UserImg src='https://images.unsplash.com/photo-1662695088711-acfdfda51c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
        <UserInfo>
          <UserName>Jane</UserName>
          <LastMessage>Hello</LastMessage>
        </UserInfo>
      </Chat>
      <Chat>
        <UserImg src='https://images.unsplash.com/photo-1662695088711-acfdfda51c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
        <UserInfo>
          <UserName>Jane</UserName>
          <LastMessage>Hello</LastMessage>
        </UserInfo>
      </Chat>
    </ChatsContainer>
  );
};

export default Chats;
