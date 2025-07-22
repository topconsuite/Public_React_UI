import type { Meta, StoryObj } from "@storybook/react-webpack5";
import SidebarDrawerMenus from "./index";

const meta: Meta<typeof SidebarDrawerMenus> = {
  title: "Molecules/SidebarDrawerMenus",
  component: SidebarDrawerMenus,
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

export const WithCustomTheme: Story = {
  args: {},
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
};
