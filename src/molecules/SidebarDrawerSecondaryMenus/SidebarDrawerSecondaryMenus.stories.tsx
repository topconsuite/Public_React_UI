import type { Meta, StoryObj } from "@storybook/react-webpack5";
import SidebarDrawerSecondaryMenus from "./index";

const meta: Meta<typeof SidebarDrawerSecondaryMenus> = {
  title: "Molecules/SidebarDrawerSecondaryMenus",
  component: SidebarDrawerSecondaryMenus,
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
