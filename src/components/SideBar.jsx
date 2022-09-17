import React from "react";
import styled from "styled-components";
import Chats from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";

const SideContainer = styled.div`
  flex: 1;
  background-color: #3e3c61;
  min-width: 140px;
  max-width: 35%;
`;

const SideBar = () => {
  return (
    <SideContainer>
      <Navbar />
      <Search />
      <Chats />
    </SideContainer>
  );
};

export default SideBar;
