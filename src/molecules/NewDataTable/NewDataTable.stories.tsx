import type { Meta, StoryObj } from "@storybook/react-webpack5";
import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import {
  Grid, Button, Box, Typography
} from "@mui/material";
import NewDataTable from "./index";
import { Edit as EditIcon, Delete as DeleteForeverIcon } from "../../libraries/mui/icons";
import { useTranslation } from "../../hooks/useTranslation";
import { DataTableMessages } from "../../languages/interfaces/dataTableMessages";
import "../../languages/i18n";

// Mock data for the table
const mockData = [
  {
    id: 1,
    name: "João Silva",
    email: "joao.silva@empresa.com",
    age: 30,
    department: "Tecnologia",
    status: "Ativo"
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "maria.santos@empresa.com",
    age: 28,
    department: "Marketing",
    status: "Ativo"
  },
  {
    id: 3,
    name: "Pedro Oliveira",
    email: "pedro.oliveira@empresa.com",
    age: 35,
    department: "Vendas",
    status: "Inativo"
  },
  {
    id: 4,
    name: "Ana Costa",
    email: "ana.costa@empresa.com",
    age: 32,
    department: "RH",
    status: "Ativo"
  },
  {
    id: 5,
    name: "Carlos Ferreira",
    email: "carlos.ferreira@empresa.com",
    age: 29,
    department: "Financeiro",
    status: "Ativo"
  },
  {
    id: 6,
    name: "Laura Almeida",
    email: "laura.almeida@empresa.com",
    age: 31,
    department: "Tecnologia",
    status: "Inativo"
  },
  {
    id: 7,
    name: "Rafael Santos",
    email: "rafael.santos@empresa.com",
    age: 40,
    department: "Desenvolvimento",
    status: "Ativo"
  },
  {
    id: 8,
    name: "Mariana Ferreira",
    email: "mariana.ferreira@empresa.com",
    age: 35,
    department: "Recursos Humanos",
    status: "Ativo"
  },
  {
    id: 9,
    name: "Ricardo Pereira",
    email: "ricardo.pereira@empresa.com",
    age: 38,
    department: "Vendas",
    status: "Ativo"
  },
  {
    id: 10,
    name: "Carla Souza",
    email: "carla.souza@empresa.com",
    age: 36,
    department: "Financeiro",
    status: "Ativo"
  },
  {
    id: 11,
    name: "Bruno Almeida",
    email: "bruno.almeida@empresa.com",
    age: 42,
    department: "Tecnologia",
    status: "Ativo"
  },
  {
    id: 12,
    name: "Marcelo Santos",
    email: "marcelo.santos@empresa.com",
    age: 45,
    department: "Desenvolvimento",
    status: "Ativo"
  },
  {
    id: 13,
    name: "Gustavo Ferreira",
    email: "gustavo.ferreira@empresa.com",
    age: 48,
    department: "RH",
    status: "Ativo"
  },
  {
    id: 14,
    name: "Isabela Santos",
    email: "isabela.santos@empresa.com",
    age: 44,
    department: "Marketing",
    status: "Ativo"
  },
  {
    id: 15,
    name: "Bruno Almeida",
    email: "bruno.almeida@empresa.com",
    age: 42,
    department: "Tecnologia",
    status: "Ativo"
  },
  {
    id: 16,
    name: "Marcelo Santos",
    email: "marcelo.santos@empresa.com",
    age: 45,
    department: "Desenvolvimento",
    status: "Ativo"
  },
  {
    id: 17,
    name: "Gustavo Ferreira",
    email: "gustavo.ferreira@empresa.com",
    age: 48,
    department: "RH",
    status: "Ativo"
  },
  {
    id: 18,
    name: "Isabela Santos",
    email: "isabela.santos@empresa.com",
    age: 44,
    department: "Marketing",
    status: "Ativo"
  },
  {
    id: 19,
    name: "Bruno Almeida",
    email: "bruno.almeida@empresa.com",
    age: 42,
    department: "Tecnologia",
    status: "Ativo"
  },
  {
    id: 20,
    name: "Marcelo Santos",
    email: "marcelo.santos@empresa.com",
    age: 45,
    department: "Desenvolvimento",
    status: "Ativo"
  }
];

// Mock columns configuration
const mockColumns = [
  {
    title: "ID",
    data: "id",
    filterable: true,
    propertyName: "id",
    filterTitle: "ID do usuário"
  },
  {
    title: "Nome",
    data: "name",
    filterable: true,
    propertyName: "name",
    filterTitle: "Nome do usuário"
  },
  {
    title: "E-mail",
    data: "email",
    filterable: true,
    propertyName: "email",
    filterTitle: "E-mail do usuário"
  },
  {
    title: "Idade",
    data: "age",
    filterable: true,
    propertyName: "age",
    filterTitle: "Idade do usuário"
  },
  {
    title: "Departamento",
    data: "department",
    filterable: true,
    propertyName: "department",
    filterTitle: "Departamento do usuário"
  },
  {
    title: "Status",
    data: "status",
    filterable: true,
    propertyName: "status",
    filterTitle: "Status do usuário"
  }
];

// Mock buttons
const mockButtons = [
  {
    key: "add",
    name: "Adicionar",
    text: "Novo",
    className: "btn btn-primary",
    callback: () => { /* alert("Adicionar novo item") */ }
  },
  {
    key: "export",
    name: "Exportar",
    text: "Exportar",
    className: "btn btn-secondary",
    callback: () => { /* alert("Exportar dados") */ }
  }
];

// Mock actions
const mockActions = [
  {
    ref: "edit",
    callback: () => { /* alert(`Editar: ${rowData.name}`) */ }
  },
  {
    ref: "delete",
    callback: () => { /* alert(`Deletar: ${rowData.name}`) */ }
  }
];

const meta: Meta<typeof NewDataTable> = {
  title: "Molecules/NewDataTable",
  component: NewDataTable,
  parameters: {
    layout: "fullscreen",
    docs: {
      autodocs: true,
      description: {
        component: "Componente de tabela de dados avançada baseado no DataTables.net com funcionalidades de filtro, paginação, busca e ações personalizadas."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    data: {
      control: "object",
      description: "Array de dados para exibir na tabela"
    },
    columns: {
      control: "object",
      description: "Configuração das colunas da tabela"
    },
    settings: {
      control: "object",
      description: "Configurações adicionais do DataTables"
    },
    actions: {
      control: "object",
      description: "Ações disponíveis para cada linha da tabela"
    },
    buttons: {
      control: "object",
      description: "Botões personalizados para a tabela"
    },
    filters: {
      control: "boolean",
      description: "Habilita ou desabilita os filtros avançados"
    },
    editColumns: {
      control: "boolean",
      description: "Permite editar a visibilidade das colunas"
    },
    title: {
      control: "text",
      description: "Título da tabela"
    },
    use: {
      control: "select",
      options: ["maintenanceScreen", "dialogScreen"],
      description: "Tipo de uso da tabela"
    },
    width: {
      control: "text",
      description: "Largura da tabela"
    },
    showPaging: {
      control: "boolean",
      description: "Exibe ou oculta a paginação"
    },
    showInfo: {
      control: "boolean",
      description: "Exibe ou oculta as informações da tabela"
    },
    showSearching: {
      control: "boolean",
      description: "Exibe ou oculta o campo de busca"
    },
    numberOfFilteredOptions: {
      control: "number",
      description: "Número de opções filtradas"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: mockData,
    columns: mockColumns,
    title: "Lista de Usuários",
    filters: true,
    editColumns: true,
    use: "maintenanceScreen",
    showPaging: true,
    showInfo: true,
    showSearching: true,
    buttons: mockButtons,
    actions: mockActions,
    numberOfFilteredOptions: 0
  }
};

// Button component for actions (similar to the original)
const ButtonTable: React.FC<{ className: string; children: React.ReactNode }> = ({ className, children }) => (
  <button
    type="button"
    className={className}
    style={{
      border: "none", background: "transparent", cursor: "pointer", padding: "4px", display: "flex", alignItems: "center", justifyContent: "center", color: "#707070"
    }}
  >
    {children}
  </button>
);

// Mock data for drivers based on the Drivers component
const mockDriversData = [
  {
    id: 1,
    name: "João Silva Santos",
    re: "RE001",
    cpf: "123.456.789-01",
    license_number: "12345678901",
    license_expired_date: "2025-12-31",
    hardware: { dev_id: "IB001" },
    userCreatedBy: { name: "Admin Sistema" },
    userLastModifiedBy: { name: "Admin Sistema" },
    active: true
  },
  {
    id: 2,
    name: "Maria Oliveira Costa",
    re: "RE002",
    cpf: "987.654.321-09",
    license_number: "98765432109",
    license_expired_date: "2024-06-15",
    hardware: { dev_id: "IB002" },
    userCreatedBy: { name: "Supervisor" },
    userLastModifiedBy: { name: "Supervisor" },
    active: true
  },
  {
    id: 3,
    name: "Carlos Eduardo Pereira",
    re: "RE003",
    cpf: "456.789.123-45",
    license_number: "45678912345",
    license_expired_date: "2023-03-20",
    hardware: null,
    userCreatedBy: { name: "Admin Sistema" },
    userLastModifiedBy: { name: "Gerente" },
    active: false
  },
  {
    id: 4,
    name: "Ana Paula Rodrigues",
    re: "RE004",
    cpf: "789.123.456-78",
    license_number: "78912345678",
    license_expired_date: "2026-09-10",
    hardware: { dev_id: "IB004" },
    userCreatedBy: { name: "Supervisor" },
    userLastModifiedBy: { name: "Admin Sistema" },
    active: true
  },
  {
    id: 5,
    name: "Roberto Almeida Souza",
    re: "RE005",
    cpf: "321.654.987-32",
    license_number: "32165498732",
    license_expired_date: "2025-01-25",
    hardware: { dev_id: "IB005" },
    userCreatedBy: { name: "Gerente" },
    userLastModifiedBy: { name: "Supervisor" },
    active: true
  }
];

// Mock translation function for drivers
const mockDriversT = (key: string) => {
  const translations: Record<string, string> = {
    "DriverModuleMessages.fullname": "Nome Completo",
    "DriverModuleMessages.re": "RE",
    "DriverModuleMessages.document": "CPF",
    "DriverModuleMessages.licenseNumber": "CNH",
    "DriverModuleMessages.licenseExpiredDate": "Data de Expiração",
    "DriverModuleMessages.iButton": "iButton",
    "GlobalMessages.columnCreatedBy": "Criado Por",
    "GlobalMessages.columnLastUpdatedBy": "Última Atualização Por",
    "DataTableMessages.status": "Status",
    "DataTableMessages.actions": "Ações",
    "GlobalMessages.active": "Ativo",
    "GlobalMessages.inactive": "Inativo",
    "DataTableMessages.buttonsAddNew": "Adicionar Novo",
    "DataTableMessages.buttonsRefresh": "Atualizar",
    "DataTableMessages.buttonsPrint": "Imprimir",
    "DataTableMessages.buttonsExport": "Exportar",
    "DataTableMessages.buttonsViewRoles": "Ver Funções"
  };

  return translations[key] || key;
};

// Driver interface
interface Driver {
  name: string;
  re?: string;
  cpf: string;
  license_number?: string;
  license_expired_date?: string;
  hardware?: { dev_id?: string };
  userCreatedBy?: { name?: string };
  userLastModifiedBy?: { name?: string };
  active: boolean;
}

// Mock utils for drivers
const mockDriversUtils = {
  formatDateIfHave: (date: Date) => date.toLocaleDateString("pt-BR"),
  clickButtonDomElement: () => {
    // console.log(`Clicked button`);
  }
};

// Columns configuration based on Drivers component
const mockDriversColumns = [
  {
    title: mockDriversT("DriverModuleMessages.fullname"),
    data: (driver: unknown) => (driver as Driver).name,
    filterable: true,
    defaultContent: "",
    propertyName: "name"
  },
  {
    title: mockDriversT("DriverModuleMessages.re"),
    data: (driver: unknown) => (driver as Driver).re || "",
    filterable: true,
    defaultContent: "",
    propertyName: "re"
  },
  {
    title: mockDriversT("DriverModuleMessages.document"),
    data: (driver: unknown) => (driver as Driver).cpf,
    filterable: true,
    defaultContent: "",
    propertyName: "cpf"
  },
  {
    title: mockDriversT("DriverModuleMessages.licenseNumber"),
    data: (driver: unknown) => (driver as Driver).license_number || "",
    filterable: true,
    defaultContent: "",
    propertyName: "license_number"
  },
  {
    title: mockDriversT("DriverModuleMessages.licenseExpiredDate"),
    data: (driver: unknown) => (driver as Driver).license_expired_date,
    render: (data: unknown) => (data ? mockDriversUtils.formatDateIfHave(new Date(data as string)) : ""),
    filterable: true,
    defaultContent: "",
    propertyName: "license_expired_date"
  },
  {
    title: mockDriversT("DriverModuleMessages.iButton"),
    data: (driver: unknown) => (driver as Driver).hardware?.dev_id || "",
    filterable: false,
    defaultContent: "",
    propertyName: "dev_id"
  },
  {
    title: mockDriversT("GlobalMessages.columnCreatedBy"),
    data: (driver: unknown) => (driver as Driver)?.userCreatedBy?.name ?? "",
    filterable: true,
    defaultContent: "",
    propertyName: "userCreatedBy.name"
  },
  {
    title: mockDriversT("GlobalMessages.columnLastUpdatedBy"),
    data: (driver: unknown) => (driver as Driver)?.userLastModifiedBy?.name ?? "",
    filterable: true,
    defaultContent: "",
    propertyName: "userLastModifiedBy.name"
  },
  {
    title: mockDriversT("DataTableMessages.status"),
    data: (driver: unknown) => (
      `<b style="color: ${(driver as Driver).active ? "rgb(70, 193, 125)" : "rgb(230, 74, 25)"}">
        ${(driver as Driver).active ? mockDriversT("GlobalMessages.active").toUpperCase() : mockDriversT("GlobalMessages.inactive").toUpperCase()}
      </b>`
    ),
    filterable: true,
    propertyName: "active"
  },
  {
    title: mockDriversT("DataTableMessages.actions"),
    orderable: false,
    searchable: false,
    data: () => ReactDOMServer.renderToString(
      <Grid container spacing={1}>
        <Grid item xs sm md lg xl>
          <ButtonTable className="action-button modules-driver-list-edit"><EditIcon /></ButtonTable>
        </Grid>
        <Grid item xs sm md lg xl>
          <ButtonTable className="action-button modules-driver-list-delete"><DeleteForeverIcon /></ButtonTable>
        </Grid>
      </Grid>
    ),
    width: "150px",
    filterable: false
  }
];

// Buttons configuration for drivers
const mockDriversButtons = [
  {
    name: mockDriversT("DataTableMessages.buttonsAddNew"),
    key: "add",
    callback: () => { /* console.log("Add new driver") */ }
  },
  {
    name: mockDriversT("DataTableMessages.buttonsRefresh"),
    key: "refresh",
    callback: () => { /* console.log("Refresh drivers list") */ }
  },
  {
    name: mockDriversT("DataTableMessages.buttonsPrint"),
    key: "print",
    callback: () => mockDriversUtils.clickButtonDomElement(),
    extend: "print",
    className: "button-print",
    exportOptions: {
      columns: "th:not(:last-child)"
    }
  },
  {
    name: mockDriversT("DataTableMessages.buttonsExport"),
    callback: () => mockDriversUtils.clickButtonDomElement(),
    extend: "csv",
    key: "export",
    fieldSeparator: ";",
    className: "button-export",
    filename: `relatorio_motoristas_${new Date().toISOString().split("T")[0]}`,
    exportOptions: {
      columns: "th:not(:last-child)"
    }
  },
  {
    name: mockDriversT("DataTableMessages.buttonsViewRoles"),
    key: "addRole",
    callback: () => { /* console.log("View driver roles") */ }
  }
];

// Actions configuration for drivers
const mockDriversActions = [
  {
    ref: ".modules-driver-list-details",
    callback: () => { /* console.log("View details:", rowData) */ }
  },
  {
    ref: ".modules-driver-list-edit",
    callback: () => { /* console.log("Edit driver:", rowData) */ }
  },
  {
    ref: ".modules-driver-list-delete",
    callback: () => { /* console.log("Delete driver:", rowData) */ }
  }
];

export const DriversTable: Story = {
  args: {
    data: mockDriversData,
    columns: mockDriversColumns,
    title: "Lista de Motoristas",
    filters: true,
    editColumns: true,
    use: "maintenanceScreen",
    showPaging: true,
    showInfo: true,
    showSearching: true,
    buttons: mockDriversButtons,
    actions: mockDriversActions,
    settings: {
      order: [[0, "asc"]],
      columnDefs: [{ className: "dt-center", targets: -1 }]
    },
    numberOfFilteredOptions: 0
  }
};

export const DriversTableCompact: Story = {
  args: {
    ...DriversTable.args,
    filters: false,
    editColumns: false,
    showPaging: false,
    showInfo: false,
    title: "Lista de Motoristas (Compacta)",
    data: mockDriversData.slice(0, 3)
  }
};

// Translation Demo Component
const TranslationDemo: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  // Mock data with translation keys
  const translatedMockData = [
    {
      id: 1,
      name: "João Silva",
      email: "joao.silva@empresa.com",
      age: 30,
      department: "Tecnologia",
      status: "Ativo"
    },
    {
      id: 2,
      name: "Maria Santos",
      email: "maria.santos@empresa.com",
      age: 28,
      department: "Marketing",
      status: "Ativo"
    },
    {
      id: 3,
      name: "Pedro Oliveira",
      email: "pedro.oliveira@empresa.com",
      age: 35,
      department: "Vendas",
      status: "Inativo"
    },
    {
      id: 4,
      name: "Ana Costa",
      email: "ana.costa@empresa.com",
      age: 32,
      department: "RH",
      status: "Ativo"
    },
    {
      id: 5,
      name: "Carlos Ferreira",
      email: "carlos.ferreira@empresa.com",
      age: 29,
      department: "Financeiro",
      status: "Ativo"
    }
  ];

  // Columns using translation keys
  const translatedColumns = [
    {
      title: "ID",
      data: "id",
      filterable: true,
      propertyName: "id",
      filterTitle: "ID"
    },
    {
      title: t(DataTableMessages.name),
      data: "name",
      filterable: true,
      propertyName: "name",
      filterTitle: t(DataTableMessages.name)
    },
    {
      title: "E-mail",
      data: "email",
      filterable: true,
      propertyName: "email",
      filterTitle: "E-mail"
    },
    {
      title: t(DataTableMessages.age),
      data: "age",
      filterable: true,
      propertyName: "age",
      filterTitle: t(DataTableMessages.age)
    },
    {
      title: t(DataTableMessages.department),
      data: "department",
      filterable: true,
      propertyName: "department",
      filterTitle: t(DataTableMessages.department)
    },
    {
      title: t(DataTableMessages.status),
      data: "status",
      filterable: true,
      propertyName: "status",
      filterTitle: t(DataTableMessages.status)
    }
  ];

  // Buttons using translation keys
  const translatedButtons = [
    {
      key: "add",
      name: t(DataTableMessages.buttonsAddNew),
      text: t(DataTableMessages.buttonsAddNew),
      className: "btn btn-primary",
      callback: () => { /* alert(t(DataTableMessages.buttonsAddNew)) */ }
    },
    {
      key: "export",
      name: t(DataTableMessages.buttonsExport),
      text: t(DataTableMessages.buttonsExport),
      className: "btn btn-secondary",
      callback: () => { /* alert(t(DataTableMessages.buttonsExport)) */ }
    },
    {
      key: "refresh",
      name: t(DataTableMessages.buttonsRefresh),
      text: t(DataTableMessages.buttonsRefresh),
      className: "btn btn-info",
      callback: () => { /* alert(t(DataTableMessages.buttonsRefresh)) */ }
    }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {t(DataTableMessages.translationDemo)}
      </Typography>

      <Box sx={{
        mb: 3, display: "flex", gap: 2, alignItems: "center"
      }}
      >
        <Typography variant="h6">
          {t(DataTableMessages.currentLanguage)}
          :
          {currentLanguage.toUpperCase()}
        </Typography>

        <Button
          variant={currentLanguage === "pt-BR" ? "contained" : "outlined"}
          onClick={() => changeLanguage("pt-BR")}
          size="small"
        >
          Português (BR)
        </Button>

        <Button
          variant={currentLanguage === "en-US" ? "contained" : "outlined"}
          onClick={() => changeLanguage("en-US")}
          size="small"
        >
          English (US)
        </Button>

        <Button
          variant={currentLanguage === "es-ES" ? "contained" : "outlined"}
          onClick={() => changeLanguage("es-ES")}
          size="small"
        >
          Español (ES)
        </Button>
      </Box>

      <NewDataTable
        data={translatedMockData}
        columns={translatedColumns}
        title={t(DataTableMessages.employeeList)}
        filters
        editColumns
        use="maintenanceScreen"
        showPaging
        showInfo
        showSearching
        buttons={translatedButtons}
        actions={mockActions}
        numberOfFilteredOptions={0}
      />
    </Box>
  );
};

export const WithTranslation: Story = {
  render: () => <TranslationDemo />,
  parameters: {
    docs: {
      description: {
        story: "Demonstração do sistema de tradução do NewDataTable. Use os botões para alternar entre idiomas e veja como as traduções são aplicadas em tempo real."
      }
    }
  }
};
