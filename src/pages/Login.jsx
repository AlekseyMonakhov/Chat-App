import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

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
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <Container>
      <FormWrapper>
        <FormTitle>Aleksey Chat</FormTitle>
        <FormRegister>Login</FormRegister>
        <Form onSubmit={handleSubmit}>
          <FormInput
            type={"email"}
            placeholder='email'
          />
          <FormInput
            type={"password"}
            placeholder='password'
          />
          <FormButton>Sign in</FormButton>
          {err && <span>Something went wrong...</span>}
        </Form>
        <DontHaveAcc>
          Dont have an account ?{" "}
          <Link
            style={{
              color: "black",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            to={"/register"}
          >
            Register
          </Link>
        </DontHaveAcc>
      </FormWrapper>
    </Container>
  );
};

export default Login;
