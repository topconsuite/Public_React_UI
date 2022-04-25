import styled from "styled-components";

interface SidebarMenuIdentifierProps {
  identifierColor: string;
}

const Container = styled.div`
  position: relative;
  user-select: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 70%;
  padding: 15px;

  > :first-child {
    > :first-child {
      width: 21px;
      height: 21px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  :hover {
    opacity: 100%;
    cursor: pointer;
  }
`;

const Identifier = styled.i<SidebarMenuIdentifierProps>`
  position: absolute;
  left: 0px;
  width: 6px;
  height: 80%;
  border-radius: 50px;
  background-color: ${(props) => props.identifierColor};
  display: none;
`;

export { Container, Identifier };
