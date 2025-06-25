'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  colors: {
    primary: string;
    primaryDark: string;
    primaryLight: string;
    accentRed: string;
    accentOrange: string;
    backgroundWhite: string;
    backgroundGray: string;
    backgroundBeige: string;
    textDark: string;
    textGray: string;
    textLight: string;
  };
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const colors = {
    primary: '#003366',
    primaryDark: '#002040',
    primaryLight: '#336699',
    accentRed: '#CC0000',
    accentOrange: '#FF6600',
    backgroundWhite: '#FFFFFF',
    backgroundGray: '#F5F5F5',
    backgroundBeige: '#FFF5E6',
    textDark: '#333333',
    textGray: '#666666',
    textLight: '#999999',
  };

  return (
    <ThemeContext.Provider value={{ colors, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context;
};
