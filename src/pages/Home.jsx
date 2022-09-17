import React from "react";
import styled from "styled-components";
import Chat from "../components/Chat";
import SideBar from "../components/SideBar";
import { mobile } from "../responsive";

const HomeContainer = styled.div`
  background-color: #a7bcff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ width: "100vw" })};
`;
const Wrapper = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  min-width: 65%;
  max-width: 75%;
  height: 80%;
  display: flex;
  overflow: hidden;
  ${mobile({
    maxWidth: "100%",
    width: "100%",
    height: "100%",
    borderRadius: "0",
  })};
`;

const Home = () => {
  return (
    <HomeContainer>
      <Wrapper>
        <SideBar />
        <Chat />
      </Wrapper>
    </HomeContainer>
  );
};

export default Home;
