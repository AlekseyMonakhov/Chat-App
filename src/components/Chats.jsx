import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";
import { Chat, UserImg, UserInfo, UserName } from "./Search";

const ChatsContainer = styled.div``;
const LastMessage = styled.p`
  font-size: 14px;
  color: lightgray;
`;
const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);
  return (
    <ChatsContainer>
      {Object.entries(chats)?.map((chat) => (
        <Chat key={chat[0]}>
          <UserImg src={chat[1].userInfo.photoURL} />
          <UserInfo>
            <UserName>{chat[1].userInfo.displayName}</UserName>
            <LastMessage>{chat[1].userInfo.lastMessage?.text}</LastMessage>
          </UserInfo>
        </Chat>
      ))}
    </ChatsContainer>
  );
};

export default Chats;
