import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Add } from "@libraries/mui/icons";
import SpeedDialMenu from "@atoms/SpeedDialMenu";
import React from "react";
import { useTheme } from "@hooks/index";
import { AddAPhoto } from "@mui/icons-material";
import SpeedDial from "./index";

const meta: Meta<typeof SpeedDial> = {
  title: "Molecules/SpeedDial",
  component: SpeedDial,
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true
    }
  },
  tags: ["autodocs"],
  argTypes: {
    primaryColor: {
      control: "color",
      description: "Cor primária do componente"
    },
    secondColor: {
      control: "color",
      description: "Cor secundária do componente"
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Tamanho do botão principal"
    },
    open: {
      control: "boolean",
      description: "Estado de abertura do menu"
    },
    children: [
      <AddAPhoto key="add-photo" />
    ]
  }
};

export default meta;
type Story = StoryObj<typeof meta>;
const onClickHandle = () => null;

// Componente helper para usar o hook dentro do render
const SpeedDialWithTheme = (args: React.ComponentProps<typeof SpeedDial>) => {
  const { theme } = useTheme();

  return (
    <SpeedDial
      {...args}
    >
      <SpeedDialMenu
        menu={{
          id: "edit",
          title: "Editar"
        }}
        colorOnHover={theme.colors.primary}
        onClick={() => onClickHandle}
      />

      <SpeedDialMenu
        menu={{
          id: "delete",
          title: "Excluir"
        }}
        colorOnHover={theme.colors.secondary}
        onClick={() => onClickHandle}
      />

      <SpeedDialMenu
        menu={{
          id: "share",
          title: "Compartilhar"
        }}
        colorOnHover={theme.colors.tertiary}
        onClick={() => onClickHandle}
      />
    </SpeedDial>
  );
};

export const Default: Story = {
  render: (args) => <SpeedDialWithTheme {...args} />,
  args: {
    primaryColor: "#1976d2",
    secondColor: "#ffffff",
    size: "medium",
    icon: <Add />,
    open: false,
    onOpen: () => onClickHandle,
    onClose: () => onClickHandle
  }
};

export const Opened: Story = {
  render: (args) => <SpeedDialWithTheme {...args} />,
  args: {
    ...Default.args,
    open: true
  }
};

export const Small: Story = {
  render: (args) => <SpeedDialWithTheme {...args} />,
  args: {
    ...Default.args,
    size: "small"
  }
};

export const Large: Story = {
  render: (args) => <SpeedDialWithTheme {...args} />,
  args: {
    ...Default.args,
    size: "large"
  }
};

export const CustomColors: Story = {
  args: {
    ...Default.args,
    primaryColor: "#e91e63",
    secondColor: "#ffffff"
  }
};
