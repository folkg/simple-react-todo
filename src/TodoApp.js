import React, { useState } from 'react'
import { Paper, Typography, AppBar, Toolbar, Grid, Grid2 } from '@mui/material/';

function TodoApp() {
    return (
        <Paper style={{
            padding: 0, margin: 0, height: "100vh", backgroundColor: "#fafafa"
        }}>
            <AppBar>
                <Toolbar>
                    <Typography>TodoApp</Typography>
                </Toolbar>
            </AppBar>

        </Paper>
    )
}

export default TodoApp
