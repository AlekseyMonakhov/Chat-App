import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
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
  const { dispatch } = useContext(ChatContext);

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
  const handleSelect = (u) => {
    dispatch({type:"CHANGE_USER",payload: u})
  };
  return (
    <ChatsContainer>
      {Object.entries(chats)?.sort((a,b) => b[1].date - a[1].date).map((chat) => (
        <Chat
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <UserImg src={chat[1].userInfo.photoURL} />
          <UserInfo>
            <UserName>{chat[1].userInfo.displayName}</UserName>
            <LastMessage>{chat[1].lastMessage?.text}</LastMessage>
          </UserInfo>
        </Chat>
      ))}
    </ChatsContainer>
  );
};

export default Chats;
