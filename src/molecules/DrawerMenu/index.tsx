import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  Help as HelpIcon,
  ExitToApp as ExitToAppIcon,
  AccountCircle
} from "@mui/icons-material";
import { ReactSVG } from "react-svg";
import { TopconCustomerLogoAsset } from "@/assets/company";
import * as Styled from "./styles";

// Mock interfaces
interface User {
  name: string;
  email: string;
  admin?: boolean;
  super_admin?: boolean;
}

interface MenuItem {
  id: string;
  text: string;
  icon: React.ReactNode;
  iconMobile?: React.ReactNode;
  link?: string;
  component?: string;
  isPrivate?: boolean;
  isSuperPrivate?: boolean;
}

interface MenuSection {
  [key: string]: MenuItem[];
}

interface MenuFleetProps {
  open: boolean;
  onClose: () => void;
  user?: User;
  menus?: MenuSection;
  logoSrc?: string;
  version?: string;
  onHelpClick?: () => void;
  onSignOut?: () => void;
  userPhotoSrc?: string;
  onMenuItemClick?: (menu: MenuItem) => void;
  currentPath?: string; // Rota atual para determinar item ativo
}

// Mock assets
const DefaultLogo = TopconCustomerLogoAsset;
const DefaultUserPhoto = "https://thumbs.dreamstime.com/b/vetor-de-%C3%ADcone-perfil-do-avatar-padr%C3%A3o-foto-usu%C3%A1rio-m%C3%ADdia-social-183042379.jpg?w=768";

// Mock permission functions
const userHasPermissionInMenu = () => true;
const verifyIfShowMenuBlock = (menuItems: MenuItem[]) => menuItems.length > 0;

const MenuFleet: React.FC<MenuFleetProps> = ({
  open,
  onClose,
  user = { name: "Usuário", email: "usuario@exemplo.com" },
  menus = {},
  logoSrc = DefaultLogo,
  version = "1.0.0",
  onHelpClick,
  onSignOut,
  userPhotoSrc = DefaultUserPhoto,
  onMenuItemClick,
  currentPath
}) => {
  const [, setOpenModalIconLegend] = useState(false);
  const [, setOpenContactUs] = useState(false);
  const [, setShowPromptIOSPWA] = useState(false);

  const handleInstallPWA = () => {
    // Install PWA clicked
  };

  const handleMenuItemClick = (menu: MenuItem) => {
    // Chama o callback externo se fornecido
    if (onMenuItemClick) {
      onMenuItemClick(menu);
    }

    // Lógica interna do componente
    if (menu.component === "modalContactUs") {
      setOpenContactUs(true);
    } else if (menu.component === "installPWA") {
      // Check if is iOS
      if (navigator.userAgent.match(/iPad|iPhone|iPod/i)) {
        setShowPromptIOSPWA(true);
      } else {
        // Android and PC browser
        handleInstallPWA();
      }
    } else {
      onClose();
    }
  };

  return (
    <Styled.StyledDrawer
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <Styled.Container>
        <Styled.Header>
          <Styled.CloseIcon onClick={onClose}>
            <ArrowBackIcon />
          </Styled.CloseIcon>
          <Styled.Logo>
            <ReactSVG
              src={logoSrc}
              beforeInjection={(svg) => {
                svg.setAttribute("fill", "white");
                const paths = svg.querySelectorAll("path, circle, rect, polygon");

                paths.forEach((path) => {
                  path.setAttribute("fill", "white");
                });
              }}
            />
            <Styled.Version>
              V.
              {version}
            </Styled.Version>
          </Styled.Logo>
        </Styled.Header>

        <Styled.Help>
          <List>
            <ListItem
              button
              disableRipple
              onClick={() => {
                onHelpClick ? onHelpClick() : setOpenModalIconLegend(true);
              }}
            >
              <Styled.HelpItem className="helpItem">
                <ListItemIcon><HelpIcon /></ListItemIcon>
                <ListItemText primary="Ajuda" />
              </Styled.HelpItem>
            </ListItem>
          </List>
        </Styled.Help>

        <Styled.Profile>
          <Styled.Photo>
            {userPhotoSrc ? <img src={userPhotoSrc} alt="User" /> : <AccountCircle style={{ fontSize: "78px" }} />}
          </Styled.Photo>
          <Styled.Data>
            <Styled.Name>{user.name}</Styled.Name>
            <Styled.Email>{user.email}</Styled.Email>
          </Styled.Data>
        </Styled.Profile>
      </Styled.Container>

      <Styled.Menu>
        {Object.keys(menus).map((key) => (
          <div key={key}>
            {verifyIfShowMenuBlock(menus[key]) && (
              <Styled.MenuBox className={`item-menu-${key.toLowerCase()}`}>
                <Styled.MenuTitle>{key}</Styled.MenuTitle>
                {menus[key].map((menu) => {
                  // Determina se o item está ativo baseado na rota atual
                  const isActive = currentPath ? menu.link === currentPath : false;

                  return userHasPermissionInMenu() && (
                    <div key={menu.id}>
                      {(!menu.isPrivate
                        || ((menu.isPrivate && !menu.isSuperPrivate) && user.admin)
                        || (menu.isSuperPrivate && user.super_admin)) && (
                          <Styled.MenuContent isActive={isActive}>
                            <List>
                              <ListItem
                                button
                                disableRipple
                                onClick={() => handleMenuItemClick(menu)}
                              >
                                <div className="item">
                                  {menu.iconMobile || menu.icon}
                                  <div className="text">{menu.text}</div>
                                </div>
                              </ListItem>
                            </List>
                          </Styled.MenuContent>
                      )}
                    </div>
                  );
                })}
                <Divider />
              </Styled.MenuBox>
            )}
          </div>
        ))}
      </Styled.Menu>

      <Styled.Logout>
        <List>
          <ListItem
            button
            disableRipple
            onClick={() => {
              onClose();
              onSignOut && onSignOut();
            }}
          >
            <div className="item">
              <ExitToAppIcon />
              <div className="text">Sair</div>
            </div>
          </ListItem>
        </List>
      </Styled.Logout>
    </Styled.StyledDrawer>
  );
};

MenuFleet.defaultProps = {
  user: { name: "Usuário", email: "usuario@exemplo.com" },
  menus: {},
  logoSrc: DefaultLogo,
  version: "1.0.0",
  onHelpClick: undefined,
  onSignOut: undefined,
  userPhotoSrc: DefaultUserPhoto,
  currentPath: undefined
};

export default MenuFleet;
export type {
  MenuFleetProps, MenuItem, MenuSection, User
};
