'use client';

import React, { createContext, useContext, useCallback, useEffect, useSyncExternalStore } from 'react';

export type Language = 'en' | 'ar';
export type Theme = 'light' | 'dark';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRtl: boolean;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  t: (en: string, ar: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const listeners = new Set<() => void>();

function emitChange() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener('storage', listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener('storage', listener);
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
  const language = useSyncExternalStore(subscribe, getLanguageSnapshot, getServerLanguageSnapshot);
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, getServerThemeSnapshot);

  const setLanguage = useCallback((lang: Language) => {
    try {
      localStorage.setItem('mustashar_lang', lang);
    } catch {
      // ignore
    }
    emitChange();
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    try {
      localStorage.setItem('mustasharland-theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    } catch {
      // ignore
    }
    emitChange();
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
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [isRtl, language, theme]);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        isRtl,
        theme,
        setTheme,
        toggleTheme,
        t,
      }}
    >
      <div className={`min-h-screen ${isRtl ? 'font-arabic' : 'font-sans'}`} suppressHydrationWarning>
        {children}
      </div>
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

