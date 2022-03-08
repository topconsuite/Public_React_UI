import styled from "styled-components";

interface SidebarDrawerMenuContainerProps {
  secondaryColor: string
  type?: "primary" | "secondary";
}

interface SidebarMenuIdentifierProps {
  identifierColor: string;
}

const SidebarDrawerMenuContainer = styled.div<SidebarDrawerMenuContainerProps>`
  position: relative;
  user-select: none;
  background-color: ${(props) => (props.type === "primary" ? props.secondaryColor : "inherit")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  opacity: 70%;
  margin: ${(props) => (props.type === "primary" ? "15px" : "0px 15px")};
  padding: ${(props) => (props.type === "primary" ? "20px 15px" : "10px 15px")};
  border-radius: 5px;

  :hover {
    opacity: 100%;
    cursor: pointer;
    > i {
      display: block;
      opacity: 70%;
    }
  }

  > :first-child {
    width: 23px;
  }

`;

const SidebarDrawerMenuTitle = styled.div`
  color: white;
  font-weight: 200;
  font-size: 17px;
  letter-spacing: 0;
  padding-left: 15px;
`;

const SidebarDrawerMenuIdentifier = styled.i<SidebarMenuIdentifierProps>`
  position: absolute;
  left: 0px;
  width: 6px;
  height: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.identifierColor};
  display: none;
`;

export { SidebarDrawerMenuContainer, SidebarDrawerMenuTitle, SidebarDrawerMenuIdentifier };
