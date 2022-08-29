import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function useTodoState(initialTodos) {

    const [todoItems, setTodoItems] = useState(initialTodos);

    const addTodo = (newTodoTask) => {
        setTodoItems([...todoItems, { id: uuidv4(), task: newTodoTask, completed: false }])
    }
    const toggleTodo = (todoID) => {
        setTodoItems(todoItems.map(t =>
            t.id === todoID ? { ...t, completed: !t.completed } : t
        ));
    }
    const editTodo = (todoID, newTask) => {
        setTodoItems(todoItems.map(t =>
            t.id === todoID ? { ...t, task: newTask } : t
        ));
    }
    const deleteTodo = (todoID) => {
        setTodoItems(todoItems.filter(t => t.id !== todoID));
    }

    return { todoItems, addTodo, toggleTodo, editTodo, deleteTodo };
}

export default useTodoState

