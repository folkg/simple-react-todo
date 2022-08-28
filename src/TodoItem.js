import React from 'react';
import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction } from '@mui/material/';
import { Delete, Edit } from '@mui/icons-material';

function TodoItem(props) {
    const { id, task, completed } = props.todo;
    return (
        <ListItem key={id}>
            <Checkbox checked={completed} color='secondary' />
            <ListItemText style={{ textDecoration: completed && 'line-through' }}>{task} </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Edit">
                    <Edit />
                </IconButton>
                <IconButton aria-label="Delete">
                    <Delete />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default TodoItem