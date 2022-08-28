import React, { useState } from 'react'
import { Paper, Typography, AppBar, Toolbar, Grid, Unstable_Grid2 } from '@mui/material/';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
    const defaultTodos = [
        { id: 1, task: "Water the succulents", completed: false },
        { id: 2, task: "Cut hair", completed: false },
        { id: 3, task: "Hit the gym", completed: true },
    ];
    const [todoItems, setTodoItems] = useState(defaultTodos);

    const addTodo = (newTodoTask) => {
        setTodoItems([...todoItems, { id: 4, task: newTodoTask, completed: false }])
    }

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
            <Unstable_Grid2 container justifyContent='center' style={{ marginTop: "1rem" }}>
                <Unstable_Grid2 item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todoItems={todoItems} />
                </Unstable_Grid2>
            </Unstable_Grid2>
        </Paper>
    )
}

export default TodoApp
