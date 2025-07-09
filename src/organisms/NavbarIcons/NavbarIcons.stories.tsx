import type { Meta, StoryObj } from "@storybook/react-webpack5";
import {
  Box, AppBar, Toolbar, Typography
} from "@mui/material";
import { I18nextProvider } from "react-i18next";
import NavbarIcons from "./index";
import i18n from "../../languages/i18n";

const meta: Meta<typeof NavbarIcons> = {
  title: "Organisms/NavbarIcons",
  component: NavbarIcons,
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true,
      description: {
        component: "Componente de ícones da navbar com dropdown de seleção de idioma integrado."
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
        Ícones da Navbar com Dropdown de Idioma:
      </Typography>
      <NavbarIcons />
      <Typography variant="body2" sx={{ mt: 2, color: "text.secondary" }}>
        Clique no ícone de idioma (globo) para ver o dropdown com as opções de idioma e bandeiras.
      </Typography>
    </Box>
  )
};

export const InFullNavbar: Story = {
  args: {},
  render: () => (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#ffffff", color: "#333", boxShadow: 1 }}>
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
          <Typography variant="h6" component="div" sx={{ color: "rgb(0, 41, 81)" }}>
            Sistema Fleet
          </Typography>
          <NavbarIcons />
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Demonstração da Navbar Completa
        </Typography>
        <Typography variant="body1" paragraph>
          Esta é uma demonstração de como os ícones da navbar aparecem em um contexto real.
          O dropdown de idioma está totalmente funcional e permite alternar entre:
        </Typography>
        <ul>
          <li>🇧🇷 Português (BR)</li>
          <li>🇺🇸 English (US)</li>
          <li>🇪🇸 Español (ES)</li>
        </ul>
        <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic" }}>
          Experimente clicar no ícone de idioma (globo) na navbar acima para ver o dropdown em ação.
        </Typography>
      </Box>
    </Box>
  ),
  parameters: {
    layout: "fullscreen"
  }
};

export const WithDarkBackground: Story = {
  args: {},
  render: () => (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}>
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
          <Typography variant="h6" component="div">
            Dark Theme Navbar
          </Typography>
          <Box sx={{
            "& .MuiIconButton-root": {
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.08)"
              }
            }
          }}
          >
            <NavbarIcons />
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{
        p: 3, backgroundColor: "#2a2a2a", color: "#ffffff", minHeight: "200px"
      }}
      >
        <Typography variant="body1">
          Exemplo de como os ícones da navbar aparecem em um tema escuro.
          O dropdown de idioma se adapta automaticamente ao contexto.
        </Typography>
      </Box>
    </Box>
  ),
  parameters: {
    layout: "fullscreen"
  }
};
