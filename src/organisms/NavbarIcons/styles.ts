import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Roboto', sans-serif;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    gap: 2px;
  }
  
  @media (max-width: 425px) {
    gap: 1px;
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: rgb(0, 41, 81);
  flex-shrink: 0;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    transform: scale(1.1);
    color: rgb(0, 41, 81);
  }
  
  &:active {
    transform: scale(0.95);
    color: rgb(0, 41, 81);
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
  
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
  
  @media (max-width: 425px) {
    width: 32px;
    height: 32px;
  }
`;
