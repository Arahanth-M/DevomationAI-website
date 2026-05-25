// import React, { createContext, useContext, useState, useEffect } from 'react';

// const ThemeContext = createContext();
// const THEME_KEY = 'devomation-theme';

// export function ThemeProvider({ children }) {
//   const [theme, setThemeState] = useState(() => {
//     try {
//       const stored = localStorage.getItem(THEME_KEY);
//       if (stored === 'light' || stored === 'dark') return stored;
//     } catch {
//       // localStorage unavailable
//     }
//     return 'light'; // Defaulting to light theme as the base design is light
//   });

//   useEffect(() => {
//     const root = document.documentElement;
//     root.setAttribute('data-theme', theme);
//     try {
//       localStorage.setItem(THEME_KEY, theme);
//     } catch {
//       // localStorage unavailable
//     }
//   }, [theme]);

//   const toggleTheme = () => {
//     setThemeState((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme: setThemeState, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export function useTheme() {
//   const context = useContext(ThemeContext);
//   if (context === undefined) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// }
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('devo-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('devo-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
