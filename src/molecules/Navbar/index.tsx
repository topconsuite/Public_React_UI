import * as React from "react";
import { useCallback, useState } from "react";
import {
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
  People as PeopleIcon,
  Assessment as AssessmentIcon,
  Phone as PhoneIcon,
  GetApp as GetAppIcon,
  DirectionsCar as VehicleIcon,
  Schedule as ScheduleIcon
} from "@mui/icons-material";

// region Assets
import {
  TopconDispatchLogoAsset
} from "@assets/company/index";
// endregion Assets
// region Hooks
// endregion Hooks
// region Libraries
import { Menu } from "@libraries/mui/icons";
// endregion Libraries
// region Molecules
import MenuFleet from "@molecules/MenuFleet";
// endregion Molecules
// region Organisms
import NavbarIcons from "@organisms/NavbarIcons";
import * as packageJson from "../../../package.json";
// endregion Organisms
// region Styles
import * as Styled from "./styles";
// endregion Styles

// region Interfaces
interface NavbarProps {
  productIconSrc?: string;
  productIconAlt?: string;
  showLogo?: boolean;
}
// endregion Interfaces

// Component

const Navbar: React.FC<NavbarProps> = ({
  productIconSrc = TopconDispatchLogoAsset,
  productIconAlt = "Topcon Dispatch icon",
  showLogo = true
}) => {

  // region Hooks
  // const { theme } = useTheme();
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

  // Mock data seguindo a estrutura do MenuFleet.stories.tsx
  const mockUser = {
    name: "João Silva",
    email: "joao.silva@empresa.com",
    admin: true,
    super_admin: false
  };

  const mockMenus = {
    "Principal": [
      {
        id: "dashboard",
        text: "Dashboard",
        icon: <DashboardIcon />,
        link: "/dashboard"
      },
      {
        id: "vehicles",
        text: "Veículos",
        icon: <VehicleIcon />,
        link: "/vehicles"
      },
      {
        id: "schedule",
        text: "Agendamento",
        icon: <ScheduleIcon />,
        link: "/schedule"
      }
    ],
    "Configurações": [
      {
        id: "users",
        text: "Usuários",
        icon: <PeopleIcon />,
        link: "/users",
        isPrivate: true
      },
      {
        id: "settings",
        text: "Configurações",
        icon: <SettingsIcon />,
        link: "/settings"
      },
      {
        id: "reports",
        text: "Relatórios",
        icon: <AssessmentIcon />,
        link: "/reports"
      }
    ],
    "Suporte": [
      {
        id: "contact",
        text: "Fale Conosco",
        icon: <PhoneIcon />,
        component: "modalContactUs"
      },
      {
        id: "install",
        text: "Instalar App",
        icon: <GetAppIcon />,
        component: "installPWA"
      }
    ]
  };

  // endregion Callbacks / Functions

  return (
    <Styled.Container>
      <Menu onClick={toggleOpenSidebar} />
      <MenuFleet
        open={openSidebar}
        onClose={toggleOpenSidebar}
        user={mockUser}
        menus={mockMenus}
        version={packageJson.version}
        onSignOut={() => {
          // console.log("Sign out clicked");
          setOpenSidebar(false);
        }}
        onHelpClick={() => {
          // console.log("Help clicked");
        }}
      />
      {showLogo && (
        <Styled.Product>
          <Styled.ProductIcon src={productIconSrc} alt={productIconAlt} />
          <Styled.Version>
            v
            {packageJson.version}
          </Styled.Version>
        </Styled.Product>
      )}
      <NavbarIcons />

    </Styled.Container>
  );
};

Navbar.defaultProps = {
  productIconSrc: TopconDispatchLogoAsset,
  productIconAlt: "Topcon Dispatch icon",
  showLogo: true
};

export default React.memo(Navbar);
