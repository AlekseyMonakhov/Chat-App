import styled from "styled-components";
import Add from "../img/addAvatar.png";

const Container = styled.div`
  background-color: #a7bcff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormWrapper = styled.div`
  background-color: white;
  padding: 20px 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const FormTitle = styled.h2`
  color: #5d5b8d;
  font-weight: bold;
  font-size: 24px;
`;
const FormRegister = styled.h5`
  color: #5d5b8d;
  font-weight: bold;
  font-size: 12px;
`;
const FormInput = styled.input`
  padding: 15px;
  border: none;
  border-bottom: 1px solid #a7bcff;
  &::placeholder {
    color: rgb(175, 175, 175);
  }
`;
const FormButton = styled.button`
  background-color: #7b96ec;
  color: white;
  padding: 10px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;
const DontHaveAcc = styled.p`
  color: #5d5b8d;
  font-size: 12px;
  padding: 10px;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #8da4f1;
  font-size: 12px;
  cursor: pointer;
`;
const Register = () => {
  return (
    <Container>
      <FormWrapper>
        <FormTitle>Aleksey Chat</FormTitle>
        <FormRegister>REGISTER</FormRegister>
        <Form>
          <FormInput
            type={"text"}
            placeholder='display name'
          />
          <FormInput
            type={"email"}
            placeholder='email'
          />
          <FormInput
            type={"password"}
            placeholder='password'
          />
          <Label htmlFor='file'>
            <img
              style={{ width: "32px" }}
              src={Add}
              alt='avatar'
            />
            <span>Add an avatar</span>
          </Label>
          <FormInput
            id='file'
            style={{ display: "none" }}
            type={"file"}
          />
          <FormButton>Sign up</FormButton>
        </Form>
        <DontHaveAcc>Dont have account ? Login</DontHaveAcc>
      </FormWrapper>
    </Container>
  );
};

export default Register;
