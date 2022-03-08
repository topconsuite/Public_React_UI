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

export { SpeedDialContainer, SpeedDialMenus, SpeedDialModalArea };
