import { ReactNode, createContext, useState } from 'react';

// export const INITIAL_STATE = {};


interface Iprops {
  children: ReactNode;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

const initialValue = {
  theme: '',
  toggleTheme: () => {},
};


export const ThemeContext = createContext(initialValue);




export const ThemeProvider = ({ children }: Iprops) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};