import React from "react";
import styled from "styled-components";

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
  return (
    <SearchContainer>
      <SearchForm>
        <SearchInput
          placeholder='Find a user'
          type={"text"}
        />
      </SearchForm>
      <Chat>
        <UserImg src='https://images.unsplash.com/photo-1662695088711-acfdfda51c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
        <UserInfo>
          <UserName>Jane</UserName>
        </UserInfo>
      </Chat>
    </SearchContainer>
  );
};

export default Search;
