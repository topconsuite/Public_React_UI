import type { Meta, StoryObj } from "@storybook/react-webpack5";
import SpeedDialMenu from "./index";

const meta: Meta<typeof SpeedDialMenu> = {
  title: "Atoms/SpeedDialMenu",
  component: SpeedDialMenu,
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true
    }
  },
  tags: ["autodocs"],
  argTypes: {
    menu: {
      control: "object",
      description: "Objeto do menu com id e title"
    },
    colorOnHover: {
      control: "color",
      description: "Cor ao passar o mouse"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;
const onClickHandle = () => null;

export const Default: Story = {
  args: {
    menu: {
      id: "menu-1",
      title: "Criar Novo"
    },
    colorOnHover: "#2196F3",
    onClick: () => onClickHandle
  }
};

export const Edit: Story = {
  args: {
    menu: {
      id: "menu-edit",
      title: "Editar Item"
    },
    colorOnHover: "#4CAF50",
    onClick: () => onClickHandle
  }
};

export const Delete: Story = {
  args: {
    menu: {
      id: "menu-delete",
      title: "Excluir Item"
    },
    colorOnHover: "#F44336",
    onClick: () => onClickHandle
  }
};

export const Settings: Story = {
  args: {
    menu: {
      id: "menu-settings",
      title: "Configurações Avançadas"
    },
    colorOnHover: "#FF9800",
    onClick: () => onClickHandle
  }
};
