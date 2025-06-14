import React from "react";
import {
  SpeedDialContainer, SpeedDialMenus, SpeedDialModalArea, SpeedDialButton
} from "./styles";

interface SpeedDialProps {
  primaryColor: string;
  secondColor: string;
  size?: "small" | "medium" | "large";
  icon: React.ReactNode;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  children?: React.ReactNode;
}

const SpeedDial: React.FC<SpeedDialProps> = ({
  primaryColor, secondColor, size, icon, open, onOpen, onClose, children
}) => (
  <SpeedDialContainer>
    {open && <SpeedDialModalArea onClick={onClose} />}
    <SpeedDialButton
      onClick={open ? onClose : onOpen}
      primaryColor={primaryColor}
      secondColor={secondColor}
      size={size}
      open={open}
    >
      <>{icon}</>
    </SpeedDialButton>
    {open && (
    <SpeedDialMenus>
      <>{children}</>
    </SpeedDialMenus>
    )}
  </SpeedDialContainer>
);

SpeedDial.defaultProps = {
  size: "medium",
  children: undefined
};

export default SpeedDial;
