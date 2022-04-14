import React from "react";

import { LoadingButtonProps } from "../../libraries/mui/components";
import * as Styled from "./styles";

interface ButtonProps extends LoadingButtonProps {
  text: string;
  size?: "small" | "large";
}

const Button: React.FC<ButtonProps> = ({ text, size, ...rest }) => (
  <Styled.Container variant="contained" {...rest} size={size}>
    <Styled.Text>
      {text}
    </Styled.Text>
  </Styled.Container>
);

Button.defaultProps = {
  size: "small"
};

export default Button;
