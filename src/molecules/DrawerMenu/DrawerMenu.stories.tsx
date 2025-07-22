import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useState } from "react";
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon
} from "@mui/icons-material";
import { Button } from "@mui/material";
import DrawerMenu from "./index";

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
  ]
  // "Configurações": [
  //   {
  //     id: "settings",
  //     text: "Configurações",
  //     icon: <SettingsIcon />,
  //     link: "/settings"
  //   },
  //   {
  //     id: "reports",
  //     text: "Relatórios",
  //     icon: <AssessmentIcon />,
  //     link: "/reports"
  //   }
  // ],
  // "Suporte": [
  //   {
  //     id: "contact",
  //     text: "Fale Conosco",
  //     icon: <PhoneIcon />,
  //     component: "modalContactUs"
  //   },
  //   {
  //     id: "install",
  //     text: "Instalar App",
  //     icon: <GetAppIcon />,
  //     component: "installPWA"
  //   }
  // ]
};

const DrawerMenuWrapper = (args: React.ComponentProps<typeof DrawerMenu>) => {
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

      <DrawerMenu
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        onSignOut={() => {
          setOpen(false);
        }}
        onHelpClick={() => {
          // Help clicked
        }}
        onMenuItemClick={() => {
          setOpen(false);
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

const meta: Meta<typeof DrawerMenu> = {
  title: "Molecules/DrawerMenu",
  component: DrawerMenu,
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
    },
    userPhotoSrc: {
      control: "text",
      description: "URL da foto/avatar do usuário"
    },
    onMenuItemClick: {
      action: "menuItemClicked",
      description: "Callback chamado quando um item do menu é clicado"
    },
    currentPath: {
      control: "text",
      description: "Rota atual da aplicação para determinar qual item do menu está ativo"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: DrawerMenuWrapper,
  args: {
    user: mockUser,
    menus: mockMenus,
    version: "2.1.0",
    currentPath: "/dashboard", // Simula que estamos na rota do dashboard
    onHelpClick: () => {
      // Help clicked
    },
    onMenuItemClick: () => {
      // Menu item clicked
    }
  }
};

export const WithActiveUsers: Story = {
  render: DrawerMenuWrapper,
  args: {
    user: mockUser,
    menus: mockMenus,
    version: "2.1.0",
    currentPath: "/users", // Simula que estamos na rota de usuários
    onHelpClick: () => {
      // Help clicked
    },
    onMenuItemClick: () => {
      // Menu item clicked
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Exemplo com o item 'Usuários' ativo, demonstrando o destaque visual com background cinza claro e borda laranja."
      }
    }
  }
};

export const NoActiveItem: Story = {
  render: DrawerMenuWrapper,
  args: {
    user: mockUser,
    menus: mockMenus,
    version: "2.1.0",
    currentPath: "/other-route", // Rota que não corresponde a nenhum item
    onHelpClick: () => {
      // Help clicked
    },
    onMenuItemClick: () => {
      // Menu item clicked
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Exemplo sem nenhum item ativo, demonstrando o estado padrão dos itens do menu."
      }
    }
  }
};
