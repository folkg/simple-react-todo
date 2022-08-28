import React, { useState } from 'react'
import { Paper, Typography, AppBar, Toolbar, Grid, Grid2 } from '@mui/material/';
import TodoList from './TodoList';

function TodoApp() {
    const defaultTodos = [
        { id: 1, task: "Water the succulents", completed: false },
        { id: 2, task: "Cut hair", completed: false },
        { id: 3, task: "Hit the gym", completed: false },
    ];
    const [todoItems, setTodoItems] = useState(defaultTodos);
    return (
        <Paper style={{
            padding: 0, margin: 0, height: "100vh", backgroundColor: "#fafafa"
        }}
            elevation={0}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography>TodoApp</Typography>
                </Toolbar>
            </AppBar>
            <TodoList todoItems={todoItems} />
        </Paper>
    )
}

export default TodoApp
