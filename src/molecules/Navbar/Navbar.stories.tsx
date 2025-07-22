import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { iconTypes } from "@assets/company/index";
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
  argTypes: {
    productIconSrc: {
      control: { type: "select" },
      options: Object.keys(iconTypes),
      description: "Ícone SVG",
      mapping: iconTypes
    },
    productIconAlt: {
      control: { type: "text" },
      description: "Alt text for the product icon"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    productIconSrc: "TopconDispatchLogoAsset",
    productIconAlt: "Topcon icon"
  }
};
