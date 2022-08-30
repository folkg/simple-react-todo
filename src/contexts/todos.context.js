import React, { createContext, useReducer } from 'react'
import todoReducer from '../reducers/todo.reducer';
import useTodoState from '../hooks/useTodoState';

export const TodosContext = createContext();
export const DispatchContext = createContext();

const sampleTodos = [
    { id: 1, task: "Water the succulents", completed: false },
    { id: 2, task: "Cut hair", completed: false },
    { id: 3, task: "Hit the gym", completed: true },
];

export function TodosProvider(props) {
    const [todoItems, dispatch] = useReducer(todoReducer, sampleTodos);
    return (
        <TodosContext.Provider value={{ todoItems }}>
            <DispatchContext.Provider value={{ dispatch }}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}