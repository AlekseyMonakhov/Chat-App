import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #2f2d52;
  height: 50px;
  padding: 10px;
  justify-content: space-between;
  color: #ddddf7;
`;
const Logo = styled.h2`
  font-weight: bold;
  ${mobile({ display: "none" })};
`;
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const UserImg = styled.img`
  background-color: #ddddf7;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  object-fit: cover;
`;
const UserName = styled.span``;
const Button = styled.button`
  background-color: #5d5b8d;
  color: #ddddf7;
  font-size: 10px;
  padding: 5px;
  border: none;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Aleksey Chat</Logo>
      <User>
        <UserImg
          src='https://images.unsplash.com/photo-1662695088711-acfdfda51c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
          alt='photo'
        />
        <UserName>Name</UserName>
        <Button>logout</Button>
      </User>
    </NavbarContainer>
  );
};

export default Navbar;
