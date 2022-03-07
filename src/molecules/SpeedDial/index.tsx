import React from "react";

import FloatActionButton from "../../atoms/FloatActionButton";

import { SpeedDialContainer, SpeedDialMenus, SpeedDialModalArea } from "./styles";

interface SpeedDialProps {
  primaryColor: string;
  secondColor: string;
  size?: "small" | "medium" | "large";
  icon: React.ReactNode;
  open: boolean,
  onOpen: () => void,
  onClose: () => void
}

const SpeedDial: React.FC<SpeedDialProps> = ({
  primaryColor, secondColor, size, icon, open, onOpen, onClose, children
}) => (
  <SpeedDialContainer>
    {open && <SpeedDialModalArea onClick={onClose} />}
    <FloatActionButton
      onClick={open ? onClose : onOpen}
      primaryColor={primaryColor}
      secondColor={secondColor}
      size={size}
      clicked={open}
      icon={icon}
    />
    {open && <SpeedDialMenus>{children}</SpeedDialMenus>}
  </SpeedDialContainer>
);

SpeedDial.defaultProps = {
  size: "medium"
};

export default SpeedDial;
