'use client';

import React, { createContext, useContext, useCallback, useEffect, useMemo, useSyncExternalStore } from 'react';

export type Language = 'en' | 'ar';
export type Theme = 'light' | 'dark';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRtl: boolean;
  t: (en: string, ar: string) => string;
}

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export type AppContextType = LanguageContextType & ThemeContextType;

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const langListeners = new Set<() => void>();
const themeListeners = new Set<() => void>();

function emitLangChange() {
  langListeners.forEach((listener) => listener());
}

function emitThemeChange() {
  themeListeners.forEach((listener) => listener());
}

function subscribeLang(listener: () => void) {
  langListeners.add(listener);
  const handleStorage = (e: StorageEvent) => {
    if (e.key === 'mustashar_lang') listener();
  };
  window.addEventListener('storage', handleStorage);
  return () => {
    langListeners.delete(listener);
    window.removeEventListener('storage', handleStorage);
  };
}

function subscribeTheme(listener: () => void) {
  themeListeners.add(listener);
  const handleStorage = (e: StorageEvent) => {
    if (e.key === 'mustasharland-theme') listener();
  };
  window.addEventListener('storage', handleStorage);
  return () => {
    themeListeners.delete(listener);
    window.removeEventListener('storage', handleStorage);
  };
}

function getLanguageSnapshot(): Language {
  try {
    const saved = localStorage.getItem('mustashar_lang');
    if (saved === 'en' || saved === 'ar') {
      return saved;
    }
  } catch {
    // ignore
  }
  return 'en';
}

function getServerLanguageSnapshot(): Language {
  return 'en';
}

function getThemeSnapshot(): Theme {
  try {
    const saved = localStorage.getItem('mustasharland-theme');
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  } catch {
    // ignore
  }
  return 'light';
}

function getServerThemeSnapshot(): Theme {
  return 'light';
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribeLang, getLanguageSnapshot, getServerLanguageSnapshot);
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerThemeSnapshot);

  const setLanguage = useCallback((lang: Language) => {
    try {
      localStorage.setItem('mustashar_lang', lang);
    } catch {
      // ignore
    }
    emitLangChange();
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    try {
      localStorage.setItem('mustasharland-theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    } catch {
      // ignore
    }
    emitThemeChange();
  }, []);

  const toggleTheme = useCallback(() => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  }, [theme, setTheme]);

  const isRtl = language === 'ar';

  const t = useCallback(
    (en: string, ar: string) => {
      return language === 'ar' ? ar : en;
    },
    [language]
  );

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', language);
    }
  }, [isRtl, language]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  const langValue = useMemo(
    () => ({
      language,
      setLanguage,
      isRtl,
      t,
    }),
    [language, setLanguage, isRtl, t]
  );

  const themeValue = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme, setTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={themeValue}>
      <LanguageContext.Provider value={langValue}>
        <div className={`min-h-screen ${isRtl ? 'font-arabic' : 'font-sans'}`} suppressHydrationWarning>
          {children}
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within an AppProvider');
  }
  return context;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within an AppProvider');
  }
  return context;
}

export function useApp(): AppContextType {
  const lang = useContext(LanguageContext);
  const thm = useContext(ThemeContext);
  if (!lang || !thm) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return {
    ...lang,
    ...thm,
  };
}

