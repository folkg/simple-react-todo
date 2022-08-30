import React, { useContext, memo } from 'react';
import { DispatchContext } from './contexts/todos.context';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction } from '@mui/material/';
import { Delete, Edit } from '@mui/icons-material';

function TodoItem(props) {
    const { id, task, completed } = props.todo;
    const dispatch = useContext(DispatchContext);

    const [isEditing, toggleEditing] = useToggleState(false);

    return (
        <ListItem style={{ height: "64px" }}>
            {isEditing ? (
                <EditTodoForm id={id} task={task} toggleEditing={toggleEditing} />
            ) : (
                <>
                    <Checkbox checked={completed} color='secondary' onClick={() => dispatch({ type: "TOGGLE", id: id })} />
                    <ListItemText style={{ textDecoration: completed && 'line-through' }}>{task} </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Edit" onClick={toggleEditing}>
                            <Edit />
                        </IconButton>
                        <IconButton aria-label="Delete" onClick={() => dispatch({ type: "DELETE", id: id })}>
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )}
        </ListItem>
    );
}

export default memo(TodoItem);