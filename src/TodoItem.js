import React from 'react';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction } from '@mui/material/';
import { Delete, Edit } from '@mui/icons-material';

function TodoItem(props) {
    const { id, task, completed } = props.todo;
    const { toggleTodo, editTodo, deleteTodo } = props;

    const [isEditing, toggleEditing] = useToggleState(false);

    return (
        <ListItem key={id} style={{ height: "64px" }}>
            {isEditing ? (
                <EditTodoForm id={id} task={task} editTodo={editTodo} toggleEditing={toggleEditing} />
            ) : (
                <>
                    <Checkbox checked={completed} color='secondary' onClick={() => toggleTodo(id)} />
                    <ListItemText style={{ textDecoration: completed && 'line-through' }}>{task} </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Edit" onClick={toggleEditing}>
                            <Edit />
                        </IconButton>
                        <IconButton aria-label="Delete" onClick={() => deleteTodo(id)}>
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )}
        </ListItem>
    );
}

export default TodoItem