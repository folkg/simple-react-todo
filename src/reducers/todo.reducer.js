import { v4 as uuidv4 } from 'uuid';

const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: uuidv4(), task: action.task, completed: false }];
        case "DELETE":
            return state.filter(t => t.id !== action.id);
        case "EDIT":
            return state.map(t =>
                t.id === action.id ? { ...t, task: action.task } : t
            );
        case "TOGGLE":
            return state.map(t =>
                t.id === action.id ? { ...t, completed: !t.completed } : t
            );
        default:
            return state;
    }
}

export default todoReducer;