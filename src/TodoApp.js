import React, { useEffect } from 'react'
import useTodoState from './hooks/useTodoState';
import { v4 as uuidv4 } from 'uuid';
import { Paper, Typography, AppBar, Toolbar, Grid, Unstable_Grid2 } from '@mui/material/';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
    const sampleTodos = [
        { id: uuidv4(), task: "Water the succulents", completed: false },
        { id: uuidv4(), task: "Cut hair", completed: false },
        { id: uuidv4(), task: "Hit the gym", completed: true },
    ];
    const initialTodos = JSON.parse(window.localStorage.getItem("todoItems")) || sampleTodos;
    const { todoItems, addTodo, toggleTodo, editTodo, deleteTodo } = useTodoState(initialTodos);

    //useEffect for 'todoItems'
    useEffect(() => {
        window.localStorage.setItem("todoItems", JSON.stringify(todoItems));
    }, [todoItems]);

    //TODO: Change theme dark/light, colours
    //TODO:

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
                    <TodoList
                        todoItems={todoItems}
                        editTodo={editTodo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                </Unstable_Grid2>
            </Unstable_Grid2>
        </Paper>
    )
}

export default TodoApp
