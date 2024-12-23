'use client';

import React, { createContext, useState, useEffect, Dispatch, SetStateAction } from 'react';

export type ThemeOption = 'light' | 'dark';
export type ThemeState = 'light' | 'dark' | 'system';

interface ThemeContextProps {
  theme: ThemeOption;
  themeState: ThemeState;
  setThemeState: Dispatch<SetStateAction<ThemeState>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'dark',
  themeState: 'system',
  // theme: localStorage.getItem('theme') as ThemeOption || window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  // themeState: localStorage.getItem('theme') as ThemeOption || 'system',
  setThemeState: (value) => { }
});

// Important setThemeState is used as setTheme just renaming 
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeOption>(() => {
    return localStorage.getItem('theme') as ThemeOption || window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  });

  const [themeState, setThemeState] = useState<ThemeState>(() => {
    return localStorage.getItem('theme') as ThemeOption || 'system'
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    if (themeState != 'system') {
      window.localStorage.setItem('theme', themeState);
      document.body.setAttribute('class', themeState);

      setTheme(themeState)
    } else {
      window.localStorage.removeItem('theme');
      document.body.removeAttribute('class');

      setTheme(mediaQuery.matches ? 'dark' : 'light')
    }

    const handleChange = () => {
      if (themeState === 'system') {
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
