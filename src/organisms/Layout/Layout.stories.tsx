import type { Meta, StoryObj } from "@storybook/react-webpack5";
import NewDataTable from "@molecules/NewDataTable";
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Settings as SettingsIcon,
  Assessment as AssessmentIcon,
  Phone as PhoneIcon,
  GetApp as GetAppIcon
} from "@mui/icons-material";
import Layout from "./index";

const mockUser = {
  name: "João Silva",
  email: "joao.silva@empresa.com",
  admin: true,
  super_admin: false
};

const mockMenus = {
  "Principal": [
    {
      id: "dashboard",
      text: "Dashboard",
      icon: <DashboardIcon />,
      iconName: "ConcreteAsset",
      link: "/dashboard"
    },
    {
      id: "users",
      text: "Usuários",
      icon: <PeopleIcon />,
      iconName: "SettingsAsset",
      link: "/users",
      isPrivate: true
    }
  ],
  "Configurações": [
    {
      id: "settings",
      text: "Configurações",
      icon: <SettingsIcon />,
      iconName: "EditAsset",
      link: "/settings"
    },
    {
      id: "reports",
      text: "Relatórios",
      icon: <AssessmentIcon />,
      iconName: "LogoutAsset",
      link: "/reports"
    }
  ],
  "Suporte": [
    {
      id: "contact",
      text: "Fale Conosco",
      icon: <PhoneIcon />,
      iconName: "ConcreteAsset",
      component: "modalContactUs"
    },
    {
      id: "install",
      text: "Instalar App",
      icon: <GetAppIcon />,
      iconName: "SettingsAsset",
      component: "installPWA"
    }
  ]
};

const meta: Meta<typeof Layout> = {
  title: "Organisms/Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
    docs: {
      autodocs: true,
      description: {
        component: "Componente de layout principal que combina Navbar e Sidebar com funcionalidades responsivas e configuráveis."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    primaryColor: {
      control: "color",
      description: "Cor primária do tema da aplicação"
    },
    showLogo: {
      control: "boolean",
      description: "Controla se a logo deve ser exibida no Navbar"
    },
    hideSidebarOnMobile: {
      control: "boolean",
      description: "Controla se a sidebar deve ser ocultada em dispositivos móveis"
    },
    navbarProps: {
      control: "object",
      description: "Propriedades adicionais para o componente Navbar"
    },
    menus: {
      control: "object",
      description: "Estrutura de menus unificada para Sidebar e DrawerMenu"
    },
    onMenuItemClick: {
      action: "menuItemClicked",
      description: "Callback chamado quando um item do menu é clicado"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    primaryColor: "#002951",
    showLogo: true,
    hideSidebarOnMobile: true,
    menus: mockMenus,
    onMenuItemClick: () => {
      // Menu item clicked
    }
  }
};

export const WithUnifiedMenus: Story = {
  args: {
    primaryColor: "#002951",
    showLogo: true,
    hideSidebarOnMobile: true,
    menus: mockMenus,
    onMenuItemClick: () => {
      // Menu item clicked
      // Clicou em: menu.text
    },
    navbarProps: {
      user: mockUser,
      version: "2.1.0",
      userPhotoSrc: "https://thumbs.dreamstime.com/b/vetor-de-%C3%ADcone-perfil-do-avatar-padr%C3%A3o-foto-usu%C3%A1rio-m%C3%ADdia-social-183042379.jpg?w=768",
      onSignOut: () => {
        // Sign out clicked
        // Logout realizado!
      },
      onHelpClick: () => {
        // Help clicked
        // Ajuda solicitada!
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Layout com menus unificados que são compartilhados entre o Sidebar (desktop) e o DrawerMenu (mobile). Os mesmos dados de menu são utilizados em ambos os componentes, garantindo consistência na navegação."
      }
    }
  }
};

const sampleData = [
  {
    id: 1, name: "João Silva", email: "joao.silva@empresa.com", department: "TI", position: "Desenvolvedor Senior", salary: "R$ 8.500", hireDate: "2020-03-15", status: "Ativo", city: "São Paulo"
  },
  {
    id: 2, name: "Maria Santos", email: "maria.santos@empresa.com", department: "RH", position: "Analista de RH", salary: "R$ 5.200", hireDate: "2019-07-22", status: "Ativo", city: "Rio de Janeiro"
  },
  {
    id: 3, name: "Pedro Costa", email: "pedro.costa@empresa.com", department: "Financeiro", position: "Contador", salary: "R$ 6.800", hireDate: "2018-11-10", status: "Inativo", city: "Belo Horizonte"
  },
  {
    id: 4, name: "Ana Oliveira", email: "ana.oliveira@empresa.com", department: "Marketing", position: "Coordenadora", salary: "R$ 7.200", hireDate: "2021-01-08", status: "Ativo", city: "Porto Alegre"
  },
  {
    id: 5, name: "Carlos Ferreira", email: "carlos.ferreira@empresa.com", department: "Vendas", position: "Vendedor", salary: "R$ 4.500", hireDate: "2022-05-12", status: "Ativo", city: "Brasília"
  },
  {
    id: 6, name: "Lucia Mendes", email: "lucia.mendes@empresa.com", department: "TI", position: "Analista de Sistemas", salary: "R$ 6.200", hireDate: "2020-09-03", status: "Ativo", city: "São Paulo"
  },
  {
    id: 7, name: "Roberto Lima", email: "roberto.lima@empresa.com", department: "Operações", position: "Supervisor", salary: "R$ 5.800", hireDate: "2019-12-18", status: "Ativo", city: "Curitiba"
  },
  {
    id: 8, name: "Fernanda Rocha", email: "fernanda.rocha@empresa.com", department: "Marketing", position: "Designer", salary: "R$ 4.800", hireDate: "2021-08-25", status: "Ativo", city: "Salvador"
  },
  {
    id: 9, name: "Marcos Alves", email: "marcos.alves@empresa.com", department: "TI", position: "DevOps", salary: "R$ 9.200", hireDate: "2020-02-14", status: "Ativo", city: "São Paulo"
  },
  {
    id: 10, name: "Patricia Gomes", email: "patricia.gomes@empresa.com", department: "RH", position: "Gerente de RH", salary: "R$ 8.800", hireDate: "2017-06-30", status: "Ativo", city: "Rio de Janeiro"
  },
  {
    id: 11, name: "Rafael Souza", email: "rafael.souza@empresa.com", department: "Financeiro", position: "Analista Financeiro", salary: "R$ 5.500", hireDate: "2021-03-20", status: "Ativo", city: "Fortaleza"
  },
  {
    id: 12, name: "Juliana Barbosa", email: "juliana.barbosa@empresa.com", department: "Vendas", position: "Gerente de Vendas", salary: "R$ 9.500", hireDate: "2018-10-05", status: "Ativo", city: "Recife"
  },
  {
    id: 13, name: "Diego Martins", email: "diego.martins@empresa.com", department: "TI", position: "Arquiteto de Software", salary: "R$ 12.000", hireDate: "2019-04-12", status: "Ativo", city: "São Paulo"
  },
  {
    id: 14, name: "Camila Reis", email: "camila.reis@empresa.com", department: "Marketing", position: "Analista de Marketing", salary: "R$ 4.200", hireDate: "2022-01-15", status: "Ativo", city: "Goiânia"
  },
  {
    id: 15, name: "Bruno Cardoso", email: "bruno.cardoso@empresa.com", department: "Operações", position: "Operador", salary: "R$ 3.800", hireDate: "2021-11-08", status: "Inativo", city: "Manaus"
  },
  {
    id: 16, name: "Renata Pereira", email: "renata.pereira@empresa.com", department: "RH", position: "Recrutadora", salary: "R$ 4.500", hireDate: "2020-07-19", status: "Ativo", city: "Vitória"
  },
  {
    id: 17, name: "Gustavo Nunes", email: "gustavo.nunes@empresa.com", department: "TI", position: "Desenvolvedor Pleno", salary: "R$ 6.800", hireDate: "2021-05-22", status: "Ativo", city: "Florianópolis"
  },
  {
    id: 18, name: "Larissa Campos", email: "larissa.campos@empresa.com", department: "Financeiro", position: "Assistente Financeiro", salary: "R$ 3.200", hireDate: "2022-09-10", status: "Ativo", city: "João Pessoa"
  },
  {
    id: 19, name: "Thiago Moreira", email: "thiago.moreira@empresa.com", department: "Vendas", position: "Representante", salary: "R$ 3.500", hireDate: "2021-12-03", status: "Ativo", city: "Natal"
  },
  {
    id: 20, name: "Vanessa Torres", email: "vanessa.torres@empresa.com", department: "Marketing", position: "Social Media", salary: "R$ 3.800", hireDate: "2022-02-28", status: "Ativo", city: "Maceió"
  },
  {
    id: 21, name: "Alexandre Silva", email: "alexandre.silva@empresa.com", department: "TI", position: "Scrum Master", salary: "R$ 8.200", hireDate: "2020-01-20", status: "Ativo", city: "São Paulo"
  },
  {
    id: 22, name: "Priscila Dias", email: "priscila.dias@empresa.com", department: "RH", position: "Analista de Benefícios", salary: "R$ 4.800", hireDate: "2021-06-14", status: "Ativo", city: "Aracaju"
  },
  {
    id: 23, name: "Leonardo Freitas", email: "leonardo.freitas@empresa.com", department: "Operações", position: "Coordenador", salary: "R$ 6.500", hireDate: "2019-08-07", status: "Ativo", city: "Campo Grande"
  },
  {
    id: 24, name: "Isabela Castro", email: "isabela.castro@empresa.com", department: "Financeiro", position: "Auditora", salary: "R$ 7.800", hireDate: "2018-03-25", status: "Ativo", city: "Teresina"
  },
  {
    id: 25, name: "Rodrigo Machado", email: "rodrigo.machado@empresa.com", department: "Vendas", position: "Consultor", salary: "R$ 5.200", hireDate: "2020-10-11", status: "Inativo", city: "Cuiabá"
  },
  {
    id: 26, name: "Natalia Ribeiro", email: "natalia.ribeiro@empresa.com", department: "TI", position: "QA Tester", salary: "R$ 5.500", hireDate: "2021-04-18", status: "Ativo", city: "São Luís"
  },
  {
    id: 27, name: "Felipe Araujo", email: "felipe.araujo@empresa.com", department: "Marketing", position: "Copywriter", salary: "R$ 4.000", hireDate: "2022-07-05", status: "Ativo", city: "Palmas"
  },
  {
    id: 28, name: "Carla Monteiro", email: "carla.monteiro@empresa.com", department: "RH", position: "Psicóloga Organizacional", salary: "R$ 6.200", hireDate: "2019-11-30", status: "Ativo", city: "Boa Vista"
  },
  {
    id: 29, name: "Vinicius Lopes", email: "vinicius.lopes@empresa.com", department: "TI", position: "Desenvolvedor Junior", salary: "R$ 4.200", hireDate: "2022-03-12", status: "Ativo", city: "Macapá"
  },
  {
    id: 30, name: "Amanda Correia", email: "amanda.correia@empresa.com", department: "Operações", position: "Analista de Processos", salary: "R$ 5.800", hireDate: "2020-12-08", status: "Ativo", city: "Rio Branco"
  },
  {
    id: 31, name: "Henrique Batista", email: "henrique.batista@empresa.com", department: "Financeiro", position: "Controller", salary: "R$ 10.500", hireDate: "2017-09-15", status: "Ativo", city: "São Paulo"
  },
  {
    id: 32, name: "Tatiane Vieira", email: "tatiane.vieira@empresa.com", department: "Vendas", position: "Key Account", salary: "R$ 7.800", hireDate: "2019-02-20", status: "Ativo", city: "Rio de Janeiro"
  },
  {
    id: 33, name: "Fabio Santana", email: "fabio.santana@empresa.com", department: "TI", position: "Tech Lead", salary: "R$ 11.200", hireDate: "2018-05-10", status: "Ativo", city: "Belo Horizonte"
  },
  {
    id: 34, name: "Daniela Ferraz", email: "daniela.ferraz@empresa.com", department: "Marketing", position: "Product Manager", salary: "R$ 9.800", hireDate: "2020-08-03", status: "Ativo", city: "Porto Alegre"
  },
  {
    id: 35, name: "Cesar Oliveira", email: "cesar.oliveira@empresa.com", department: "RH", position: "Business Partner", salary: "R$ 7.500", hireDate: "2019-01-28", status: "Ativo", city: "Curitiba"
  },
  {
    id: 36, name: "Bianca Moura", email: "bianca.moura@empresa.com", department: "Operações", position: "Gerente de Operações", salary: "R$ 8.800", hireDate: "2018-07-16", status: "Ativo", city: "Salvador"
  },
  {
    id: 37, name: "Mateus Ramos", email: "mateus.ramos@empresa.com", department: "TI", position: "Data Scientist", salary: "R$ 10.800", hireDate: "2020-11-25", status: "Ativo", city: "Brasília"
  },
  {
    id: 38, name: "Luciana Pinto", email: "luciana.pinto@empresa.com", department: "Financeiro", position: "Analista de Custos", salary: "R$ 5.800", hireDate: "2021-09-14", status: "Inativo", city: "Fortaleza"
  },
  {
    id: 39, name: "Gabriel Santos", email: "gabriel.santos@empresa.com", department: "Vendas", position: "Inside Sales", salary: "R$ 4.200", hireDate: "2022-04-07", status: "Ativo", city: "Recife"
  },
  {
    id: 40, name: "Aline Teixeira", email: "aline.teixeira@empresa.com", department: "Marketing", position: "Growth Hacker", salary: "R$ 6.500", hireDate: "2021-10-19", status: "Ativo", city: "Goiânia"
  },
  {
    id: 41, name: "Ricardo Fonseca", email: "ricardo.fonseca@empresa.com", department: "TI", position: "Cloud Engineer", salary: "R$ 9.500", hireDate: "2020-06-12", status: "Ativo", city: "Manaus"
  },
  {
    id: 42, name: "Simone Cardoso", email: "simone.cardoso@empresa.com", department: "RH", position: "Coordenadora de T&D", salary: "R$ 6.800", hireDate: "2019-03-08", status: "Ativo", city: "Vitória"
  },
  {
    id: 43, name: "Paulo Henrique", email: "paulo.henrique@empresa.com", department: "Operações", position: "Técnico", salary: "R$ 4.500", hireDate: "2021-07-23", status: "Ativo", city: "Florianópolis"
  },
  {
    id: 44, name: "Monica Silva", email: "monica.silva@empresa.com", department: "Financeiro", position: "Tesoureira", salary: "R$ 8.200", hireDate: "2018-12-05", status: "Ativo", city: "João Pessoa"
  },
  {
    id: 45, name: "Edson Rocha", email: "edson.rocha@empresa.com", department: "Vendas", position: "Coordenador Comercial", salary: "R$ 7.200", hireDate: "2019-05-17", status: "Ativo", city: "Natal"
  },
  {
    id: 46, name: "Cristina Almeida", email: "cristina.almeida@empresa.com", department: "TI", position: "UX Designer", salary: "R$ 7.800", hireDate: "2020-04-09", status: "Ativo", city: "Maceió"
  },
  {
    id: 47, name: "Anderson Costa", email: "anderson.costa@empresa.com", department: "Marketing", position: "SEO Specialist", salary: "R$ 5.200", hireDate: "2021-11-21", status: "Ativo", city: "Aracaju"
  },
  {
    id: 48, name: "Eliane Martins", email: "eliane.martins@empresa.com", department: "RH", position: "Analista de Folha", salary: "R$ 4.800", hireDate: "2022-01-30", status: "Ativo", city: "Campo Grande"
  },
  {
    id: 49, name: "Joao Pedro", email: "joao.pedro@empresa.com", department: "Operações", position: "Assistente", salary: "R$ 2.800", hireDate: "2022-08-15", status: "Ativo", city: "Teresina"
  },
  {
    id: 50, name: "Silvia Nascimento", email: "silvia.nascimento@empresa.com", department: "Financeiro", position: "Diretora Financeira", salary: "R$ 15.000", hireDate: "2016-01-10", status: "Ativo", city: "Cuiabá"
  },
  {
    id: 51, name: "Marcelo Barbosa", email: "marcelo.barbosa@empresa.com", department: "TI", position: "CTO", salary: "R$ 18.000", hireDate: "2015-03-22", status: "Ativo", city: "São Paulo"
  },
  {
    id: 52, name: "Claudia Mendes", email: "claudia.mendes@empresa.com", department: "Vendas", position: "Diretora Comercial", salary: "R$ 16.500", hireDate: "2016-08-14", status: "Ativo", city: "Rio de Janeiro"
  },
  {
    id: 53, name: "Bruno Ferreira", email: "bruno.ferreira@empresa.com", department: "Marketing", position: "Gerente de Marketing", salary: "R$ 14.800", hireDate: "2017-02-07", status: "Ativo", city: "Belo Horizonte"
  },
  {
    id: 54, name: "Ricardo Santos", email: "ricardo.santos@empresa.com", department: "RH", position: "Gerente de RH", salary: "R$ 13.500", hireDate: "2017-09-18", status: "Ativo", city: "Porto Alegre"
  },
  {
    id: 55, name: "Isabela Almeida", email: "isabela.almeida@empresa.com", department: "Operações", position: "Gerente de Operações", salary: "R$ 12.800", hireDate: "2018-06-25", status: "Ativo", city: "São Paulo"
  },
  {
    id: 56, name: "Felipe Pereira", email: "felipe.pereira@empresa.com", department: "Financeiro", position: "Gerente de Finanças", salary: "R$ 14.200", hireDate: "2018-12-10", status: "Ativo", city: "Belo Horizonte"
  },
  {
    id: 57, name: "Henrique Santos", email: "henrique.santos@empresa.com", department: "TI", position: "Gerente de TI", salary: "R$ 15.500", hireDate: "2019-03-03", status: "Ativo", city: "Curitiba"
  },
  {
    id: 58, name: "Larissa Cardoso", email: "larissa.cardoso@empresa.com", department: "Vendas", position: "Gerente de Vendas", salary: "R$ 16.200", hireDate: "2019-09-12", status: "Ativo", city: "Porto Alegre"
  },
  {
    id: 59, name: "Rafael Almeida", email: "rafael.almeida@empresa.com", department: "Marketing", position: "Gerente de Marketing", salary: "R$ 15.800", hireDate: "2019-05-08", status: "Ativo", city: "São Paulo"
  },
  {
    id: 60, name: "Larissa Santos", email: "larissa.santos@empresa.com", department: "RH", position: "Gerente de RH", salary: "R$ 14.500", hireDate: "2019-11-28", status: "Ativo", city: "Recife"
  },
  {
    id: 61, name: "Bruno Almeida", email: "bruno.almeida@empresa.com", department: "Vendas", position: "Gerente de Vendas", salary: "R$ 17.000", hireDate: "2020-01-18", status: "Ativo", city: "Rio de Janeiro"
  }

];

const tableColumns = [
  { title: "ID", data: "id" },
  { title: "Nome", data: "name" },
  { title: "Email", data: "email" },
  { title: "Departamento", data: "department" },
  { title: "Cargo", data: "position" },
  { title: "Salário", data: "salary" },
  { title: "Data Admissão", data: "hireDate" },
  { title: "Status", data: "status" },
  { title: "Cidade", data: "city" }
];

// Content with DataTable Grid
const DataTableContent = () => (
  <div style={{ width: "100%" }}>
    <NewDataTable
      id="sample-table"
      data={sampleData}
      columns={tableColumns}
      buttons={[
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
      ]}
      use="dashboard"
      filters={false}
      editColumns={false}
    />
  </div>
);

export const WithDataTableGrid: Story = {
  args: {
    primaryColor: "#002951",
    showLogo: true,
    hideSidebarOnMobile: true,
    menus: mockMenus,
    onMenuItemClick: () => {
      // Menu item clicked
    },
    navbarProps: {
      user: mockUser,
      version: "2.1.0",
      userPhotoSrc: "https://thumbs.dreamstime.com/b/vetor-de-%C3%ADcone-perfil-do-avatar-padr%C3%A3o-foto-usu%C3%A1rio-m%C3%ADdia-social-183042379.jpg?w=768"
    },
    children: <DataTableContent />
  },
  parameters: {
    docs: {
      description: {
        story: "Layout integrado com o componente NewDataTable e menus unificados, demonstrando como utilizar o grid de dados dentro do layout principal da aplicação com navegação consistente."
      }
    }
  }
};
