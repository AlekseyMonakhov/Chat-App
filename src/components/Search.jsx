import React, { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import {
  collection,
  doc,
  query,
  where,
  getDocs,
  setDoc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const SearchContainer = styled.div`
  border: 1px solid gray;
`;
const SearchForm = styled.div`
  padding: 10px;
`;
const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  &::placeholder {
    color: lightgray;
  }
`;
export const Chat = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #2f2d53;
  }
`;
export const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  &::selection {
    background-color: transparent;
  }
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const UserName = styled.span`
  font-weight: bold;
  font-size: 18px;
  &::selection {
    background-color: transparent;
  }
`;

const Search = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uis
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) { 
      setUser(null);
      setUserName("");
    }
  };

  return (
    <SearchContainer>
      <SearchForm>
        <SearchInput
          placeholder='Find a user'
          type={"text"}
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKey}
          value={userName}
        />
      </SearchForm>
      {err && <span>User not found ... </span>}
      {user && (
        <Chat onClick={handleSelect}>
          <UserImg src={user.photoURL} />
          <UserInfo>
            <UserName>{user.displayName}</UserName>
          </UserInfo>
        </Chat>
      )}
    </SearchContainer>
  );
};

export default Search;
