import styled from "styled-components";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

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
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <Container>
      <FormWrapper>
        <FormTitle>Aleksey Chat</FormTitle>
        <FormRegister>REGISTER</FormRegister>
        <Form onSubmit={handleSubmit}>
          <FormInput
            type={"text"}
            placeholder='display name'
            required
          />
          <FormInput
            type={"email"}
            placeholder='email'
            required
          />
          <FormInput
            type={"password"}
            placeholder='password'
            pattern='`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`'
            required
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
          {loading && (
            <span>Uploading and compressing the image please wait...</span>
          )}
          {err && <span>Something went wrong...</span>}
        </Form>
        <DontHaveAcc>
          Dont have account ?{" "}
          <Link
            style={{
              color: "black",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            to={"/login"}
          >
            Login
          </Link>
        </DontHaveAcc>
      </FormWrapper>
    </Container>
  );
};

export default Register;
