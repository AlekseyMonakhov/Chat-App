import React, { useContext } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

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
  const { currentUser } = useContext(AuthContext);
  return (
    <NavbarContainer>
      <Logo>Aleksey Chat</Logo>
      <User>
        <UserImg
          src={currentUser.photoURL}
          alt='photo'
        />
        <UserName>{currentUser.displayName}</UserName>
        <Button onClick={() => signOut(auth)}>logout</Button>
      </User>
    </NavbarContainer>
  );
};

export default Navbar;
