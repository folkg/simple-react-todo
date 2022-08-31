import React, { useState, createContext } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const DarkModeContext = createContext();

export function DarkModeProvider(props) {
    const [colourMode, setColourMode] = useState('light');

    const toggleColourMode = () => {
        setColourMode(colourMode === 'light' ? 'dark' : 'light')
    };
    const theme = createTheme({
        palette: {
            mode: colourMode,
        },
    });

    return (
        <DarkModeContext.Provider value={{ colourMode, toggleColourMode }}>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </DarkModeContext.Provider>
    );
}