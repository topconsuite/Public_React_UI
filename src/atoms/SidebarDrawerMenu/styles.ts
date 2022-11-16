import styled from "styled-components";

interface ContainerProps {
  secondaryColor: string
  type?: "primary" | "secondary";
}

interface IdentifierProps {
  identifierColor: string;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  user-select: none;
  background-color: ${(props) => (props.type === "primary" ? props.secondaryColor : "inherit")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  opacity: 70%;
  margin: ${(props) => (props.type === "primary" ? "5px 10px" : "0px 15px")};
  padding: ${(props) => (props.type === "primary" ? "15px" : "10px 15px")};
  border-radius: 5px;
  
  :first-child {
    margin: ${(props) => (props.type === "primary" ? "15px 10px 5px" : "0px 15px")};
  }
  :hover {
    opacity: 100%;
    cursor: pointer;
  }

  > :first-child {
    > :first-child {
      width: 23px;
      height: 23px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

`;

const Title = styled.div`
  color: white;
  font-weight: 200;
  font-size: 0.9rem;
  letter-spacing: 0;
  padding-left: 15px;
`;

const Identifier = styled.i<IdentifierProps>`
  position: absolute;
  left: 0px;
  width: 6px;
  height: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.identifierColor};
  display: none;
`;

export { Container, Title, Identifier };
