import React, { useContext } from "react";
import styled from "styled-components";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
const ChatContainer = styled.div`
  flex: 2;
`;
const ChatInfo = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: lightgray;
  background-color: #5d5b8d;
`;
const UserName = styled.span``;
const ChatIcons = styled.div`
  display: flex;
  gap: 10px;
`;
const ChatImg = styled.img`
  height: 24px;
  cursor: pointer;
`;

const Chat = () => {
  const {data} = useContext(ChatContext);
  return (
    <ChatContainer>
      <ChatInfo>
        <UserName>{data.user?.displayName}</UserName>
        <ChatIcons>
          <ChatImg
            src={Cam}
            alt='Camera'
          />
          <ChatImg
            src={Add}
            alt='Add'
          />
          <ChatImg
            src={More}
            alt='More'
          />
        </ChatIcons>
      </ChatInfo>
      <Messages />
      <Input />
    </ChatContainer>
  );
};

export default Chat;
