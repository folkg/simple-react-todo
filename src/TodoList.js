import React from 'react'
import { Paper, List, Divider } from '@mui/material/';
import TodoItem from './TodoItem';

function TodoList(props) {
    return (
        <Paper>
            <List>
                {props.todoItems.map(t => (
                    <>
                        <TodoItem todo={t} />
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    )
}

export default TodoList