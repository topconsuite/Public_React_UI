import styled from "styled-components";
import { ReactSVG } from "react-svg";

export const Container = styled(ReactSVG)`
  > :first-child {
    width: 100%;
    height: 100%;
    svg {
      fill: inherit;
      width: 100%;
      height: 100%;
    }
  }
`;
