import { getLanguageData } from "../languageData";
import { messages as dataTableMessages } from "./dataTableMessages";
import { messages as kanbanMessages } from "./kanbanMessages";
import { messages as globalMessages } from "./globalMessages";

export default getLanguageData(dataTableMessages, kanbanMessages, globalMessages);
