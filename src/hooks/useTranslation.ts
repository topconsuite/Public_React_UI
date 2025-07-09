import { TFunction, useTranslation as useI18nTranslation } from "react-i18next";
import { i18n as I18n } from "i18next";

interface UseTranslationReturn {
  t: TFunction;
  i18n: I18n;
}

export const useTranslation = (): UseTranslationReturn => {
  const { t, i18n } = useI18nTranslation();

  return { t, i18n };
};

export default useTranslation;
