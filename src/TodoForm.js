import React from 'react';
import useInputState from './hooks/useInputState';
import { Paper, TextField } from '@mui/material/';

function TodoForm({ addTodo }) {
    const [value, handleChange, resetField] = useInputState("");

    const submitForm = e => {
        e.preventDefault();
        addTodo(value);
        resetField();
    }
    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <form onSubmit={submitForm}>
                <TextField
                    onChange={handleChange}
                    value={value}
                    label="Add New Todo Item"
                    margin="normal"
                    fullWidth="True"
                />
            </form>
        </Paper>
    );
}

export default TodoForm