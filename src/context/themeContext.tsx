import { ReactNode, createContext, useState} from 'react';

export const INITIAL_STATE = {}

export const ThemeContext = createContext({});

interface Iprops {
    children: ReactNode;
}


export const ThemeProvider = ({children}: Iprops) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme( theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}