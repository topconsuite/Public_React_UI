/**
 * Style example
 */
import styled from 'styled-components';

export const Avatar = styled.div`
  background-color: ${(props) => props.color || 'red'};
  height: 100%;
  width: 100%;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 100%;
  overflow: none;
`;

export const Span = styled.span<{ fontColor?: string }>`
  background-color: transparent;
  color: ${(props) => props.fontColor || 'white'};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  vertical-align: middle;
  text-align: center;
  margin: 0px;
  padding: 0px;
`;
