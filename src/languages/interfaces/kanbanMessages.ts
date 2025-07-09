export enum KanbanMessages {
  state = "kanban.state",
  city = "kanban.city",
  address = "kanban.address"
}

export type TranslationKanbanMessages = {
  [key in KanbanMessages]: string;
}
