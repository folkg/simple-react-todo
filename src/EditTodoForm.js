import React, { useContext } from 'react';
import { DispatchContext } from './contexts/todos.context';
import useInputState from './hooks/useInputState';
import { TextField } from '@mui/material/';

function EditTodoForm({ id, task, toggleEditing }) {

    //TODO: Add cancel button that will abort without changing any state. Just toggle editing.

    const [value, handleChange] = useInputState(task);
    const dispatch = useContext(DispatchContext);

    const submitForm = e => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, task: value });
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