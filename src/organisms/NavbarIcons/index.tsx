import React from "react";
import {
  Apps, Logout, Settings, Notifications
} from "../../libraries/mui/icons";
import LanguageDropdown from "../../atoms/LanguageDropdown";

import * as Styled from "./styles";

const NavbarIcons: React.FC = () => {
  const handleIconClick = () => {
    // Handle icon click
  };

  return (
    <Styled.Container>
      <Styled.ContainerIcon onClick={() => handleIconClick("Notifications")}>
        <Notifications />
      </Styled.ContainerIcon>
      <Styled.ContainerIcon onClick={() => handleIconClick("Apps")}>
        <Apps />
      </Styled.ContainerIcon>
      <Styled.ContainerIcon onClick={() => handleIconClick("Settings")}>
        <Settings />
      </Styled.ContainerIcon>
      <LanguageDropdown />
      <Styled.ContainerIcon onClick={() => handleIconClick("Logout")}>
        <Logout />
      </Styled.ContainerIcon>
    </Styled.Container>
  );
};

export default NavbarIcons;
