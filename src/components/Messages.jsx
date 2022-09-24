import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const MessageContainer = styled.div`
  background-color: #ddddf7;
  padding: 10px;
  height: calc(100% - 100px);
  overflow-x: hidden;
  overflow-y: scroll;
`;

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const onSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return () => {
      onSub();
    };
  }, [data.chatId]);

  return (
    <MessageContainer>
      {messages.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </MessageContainer>
  );
};

export default Messages;
