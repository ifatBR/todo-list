import { todoService } from '../../services/todoService';

// Thunk - Action Dispatcher
export function loadTodos(filterBy) {
    return async (dispatch) => {
        const todos = await todoService.query(filterBy);
        dispatch({ type: 'SET_TODOS', todos });
    };
}

export function getTodoById(todoId) {
    return async (dispatch) => {
        const todo = await todoService.getById(todoId);
        dispatch({ type: 'SET_TODO', todo });
    };
}
export function saveTodo(todo) {
    return async (dispatch) => {
        const isAdd = !todo._id;
        const updatedTodo = await todoService.save(todo);

        if (isAdd) dispatch({ type: 'ADD_TODO', todo: updatedTodo });
        else dispatch({ type: 'UPDATE_TODO', updatedTodo });
    };
}

export function removeTodo(todoId) {
    return async (dispatch) => {
            await todoService.remove(todoId);
            dispatch({ type: 'REMOVE_TODO', todoId });
    };
}

export function toggleCheck(todo) {
    let doneAt = null
    if(!todo.doneAt) doneAt = Date.now();
    todo = {...todo, doneAt}
    return async (dispatch) => {
        const updatedTodo = await todoService.save(todo);
        dispatch({ type: 'UPDATE_TODO', updatedTodo });
    };
}


export function getEmptyTodo() {
    return async (dispatch) => {
        const todo = await todoService.getEmptyTodo();
        dispatch({ type: 'SET_TODO', todo});
    };
}
