import type { Meta, StoryObj } from "@storybook/react-webpack5";
import React, { useState } from "react";
import {
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
  People as PeopleIcon,
  Assessment as AssessmentIcon,
  Phone as PhoneIcon,
  GetApp as GetAppIcon
} from "@mui/icons-material";
import { Button } from "@mui/material";
import MenuFleet from "./index";

// Mock data
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
      id: "users",
      text: "Usuários",
      icon: <PeopleIcon />,
      link: "/users",
      isPrivate: true
    }
  ],
  "Configurações": [
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

// Wrapper component for stories
const MenuFleetWrapper = (args: unknown) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        style={{ marginBottom: "20px" }}
      >
        Abrir Menu Fleet
      </Button>

      <MenuFleet
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        onSignOut={() => {
          // console.log("Sign out clicked");
          setOpen(false);
        }}
        onHelpClick={() => {
          // console.log("Help clicked");
        }}
      />

      <div style={{
        padding: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        marginTop: "20px"
      }}
      >
        <h3>Instruções:</h3>
        <p>Clique no botão acima para abrir o menu mobile Fleet.</p>
        <p>O menu inclui:</p>
        <ul>
          <li>Header com logo e versão</li>
          <li>Seção de ajuda</li>
          <li>Perfil do usuário</li>
          <li>Menus organizados por seções</li>
          <li>Botão de logout</li>
        </ul>
      </div>
    </div>
  );
};

const meta: Meta<typeof MenuFleet> = {
  title: "Molecules/MenuFleet",
  component: MenuFleet,
  parameters: {
    layout: "fullscreen",
    docs: {
      autodocs: true,
      description: {
        component: "Componente de menu mobile baseado no Drawer do Material-UI, adaptado do projeto Fleet para uso geral."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Controla se o menu está aberto ou fechado"
    },
    user: {
      control: "object",
      description: "Dados do usuário logado"
    },
    menus: {
      control: "object",
      description: "Estrutura de menus organizados por seções"
    },
    version: {
      control: "text",
      description: "Versão da aplicação"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: MenuFleetWrapper,
  args: {
    user: mockUser,
    menus: mockMenus,
    version: "2.1.0"
  }
};
