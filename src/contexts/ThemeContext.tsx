'use client';

import React, { createContext, useState, useEffect, Dispatch, SetStateAction } from 'react';

type ThemeOption = 'light' | 'dark';
type ThemeState = 'light' | 'dark' | 'system';

interface ThemeContextProps {
  theme: ThemeOption;
  themeState: ThemeState;
  setThemeState: Dispatch<SetStateAction<ThemeState>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: window.localStorage.getItem('theme') as ThemeOption || window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  themeState: window.localStorage.getItem('theme') as ThemeOption || 'system',
  setThemeState: (value) => { }
});

// Important setThemeState is used as setTheme just renaming 
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeOption>(() => {
    return window.localStorage.getItem('theme') as ThemeOption || window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  });

  const [themeState, setThemeState] = useState<ThemeState>(() => {
    return window.localStorage.getItem('theme') as ThemeOption || 'system'
  });

  useEffect(() => {
    if (themeState != 'system') {
      window.localStorage.setItem('theme', themeState);
      document.body.setAttribute('class', themeState);

      setTheme(themeState)
    } else {
      window.localStorage.removeItem('theme');
      document.body.removeAttribute('class');

      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    }
  }, [themeState]);






  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      const getThemeState = (window.localStorage.getItem('theme') || 'system') as ThemeState;
      if (getThemeState === 'system') {
        setTheme(mediaQuery.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [themeState]);

  return (
    <ThemeContext.Provider value={{ theme, themeState, setThemeState }}>
      {children}
    </ThemeContext.Provider>
  );
};
