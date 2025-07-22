export enum GlobalMessages {
  save = "global.save",
  register = "global.register",
  close = "global.close",
  cancel = "global.cancel",
  edit = "global.edit",
  delete = "global.delete",
  confirm = "global.confirm",
  yes = "global.yes",
  no = "global.no",
  ok = "global.ok",
  loading = "global.loading",
  search = "global.search",
  filter = "global.filter",
  clear = "global.clear",
  required = "global.required",
  optional = "global.optional",
  success = "global.success",
  error = "global.error",
  warning = "global.warning",
  info = "global.info",
  name = "global.name",
  description = "global.description",
  status = "global.status",
  active = "global.active",
  inactive = "global.inactive",
  created = "global.created",
  updated = "global.updated",
  deleted = "global.deleted"
}

export type TranslationGlobalMessages = {
  [key in GlobalMessages]: string;
}
