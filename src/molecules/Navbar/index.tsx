import React, { useCallback, useState } from "react";
// Trocar esta linha:
// import * as packageJson from 'src/../package.json';
// Por:

// region Assets
import { TopconDispatchAlternativeLogoAsset, TopconDispatchLogoAsset } from "@assets/company/index";
// endregion Assets
// region Hooks
// Trocar:
// import useTheme from "@hooks/useTheme";
// Por:
import { useTheme } from "@hooks/index";
// endregion Hooks
// region Libraries
import { Menu } from "@libraries/mui/icons";
// endregion Libraries
// region Molecules
import SidebarDrawerMenus from "@molecules/SidebarDrawerMenus";
import SidebarDrawerSecondaryMenus from "@molecules/SidebarDrawerSecondaryMenus";
// endregion Molecules
// region Organisms
import NavbarIcons from "@organisms/NavbarIcons";
import * as packageJson from "../../../package.json";
// endregion Organisms
// region Styles
import * as Styled from "./styles";
import SidebarDrawer from "../SidebarDrawer";
// endregion Styles

// Component
const Navbar: React.FC = () => {

  // region Hooks
  const { theme } = useTheme();
  // endregion Hooks
  // region States
  const [openSidebar, setOpenSidebar] = useState(false);
  // endregion States
  // region Callbacks / Functions

  /**
   * Toggle open sidebar
   */
  const toggleOpenSidebar = useCallback(() => {
    setOpenSidebar((value) => !value);
  }, []);

  // endregion Callbacks / Functions

  return (
    <Styled.Container>
      <Menu onClick={toggleOpenSidebar} />
      <SidebarDrawer
        primarycolor={theme.colors.primary}
        productIconPath={TopconDispatchAlternativeLogoAsset}
        open={openSidebar}
        onClose={toggleOpenSidebar}
        bodyChildren={<SidebarDrawerMenus />}
        footerChildren={<SidebarDrawerSecondaryMenus />}
      />
      <Styled.Product>
        <Styled.ProductIcon src={TopconDispatchLogoAsset} alt="Topcon Dispatch icon" />
        <Styled.Version>
          v
          {packageJson.version}
        </Styled.Version>
      </Styled.Product>
      <NavbarIcons />

    </Styled.Container>
  );
};

export default React.memo(Navbar);
