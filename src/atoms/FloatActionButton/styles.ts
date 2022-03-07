import styled from "styled-components";

import { windowWidth } from "../../styles/global";

interface FloatActionButtonContainerProps {
  primaryColor: string;
  secondColor?: string;
  size?: "small" | "medium" | "large";
  clicked?: boolean;
  disableRotateOnClick?: boolean;
}

enum FloatActioButtonSize {
  small = "40px",
  medium = "60px",
  large = "80px"
}

const handleFabSize = (size?: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return FloatActioButtonSize.small;
    case "large":
      return FloatActioButtonSize.large;
    default:
      return FloatActioButtonSize.medium;
  }
};

const FloatActionButtonContainer = styled.div<FloatActionButtonContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => handleFabSize(props.size)};
  height: ${(props) => handleFabSize(props.size)};
  border-radius: 50%;
  overflow: hidden;
  color: white;
  background-color: ${(props) => (props.clicked ? props.secondColor : props.primaryColor)};
  transition: all 0.2s;
  ${(props) => props.clicked && !props.disableRotateOnClick && "transform: rotate(45deg)"};
  z-index: 2;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 
              0px 6px 10px 0px rgb(0 0 0 / 14%),
              0px 1px 18px 0px rgb(0 0 0 / 12%);
  
  @media ( min-width: ${windowWidth.tablet} ) {
    cursor: pointer;
  }
`;

export { FloatActionButtonContainer };
