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
  setThemeState: () => {}
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeOption>('dark');
  const [themeState, setThemeState] = useState<ThemeState>('system');

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme') as ThemeOption;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const initialTheme = storedTheme || (mediaQuery.matches ? 'dark' : 'light');
    const initialThemeState = storedTheme || 'system';

    setTheme(initialTheme);
    setThemeState(initialThemeState);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    if (themeState !== 'system') {
      window.localStorage.setItem('theme', themeState);
      document.body.setAttribute('class', themeState);
      setTheme(themeState);
    } else {
      window.localStorage.removeItem('theme');
      document.body.removeAttribute('class');
      setTheme(mediaQuery.matches ? 'dark' : 'light');
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