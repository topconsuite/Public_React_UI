import React from "react";

import * as Styled from "./styles";

interface SidebarProps {
  children: JSX.Element;
  primaryColor: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  children, primaryColor
}) => (
  <Styled.Container primaryColor={primaryColor}>
    <Styled.Menus>
      { children }
    </Styled.Menus>
  </Styled.Container>
);

export default Sidebar;
