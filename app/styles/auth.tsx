import styled from "styled-components";
import { Background, Center } from "./extentions";

export const AuthBlock = styled(Background)`
  height: 100dvh;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  background-color: #eceded;
  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const AuthImageBox = styled.div`
  border-radius: 20px;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .blur {
    filter: blur(5px);
    transition: filter 0.3s ease-in;
  }
  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const AuthFormBox = styled(Center)`
  form {
    background-color: #ffffff;
    padding: 25px 30px;
    width: 350px;
    border-radius: 20px;
    .ant-form-item:has(button) {
      margin-bottom: 0;
    }
    div > input,
    .ant-input-password {
      height: 40px;
      border-radius: 10px;
    }
    button {
      width: 100%;
      height: 45px;
      border-radius: 10px;
    }
    button[type="submit"] {
      background-color: #161313;
      color: #ffffff;
      margin-top: 10px;
    }
    button[type="button"] img {
      height: 20px;
      width: 20px;
    }
  }
  @media screen and (max-width: 650px) {
  }
  @media screen and (max-width: 450px) {
    form {
      width: 100%;
    }
  }
`;
