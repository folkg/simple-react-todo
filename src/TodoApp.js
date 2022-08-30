import React from 'react'
import { TodosProvider } from './contexts/todos.context';
import { Paper, Typography, AppBar, Toolbar, Unstable_Grid2 } from '@mui/material/';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
    //TODO: Change theme dark/light, colours
    //https://mui.com/material-ui/customization/dark-mode/

    //TODO: Make this a PWA. Could be good for the budgeting app as well. Any value for the portoflio balancer? Likely not.
    //https://create-react-app.dev/docs/making-a-progressive-web-app/

    //TODO: Move completed todos to the bottom, different collapsable TodoList?
    // const incompleteTodos = todoItems.filter(t => t.completed);
    // const completedTodos = todoItems.filter(t => t.completed);

    return (
        <Paper style={{
            padding: 0, margin: 0, height: "100vh", backgroundColor: "#fafafa"
        }}
            elevation={0}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography>Todo</Typography>
                </Toolbar>
            </AppBar>
            <Unstable_Grid2 container justifyContent='center' style={{ marginTop: "1rem" }}>
                <Unstable_Grid2 item xs={11} md={8} lg={4}>
                    <TodosProvider>
                        <TodoForm />
                        <TodoList />
                    </TodosProvider>
                </Unstable_Grid2>
            </Unstable_Grid2>
        </Paper>
    )
}

export default TodoApp
