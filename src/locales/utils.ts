export const getTranslation = (obj: any, key: string, defaultValue = ''): string => {
  const keys = key.split('.');
  let current = obj;
  
  for (const k of keys) {
    if (current && typeof current === 'object' && k in current) {
      current = current[k];
    } else {
      return defaultValue;
    }
  }
  
  return typeof current === 'string' ? current : defaultValue;
};
