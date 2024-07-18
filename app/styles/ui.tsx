import styled from "styled-components";

interface Props {
  from: "top" | "left" | "bottom" | "right";
}

export const Br = styled.div<Props>`
  ${(p) => "padding-" + p.from}: 20px;
`;

export const PageLoaderStyle = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  .loader {
    display: inline-grid;
    padding: 5px;
    background: #fff;
    filter: blur(4px) contrast(12);
  }
  .loader:before,
  .loader:after {
    content: "";
    grid-area: 1/1;
    height: 40px;
    aspect-ratio: 3;
    --c: #0000 64%, #000 66% 98%, #0000 101%;
    background: radial-gradient(35% 146% at 50% 159%, var(--c)) 0 0,
      radial-gradient(35% 146% at 50% -59%, var(--c)) 100% 100%;
    background-size: calc(200% / 3) 50%;
    background-repeat: repeat-x;
    clip-path: inset(0 100% 0 0);
    animation: l16 1.5s infinite linear;
  }
  .loader:after {
    scale: -1 1;
    animation-delay: -0.75s;
  }
  @keyframes l16 {
    50% {
      clip-path: inset(0);
    }
    to {
      clip-path: inset(0 0 0 100%);
    }
  }
`;
