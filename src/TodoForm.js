import React, { useContext } from 'react';
import { DispatchContext } from './contexts/todos.context';
import useInputState from './hooks/useInputState';
import { Paper, TextField } from '@mui/material/';

function TodoForm() {
    const [value, handleChange, resetField] = useInputState("");
    const dispatch = useContext(DispatchContext);

    const submitForm = e => {
        e.preventDefault();
        dispatch({ type: "ADD", task: value });
        resetField();
    }
    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <form onSubmit={submitForm}>
                <TextField
                    onChange={handleChange}
                    value={value}
                    variant="standard"
                    label="Add New Todo Item"
                    margin="normal"
                    fullWidth
                />
            </form>
        </Paper>
    );
}

export default TodoForm