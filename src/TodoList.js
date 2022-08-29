import React from 'react'
import { Paper, List, Divider } from '@mui/material/';
import TodoItem from './TodoItem';

function TodoList(props) {
    if (props.todoItems.length > 0) {
        return (
            <Paper>
                <List>
                    {props.todoItems.map((t, idx) => (
                        <>
                            <TodoItem
                                key={t.id}
                                todo={t}
                                toggleTodo={props.toggleTodo}
                                editTodo={props.editTodo}
                                deleteTodo={props.deleteTodo}
                            />
                            {(idx < props.todoItems.length - 1) && <Divider />}
                        </>
                    ))}
                </List>
            </Paper>
        )
    } else {
        return null;
    }
}

export default TodoList