import styled from "styled-components";

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
const Login = () => {
  return (
    <Container>
      <FormWrapper>
        <FormTitle>Aleksey Chat</FormTitle>
        <FormRegister>Login</FormRegister>
        <Form>
          <FormInput
            type={"email"}
            placeholder='email'
          />
          <FormInput
            type={"password"}
            placeholder='password'
          />
          <FormButton>Sign in</FormButton>
        </Form>
        <DontHaveAcc>Dont have an account ? Register</DontHaveAcc>
      </FormWrapper>
    </Container>
  );
};

export default Login;
