import React, { useContext } from 'react';
import { TodosContext } from './contexts/todos.context';
import { Paper, List, Divider } from '@mui/material/';
import TodoItem from './TodoItem';

function TodoList(props) {
    const todoItems = useContext(TodosContext);

    if (todoItems.length > 0) {
        return (
            <Paper>
                <List>
                    {todoItems.map((t, idx) => (
                        <React.Fragment key={t.id}>
                            <TodoItem
                                todo={t}
                            />
                            {(idx < todoItems.length - 1) && <Divider />}
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        )
    } else {
        return null;
    }
}

export default TodoList