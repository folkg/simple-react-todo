import React, { useContext } from 'react'
import { DarkModeContext } from './contexts/theme.context';
import { Typography, AppBar, Toolbar, IconButton } from '@mui/material/';
import { Brightness4, Brightness7 } from '@mui/icons-material';

function NavBar() {
    const { colourMode, toggleColourMode } = useContext(DarkModeContext);
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography>Todo</Typography>
                <IconButton onClick={toggleColourMode}>
                    {colourMode === 'light' ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar