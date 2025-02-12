import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = useCallback(async (language: string) => {
    try {
      await i18n.changeLanguage(language);
      localStorage.setItem('preferredLanguage', language);
      document.documentElement.lang = language;
    } catch (error) {
      console.error('Failed to change language:', error);
      throw new Error('Language change failed');
    }
  }, [i18n]);

  return {
    currentLanguage: i18n.language,
    changeLanguage,
    isRTL: i18n.dir() === 'rtl',
  };
};