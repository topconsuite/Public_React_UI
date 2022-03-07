import React from "react";

import { SpeedDialMenuContainer } from "./styles";

export interface Menu {
  id: string;
  title: string;
}

interface FloatActionButtonMenuProps {
  menu: Menu
  colorOnHover: string;
  onClick: () => void;
}

const SpeedDialMenu: React.FC<FloatActionButtonMenuProps> = ({ menu, colorOnHover, onClick }) => {

  const { id, title } = menu;

  const onMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    onClick();
  };

  return (
    <SpeedDialMenuContainer
      onClick={(event: React.MouseEvent<HTMLElement>) => onMenuClick(event)}
      colorOnHover={colorOnHover}
      id={id}
    >
      {title}
    </SpeedDialMenuContainer>
  );
};

export default SpeedDialMenu;
