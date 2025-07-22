import React from "react";
import {
  Apps, Logout, Settings, Notifications
} from "../../libraries/mui/icons";
import LanguageDropdown from "../../atoms/LanguageDropdown";

import * as Styled from "./styles";

interface NavbarIconsProps {
  onNotificationsClick?: () => void;
  onAppsClick?: () => void;
  onSettingsClick?: () => void;
  onLogoutClick?: () => void;
  showLanguageDropdown?: boolean;
  customIcons?: React.ReactNode[];
}

const NavbarIcons: React.FC<NavbarIconsProps> = ({
  onNotificationsClick,
  onAppsClick,
  onSettingsClick,
  onLogoutClick,
  showLanguageDropdown = true,
  customIcons
}) => {
  const handleNotificationsClick = onNotificationsClick || (() => {
    // Icon clicked: Notifications
  });

  const handleAppsClick = onAppsClick || (() => {
    // Icon clicked: Apps
  });

  const handleSettingsClick = onSettingsClick || (() => {
    // Icon clicked: Settings
  });

  const handleLogoutClick = onLogoutClick || (() => {
    // Icon clicked: Logout
  });

  return (
    <Styled.Container>
      <Styled.ContainerIcon onClick={handleNotificationsClick}>
        <Notifications />
      </Styled.ContainerIcon>
      <Styled.ContainerIcon onClick={handleAppsClick}>
        <Apps />
      </Styled.ContainerIcon>
      <Styled.ContainerIcon onClick={handleSettingsClick}>
        <Settings />
      </Styled.ContainerIcon>
      {showLanguageDropdown && <LanguageDropdown />}
      {customIcons && customIcons.map((icon, index: number) => {
        const iconKey = React.isValidElement(icon) && typeof icon.type === "function"
          ? (icon.type as { name?: string }).name || `icon-${index}`
          : `icon-${index}`;

        return (
          <Styled.ContainerIcon key={`custom-icon-${iconKey}`}>
            {icon}
          </Styled.ContainerIcon>
        );
      })}
      <Styled.ContainerIcon onClick={handleLogoutClick}>
        <Logout />
      </Styled.ContainerIcon>
    </Styled.Container>
  );
};

export default NavbarIcons;
