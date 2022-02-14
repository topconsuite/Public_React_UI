import styled from "styled-components";

interface SidebarMenuIdentifierProps {
  identifierColor: string;
}

const SidebarMenuContainer = styled.div`
  position: relative;
  user-select: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 70%;
  padding: 15px;

  :hover {
    opacity: 100%;
    cursor: pointer;
    > i {
      display: block;
      opacity: 70%;
    }
  }
`;

const SidebarMenuTitle = styled.div`
  color: white;
  font-weight: 200;
  font-size: 15px;
  letter-spacing: 0;
`;

const SidebarMenuIdentifier = styled.i<SidebarMenuIdentifierProps>`
  position: absolute;
  left: 0px;
  width: 6px;
  height:50px;
  border-radius: 50px;
  background-color: ${(props) => props.identifierColor};
  display: none;
`;

export { SidebarMenuContainer, SidebarMenuTitle, SidebarMenuIdentifier };
