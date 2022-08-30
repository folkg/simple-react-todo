import React, { createContext } from 'react'
import todoReducer from '../reducers/todo.reducer';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer.js';

export const TodosContext = createContext();
export const DispatchContext = createContext();

const sampleTodos = [
    { id: 1, task: "Water the succulents", completed: false },
    { id: 2, task: "Cut hair", completed: false },
    { id: 3, task: "Hit the gym", completed: true },
];

export function TodosProvider(props) {
    const [todoItems, dispatch] = useLocalStorageReducer("todoItems", sampleTodos, todoReducer);
    return (
        <TodosContext.Provider value={todoItems}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}