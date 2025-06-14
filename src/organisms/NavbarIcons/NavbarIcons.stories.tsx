import type { Meta, StoryObj } from "@storybook/react-webpack5";
import NavbarIcons from "./index";

const meta: Meta<typeof NavbarIcons> = {
  title: "Organisms/NavbarIcons",
  component: NavbarIcons,
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true
    }
  },
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const WithDarkBackground: Story = {
  args: {},
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
};

export const WithLightBackground: Story = {
  args: {},
  parameters: {
    backgrounds: {
      default: "light"
    }
  }
};
