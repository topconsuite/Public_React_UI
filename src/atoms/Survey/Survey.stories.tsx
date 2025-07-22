import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Survey from "./index";
import { SurveyPlatform } from "../../store/global.enum";

const meta: Meta<typeof Survey> = {
  title: "Atoms/Survey",
  component: Survey,
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true,
      description: {
        component: "Componente para integração com plataformas de pesquisa. Atualmente suporta apenas Zoho."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    surveyPlatform: {
      control: { type: "select" },
      options: Object.values(SurveyPlatform),
      description: "Plataforma de pesquisa"
    },
    surveyId: {
      control: "text",
      description: "ID da pesquisa"
    },
    email: {
      control: "text",
      description: "Email do usuário"
    },
    loading: {
      control: "boolean",
      description: "Estado de carregamento"
    },
    additionalInfo: {
      control: "object",
      description: "Informações adicionais para a pesquisa"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ZohoSurvey: Story = {
  args: {
    surveyPlatform: SurveyPlatform.ZOHO,
    surveyId: "survey-123",
    email: "usuario@exemplo.com",
    loading: false
  }
};

export const LoadingSurvey: Story = {
  args: {
    surveyPlatform: SurveyPlatform.ZOHO,
    surveyId: "survey-456",
    email: "usuario@exemplo.com",
    loading: true
  }
};

export const WithAdditionalInfo: Story = {
  args: {
    surveyPlatform: SurveyPlatform.ZOHO,
    surveyId: "survey-789",
    email: "usuario@exemplo.com",
    loading: false,
    additionalInfo: {
      userId: "12345",
      department: "TI",
      role: "Desenvolvedor"
    }
  }
};
