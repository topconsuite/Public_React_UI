import styled from "styled-components";

import { windowWidth } from "../../styles/global";

const SpeedDialContainer = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 500;
`;

const SpeedDialModalArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
`;

const SpeedDialMenus = styled.div`
  position: fixed;
  bottom: 102px;
  right: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 15px;
  background-color: transparent;
  overflow: hidden;
  z-index: 2;

  @media ( max-height: ${windowWidth.tablet} ) {
    gap: 12px;
  }

`;

export const SpeedDialButton = styled.button<{
  primaryColor: string;
  secondColor: string;
  size?: "small" | "medium" | "large";
  open: boolean;
}>`
  position: relative;
  z-index: 1001;
  width: ${({ size }) => {
    if (size === "small") return "40px";
    if (size === "large") return "64px";

    return "56px";
  }};
  height: ${({ size }) => {
    if (size === "small") return "40px";
    if (size === "large") return "64px";

    return "56px";
  }};
  border-radius: 50%;
  border: none;
  background-color: ${({ primaryColor }) => primaryColor};
  color: ${({ secondColor }) => secondColor};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12);
  transition: all 0.3s ease;
  transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
  
  &:hover {
    box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12);
  }
`;

export { SpeedDialContainer, SpeedDialMenus, SpeedDialModalArea };
