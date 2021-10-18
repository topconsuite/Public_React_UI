/**
 * Style example
 */
import styled from 'styled-components';

export const ContainerAtoms = styled.div<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor || 'none'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  border: solid 0.5px darkgray;
  box-shadow: 5px 5px 10px darkgray;
  border-radius: 5px;
  width: 110px;
`;

export const ContainerUserInfos = styled.div`
  font-size: 10px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-left: 4px;
`;
