import styled from "styled-components";
import { Background } from "./extentions";

export const AuthBlock = styled(Background)`
  height: 100dvh;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
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

export const AuthFormBox = styled.div`
  @media screen and (max-width: 650px) {
  }
`;
