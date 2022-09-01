import React from 'react'
import { TodosProvider } from './contexts/todos.context';
import { DarkModeProvider } from './contexts/theme.context';
import NavBar from './NavBar';
import { Paper, Unstable_Grid2 } from '@mui/material/';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {

    //TODO: Move completed todos to the bottom, different collapsable TodoList?
    // const incompleteTodos = todoItems.filter(t => t.completed);
    // const completedTodos = todoItems.filter(t => t.completed);

    //TODO: Make this a PWA. Could be good for the budgeting app as well. Any value for the portoflio balancer? Likely not.
    //https://create-react-app.dev/docs/making-a-progressive-web-app/

    return (
        <DarkModeProvider>
            <Paper style={{
                padding: 0, margin: 0, height: "100vh"
            }}
                elevation={0}>
                <NavBar />
                <Unstable_Grid2 container justifyContent='center' style={{ marginTop: "1rem" }}>
                    <Unstable_Grid2 item xs={11} md={8} lg={4}>
                        <TodosProvider>
                            <TodoForm />
                            <TodoList />
                        </TodosProvider>
                    </Unstable_Grid2>
                </Unstable_Grid2>
            </Paper>
        </DarkModeProvider>
    )
}

export default TodoApp
