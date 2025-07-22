import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  IconButton
} from "@mui/material";
import { Language } from "../../libraries/mui/icons";
import { useTranslation } from "../../hooks";
import { BrazilFlag, USAFlag, SpainFlag } from "./flags";

interface LanguageOption {
  code: string;
  name: string;
  flagComponent: React.FC<{ width?: number; height?: number }>;
}

const languages: LanguageOption[] = [
  { code: "pt-BR", name: "Português (BR)", flagComponent: BrazilFlag },
  { code: "en-US", name: "English (US)", flagComponent: USAFlag },
  { code: "es-ES", name: "Español (ES)", flagComponent: SpainFlag }
];

interface LanguageDropdownProps {
  className?: string;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ className }) => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    handleClose();
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        className={className}
        aria-controls={open ? "language-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{
          width: 40,
          height: 40,
          color: "rgb(0, 41, 81)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
            transform: "scale(1.1)"
          },
          "&:active": {
            transform: "scale(0.95)"
          },
          transition: "all 0.2s ease-in-out"
        }}
      >
        <Language sx={{ width: 24, height: 24 }} />
      </IconButton>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "language-button"
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 200,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            borderRadius: 2
          }
        }}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            selected={language.code === i18n.language}
            sx={{
              py: 1.5,
              px: 2,
              "&:hover": {
                backgroundColor: "rgba(0, 41, 81, 0.08)"
              },
              "&.Mui-selected": {
                backgroundColor: "rgba(0, 41, 81, 0.12)",
                "&:hover": {
                  backgroundColor: "rgba(0, 41, 81, 0.16)"
                }
              }
            }}
          >
            <ListItemIcon sx={{ minWidth: 36 }}>
              <language.flagComponent width={20} height={15} />
            </ListItemIcon>
            <ListItemText
              primary={language.name}
              sx={{
                "& .MuiListItemText-primary": {
                  fontSize: "14px",
                  fontWeight: language.code === i18n.language ? 600 : 400
                }
              }}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageDropdown;
