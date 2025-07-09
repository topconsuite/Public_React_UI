import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Provider } from "jotai";
import React, { useState } from "react";
import { TopconDispatchAlternativeLogoAsset } from "@assets/company/index";
import SidebarDrawer from "./index";
import SidebarDrawerMenu from "../../atoms/SidebarDrawerMenu";
import SidebarDrawerMenus from "../SidebarDrawerMenus";
import SidebarDrawerSecondaryMenus from "../SidebarDrawerSecondaryMenus";

const meta: Meta<typeof SidebarDrawer> = {
  title: "Molecules/SidebarDrawer",
  component: SidebarDrawer,
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    )
  ],
  parameters: {
    layout: "fullscreen",
    docs: {
      autodocs: true,
      description: {
        component: "Drawer lateral com header, body e footer customizáveis."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    anchor: {
      control: { type: "select" },
      options: ["left", "top", "right", "bottom"],
      description: "Posição do drawer"
    },
    primarycolor: {
      control: "color",
      description: "Cor primária do drawer"
    },
    productIconPath: {
      control: "text",
      description: "Caminho do ícone do produto"
    },
    productIconFallbackPath: {
      control: "text",
      description: "Caminho do ícone de fallback"
    },
    productIconClass: {
      control: "text",
      description: "Classe CSS do ícone"
    },
    open: {
      control: "boolean",
      description: "Estado aberto/fechado"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

const SampleBodyMenus = (
  <>
    <SidebarDrawerMenu
      id="drawer-menu-1"
      title="Dashboard"
      icon="/path/to/dashboard-icon.svg"
      identifierColor="#2196F3"
      secondaryColor="#E3F2FD"
      type="primary"
    />
    <SidebarDrawerMenu
      id="drawer-menu-2"
      title="Veículos"
      icon="/path/to/vehicles-icon.svg"
      identifierColor="#4CAF50"
      secondaryColor="#E8F5E8"
      type="primary"
    />
    <SidebarDrawerMenu
      id="drawer-menu-3"
      title="Configurações"
      icon="/path/to/settings-icon.svg"
      identifierColor="#F44336"
      secondaryColor="#EFEBE9"
      type="primary"
    />
  </>
);

const SampleFooterMenus = (
  <>
    <SidebarDrawerMenu
      id="drawer-footer-1"
      title="Sair"
      icon="/path/to/logout-icon.svg"
      identifierColor="#9E9E9E"
      secondaryColor="#F5F5F5"
      type="secondary"
    />
  </>
);

export const Default: Story = {
  args: {
    anchor: "left",
    open: true,
    primarycolor: "#1976d2",
    productIconPath: TopconDispatchAlternativeLogoAsset,
    bodyChildren: SampleBodyMenus,
    footerChildren: SampleFooterMenus,
    onClose: () => { /* console.log("Drawer closed") */ }
  }
};

export const WithRealMenus: Story = {
  args: {
    anchor: "left",
    open: true,
    primarycolor: "#1976d2",
    productIconPath: TopconDispatchAlternativeLogoAsset,
    bodyChildren: <SidebarDrawerMenus />,
    footerChildren: <SidebarDrawerSecondaryMenus />,
    onClose: () => { /* console.log("Drawer closed") */ }
  }
};

const ControlledComponent = (args: typeof Default.args) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setOpen(!open)}>
        {open ? "Fechar" : "Abrir"}
        {" "}
        Drawer
      </button>
      <SidebarDrawer
        {...args}
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export const Controlled: Story = {
  render: ControlledComponent,
  args: {
    anchor: "left",
    primarycolor: "#1976d2",
    productIconPath: TopconDispatchAlternativeLogoAsset,
    bodyChildren: <SidebarDrawerMenus />,
    footerChildren: <SidebarDrawerSecondaryMenus />
  }
};

export const RightAnchor: Story = {
  args: {
    anchor: "right",
    open: true,
    primarycolor: "#4caf50",
    productIconPath: TopconDispatchAlternativeLogoAsset,
    bodyChildren: SampleBodyMenus,
    footerChildren: SampleFooterMenus,
    onClose: () => { /* console.log("Drawer closed") */ }
  }
};

export const CustomColors: Story = {
  args: {
    anchor: "left",
    open: true,
    primarycolor: "#9c27b0",
    productIconPath: TopconDispatchAlternativeLogoAsset,
    bodyChildren: SampleBodyMenus,
    footerChildren: SampleFooterMenus,
    onClose: () => { /* console.log("Drawer closed") */ }
  }
};
