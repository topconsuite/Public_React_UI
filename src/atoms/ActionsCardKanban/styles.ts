import { Box, BoxProps } from "@mui/material";
import { styled } from "../../libraries/mui/components";
import Button, { ButtonProps } from "../Button";

export const Container = styled(Box)<BoxProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`;

export const ActionButton = styled(Button)<ButtonProps>`
  // justify-content: flex-start;
  text-transform: none;
  color: #002951;
  border-color: #002951;
  
  &:hover {
    background-color: rgba(0, 41, 81, 0.04);
    border-color: #002951;
  }
`;
