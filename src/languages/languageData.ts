import { TranslationDataTableMessages } from "./interfaces/dataTableMessages";
import { TranslationKanbanMessages } from "./interfaces/kanbanMessages";

export interface TranslationData {
  dataTable: TranslationDataTableMessages;
  kanban: TranslationKanbanMessages;
}

export const getLanguageData = (
  dataTableMessages: TranslationDataTableMessages,
  kanbanMessages: TranslationKanbanMessages
): TranslationData => ({
  dataTable: dataTableMessages,
  kanban: kanbanMessages
});
