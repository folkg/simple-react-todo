import React from 'react'
import { Paper, List, ListItem, ListItemText, Divider } from '@mui/material/';

function TodoList(props) {
    return (
        <Paper>
            <List>
                {props.todoItems.map(t => (
                    <>
                        <ListItem key={t.id}>
                            <ListItemText>{t.task}</ListItemText>
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    )
}

export default TodoList