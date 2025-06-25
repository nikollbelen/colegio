export type TranslationObject = {
  [key: string]: string | TranslationObject;
};

export interface TranslationKey {
  key: string;
  defaultValue: string;
}
