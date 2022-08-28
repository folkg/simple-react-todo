import React from 'react';
import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction } from '@mui/material/';
import { Delete, Edit } from '@mui/icons-material';

function TodoItem(props) {
    const { id, task, completed } = props.todo;
    const { toggleTodo, editTodo, deleteTodo } = props;

    return (
        <ListItem key={id}>
            <Checkbox checked={completed} color='secondary' onClick={() => toggleTodo(id)} />
            <ListItemText style={{ textDecoration: completed && 'line-through' }}>{task} </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Edit">
                    <Edit />
                </IconButton>
                <IconButton aria-label="Delete" onClick={() => deleteTodo(id)}>
                    <Delete />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default TodoItem