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
        <Paper>
            <form onSubmit={submitForm}>
                <TextField onChange={handleChange} value={value} />
            </form>
        </Paper>
    );
}

export default TodoForm