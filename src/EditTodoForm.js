import React from 'react';
import useInputState from './hooks/useInputState';
import { TextField } from '@mui/material/';

function EditTodoForm({ id, task, editTodo, toggleEditing }) {

    const [value, handleChange] = useInputState(task);

    const submitForm = e => {
        e.preventDefault();
        editTodo(id, value);
        toggleEditing();
    }

    return (
        <form onSubmit={submitForm} style={{ marginLeft: "1rem", width: "85%" }}>
            <TextField
                onChange={handleChange}
                value={value}
                variant="standard"
                margin="normal"
                fullWidth
                autoFocus
            />
        </form>
    )
}

export default EditTodoForm;