import React from "react";
import styled from "styled-components";
import Img from "../img/img.png";
import Attach from "../img/attach.png";

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
  return (
    <InputContainer>
      <InputField
        type={"text"}
        placeholder='Type something...'
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
        />
        <InputFileLabel htmlFor='file'>
          <Image
            src={Img}
            alt='some img'
          />
        </InputFileLabel>
        <Button>Send</Button>
      </Send>
    </InputContainer>
  );
};

export default Input;
