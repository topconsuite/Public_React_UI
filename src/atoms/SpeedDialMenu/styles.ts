import styled from "styled-components";

import { windowWidth } from "../../styles/global";

interface FloatActionButtonMenuContainerProps {
  colorOnHover: string
}

export const SpeedDialMenuContainer = styled.div<FloatActionButtonMenuContainerProps>`
  padding: 12px 20px;
  text-align: end;
  user-select: none;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  
  :active {
      background-color: ${(props) => props.colorOnHover};
      color: white;
    }

  @media ( min-width: ${windowWidth.tablet} ) {
    cursor: pointer;

    :hover {
      background-color: ${(props) => props.colorOnHover};
      color: white;
    }
  }
`;
