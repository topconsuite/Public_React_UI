import styled from "styled-components";

import { windowWidth } from "@styles/global";

interface StatusProps {
  statusColor?: string;
}

const Container = styled.div`
  position: relative;
  border-radius: 5px;
  padding: 0 10px;
  height: 99px;
  box-shadow: 0 1px 3px 1px rgb(0 0 0 / 25%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: Roboto;

  @media ( max-width: ${windowWidth.laptop.large} ) {
    height: 92px;
  }
`;

const Status = styled.div<StatusProps>`
  color: ${(props) => (props.statusColor ? props.statusColor : "black")};
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  bottom: 5px;
  right: 10px;

  @media ( max-width: ${windowWidth.laptop.large} ) {
    font-size: 11px;
  }

`;

export { Container, Status };
