import React from 'react'
import { Paper, List, Divider } from '@mui/material/';
import TodoItem from './TodoItem';

function TodoList(props) {
    return (
        <Paper>
            <List>
                {props.todoItems.map(t => (
                    <>
                        <TodoItem
                            todo={t}
                            toggleTodo={props.toggleTodo}
                            editTodo={props.editTodo}
                            deleteTodo={props.deleteTodo}
                        />
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    )
}

export default TodoList