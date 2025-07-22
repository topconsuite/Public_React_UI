import { Meta, StoryObj } from "@storybook/react-webpack5";
import {
  Box, Typography
} from "@mui/material";
import { I18nextProvider } from "react-i18next";
import React from "react";
import LanguageDropdown from "./index";
import i18n from "../../languages/i18n";

const meta: Meta<typeof LanguageDropdown> = {
  title: "Atoms/LanguageDropdown",
  component: LanguageDropdown,
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true,
      description: {
        component: "Componente dropdown para seleção de idioma com bandeiras. Integra com o sistema de tradução i18next."
      }
    }
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Clique no ícone de idioma para ver o dropdown:
      </Typography>
      <LanguageDropdown />
    </Box>
  )
};
