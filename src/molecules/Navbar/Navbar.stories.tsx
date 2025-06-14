import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Navbar from "./index";

const meta: Meta<typeof Navbar> = {
  title: "Molecules/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
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

export const WithDarkTheme: Story = {
  args: {},
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
};
