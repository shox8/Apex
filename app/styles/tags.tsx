import styled from "styled-components";

interface Props {
  from: "top" | "left" | "bottom" | "right";
}

export const Br = styled.div<Props>`
  ${(p) => "padding-" + p.from}: 20px;
`;
