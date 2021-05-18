const INITIAL_STATE = {
    todos: [],
    todo:null
};

export function todoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_TODOS':
            return {
                ...state,
                todos: action.todos,
            };
        case 'SET_TODO':
            return {
                ...state,
                todo: action.todo,
            };
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.todo],
            };
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo._id !== action.todoId),
            };
        case 'UPDATE_TODO':
            const { updatedTodo } = action;
            return {
                ...state,
                todos: state.todos.map((todo) => (todo._id === updatedTodo._id ? updatedTodo : todo)),
            };
        default:
            return state;
    }
}
