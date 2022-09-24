import React, { useContext, useState } from "react";
import styled from "styled-components";
import Img from "../img/img.png";
import Attach from "../img/attach.png";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";
import {
  arrayUnion,
  doc,
  Timestamp,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const InputContainer = styled.div`
  height: 50px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background-color: white;
`;
const InputField = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: #2f2d52;
  font-size: 18px;
  &::placeholder {
    color: lightgray;
  }
`;
const Send = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Image = styled.img`
  height: 24px;
  cursor: pointer;
`;
const InputFile = styled.input``;
const InputFileLabel = styled.label``;
const Button = styled.button`
  padding: 10px 15px;
  border: none;
  color: white;
  background-color: #8da4f1;
`;

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);
      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    setText("");
    setImg(null);
  };
  return (
    <InputContainer>
      <InputField
        type={"text"}
        placeholder='Type something...'
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <Send>
        <Image
          src={Attach}
          alt='upload img'
        />
        <InputFile
          style={{ display: "none" }}
          type={"file"}
          id='file'
          onChange={(e) => setImg(e.target.files[0])}
        />
        <InputFileLabel htmlFor='file'>
          <Image
            src={Img}
            alt='some img'
          />
        </InputFileLabel>
        <Button onClick={handleSend}>Send</Button>
      </Send>
    </InputContainer>
  );
};

export default Input;
