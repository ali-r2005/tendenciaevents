import { en, type Dictionary } from "./en";

export const defaultLocale = "en" as const;

export const dictionaries: Record<string, Dictionary> = {
  en,
};

export function getDictionary(locale: string = defaultLocale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export type { Dictionary };
