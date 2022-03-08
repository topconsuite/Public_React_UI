import React from "react";

import { FloatActionButtonContainer } from "./styles";

interface FloatActionButtonProps {
  primaryColor: string;
  secondColor: string;
  size?: "small" | "medium" | "large";
  clicked?: boolean;
  disableRotateOnClick?: boolean;
  icon: React.ReactNode;
  onClick: () => void;
}

const FloatActionButton: React.FC<FloatActionButtonProps> = ({
  primaryColor, secondColor, size, clicked, icon, disableRotateOnClick, onClick
}) => (
  <FloatActionButtonContainer
    primaryColor={primaryColor}
    secondColor={secondColor}
    size={size}
    clicked={clicked}
    disableRotateOnClick={disableRotateOnClick}
    onClick={onClick}
  >
    {icon}
  </FloatActionButtonContainer>
);

FloatActionButton.defaultProps = {
  size: "medium",
  clicked: false,
  disableRotateOnClick: false
};

export default FloatActionButton;
