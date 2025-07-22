import { TranslationDataTableMessages } from "./interfaces/dataTableMessages";
import { TranslationKanbanMessages } from "./interfaces/kanbanMessages";
import { TranslationGlobalMessages } from "./interfaces/globalMessages";

export interface TranslationData {
  dataTable: TranslationDataTableMessages;
  kanban: TranslationKanbanMessages;
  global: TranslationGlobalMessages;
}

export const getLanguageData = (
  dataTableMessages: TranslationDataTableMessages,
  kanbanMessages: TranslationKanbanMessages,
  globalMessages: TranslationGlobalMessages
): TranslationData => ({
  dataTable: dataTableMessages,
  kanban: kanbanMessages,
  global: globalMessages
});
