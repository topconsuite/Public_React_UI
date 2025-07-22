# Sistema de Tradução - Public React UI

Este documento descreve como usar o sistema de tradução implementado na biblioteca Public React UI, baseado na estrutura da aplicação DISPATCH.

## Estrutura do Sistema

### Arquivos de Interface
- `interfaces/dataTableMessages.ts` - Define as chaves de tradução para componentes DataTable

### Arquivos de Tradução por Idioma
- `pt-BR/` - Traduções em Português Brasileiro
- `en-US/` - Traduções em Inglês Americano
- `es-ES/` - Traduções em Espanhol

### Configuração
- `i18n.ts` - Configuração principal do i18next
- `languageData.ts` - Interface e função para agregação de dados de tradução

## Como Usar

### 1. Importar o Hook de Tradução

```typescript
import { useTranslation, DataTableMessages } from '@your-org/public-react-ui';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t(DataTableMessages.status)}</h1>
      <button>{t(DataTableMessages.buttonsAddNew)}</button>
    </div>
  );
};
```

### 2. Usar no Componente NewDataTable

O componente `NewDataTable` já está configurado para usar o sistema de tradução automaticamente. As mensagens da tabela serão traduzidas conforme o idioma selecionado.

### 3. Trocar Idioma

O sistema detecta automaticamente o idioma do navegador e salva a preferência no localStorage. Para trocar o idioma programaticamente:

```typescript
import { useTranslation } from '@your-org/public-react-ui';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <div>
      <button onClick={() => changeLanguage('pt-BR')}>Português</button>
      <button onClick={() => changeLanguage('en-US')}>English</button>
      <button onClick={() => changeLanguage('es-ES')}>Español</button>
    </div>
  );
};
```

## Idiomas Suportados

- **pt-BR**: Português Brasileiro (padrão)
- **en-US**: Inglês Americano
- **es-ES**: Espanhol

## Chaves de Tradução Disponíveis

### DataTable
- `dataTable.status` - Status
- `dataTable.actions` - Ações
- `dataTable.emptyTable` - Mensagem de tabela vazia
- `dataTable.info` - Informações de paginação
- `dataTable.searchPlaceholder` - Placeholder do campo de busca
- E muitas outras...

### Botões
- `buttons.addNew` - Adicionar Novo
- `buttons.export` - Exportar
- `buttons.print` - Imprimir
- `buttons.reload` - Atualizar

### Filtros
- `dataTable.filterTitle` - Título dos filtros
- `dataTable.filterAdd` - Adicionar filtro
- `dataTable.filterApply` - Aplicar filtro
- E operadores de filtro...

## Extensão do Sistema

Para adicionar novas traduções:

1. Crie uma nova interface em `interfaces/`
2. Adicione as traduções em cada pasta de idioma
3. Atualize o `languageData.ts` para incluir a nova interface
4. Exporte as novas interfaces no `index.tsx` principal

## Dependências

- `i18next`: ^25.3.1
- `react-i18next`: ^15.6.0
- `i18next-browser-languagedetector`: ^8.2.0