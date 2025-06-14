import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Button from "./index";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true
    }
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "Texto do botão"
    },
    size: {
      control: { type: "select" },
      options: ["small", "large"],
      description: "Tamanho do botão"
    },
    disabled: {
      control: "boolean",
      description: "Estado desabilitado"
    },
    loading: {
      control: "boolean",
      description: "Estado de carregamento"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Botão Padrão",
    size: "small",
    disabled: false
  }
};

export const Large: Story = {
  args: {
    text: "Botão Grande",
    size: "large"
  }
};

export const Disabled: Story = {
  args: {
    text: "Botão",
    size: "large",
    disabled: true,
    loading: false
  }
};

export const Loading: Story = {
  args: {
    text: "Carregando...",
    size: "small",
    loading: true
  }
};

export const LargeLoading: Story = {
  args: {
    text: "Carregando Grande",
    size: "large",
    loading: true
  }
};

export const SmallDisabled: Story = {
  args: {
    text: "Botão",
    size: "small",
    disabled: true,
    loading: false
  }
};
