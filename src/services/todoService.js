import { httpService } from './httpService';

export const todoService = {
    save,
    query,
    remove,
    getById,
    getEmptyTodo,
};

const TODO_URL = 'todo';

async function query(filterBy) {
    console.log('filterBy service:', filterBy)
    const date = filterBy?.date ? new Date(filterBy.date + ' 00:00:00').getTime() : '';
    try {
        // if(filterBy.useDate)
        console.log('date:', date);
        var queryStr = !filterBy ? '' : `?date=${date}&text=${filterBy.text}`;
        const todos = httpService.get(TODO_URL + queryStr);
        return todos;
    } catch (err) {
        return err;
    }
}

async function getById(todoId) {
    try {
        const todo = await httpService.get(`${TODO_URL}/${todoId}`);
        return todo;
    } catch (err) {
        return err;
    }
}

async function remove(todoId) {
    try {
        return httpService.delete(`${TODO_URL}/${todoId}`);
    } catch (err) {
        return err;
    }
}

async function save(todo) {
    try {
        if (todo._id) {
            const updatedTodo = await httpService.put(`${TODO_URL}/${todo._id}`, todo);
            return updatedTodo;
        }
        const addedTodo = await httpService.post(TODO_URL, todo);
        return addedTodo;
    } catch (err) {
        return err;
    }
}

async function getEmptyTodo() {
    return {
        title: '',
        description: '',
        importance: 1,
        doneAt: null,
        createdAt: null,
    };
}
