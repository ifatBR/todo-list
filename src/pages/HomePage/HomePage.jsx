import './HomePage.scss';
import { TodoList } from '../../cmps/TodoList';
import { TodoFilter } from '../../cmps/TodoFilter';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos, toggleCheck, removeTodo } from '../../store/actions/todoActions';

export function HomePage() {
    const [filterBy, setFilterBy] = useState(null);

    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos(filterBy));
    }, [filterBy]);

    const onChangeFilter = useCallback((filterBy) => {
        setFilterBy(filterBy);
    }, []);

    const onToggleCheck = useCallback((todo) => {
        dispatch(toggleCheck(todo));
    });

    const onRemoveTodo = useCallback((todoId) => {
        dispatch(removeTodo(todoId));
    });

    return (
        <div className="home-page">
            <h1>My todos</h1>
            <TodoFilter  onChangeFilter={onChangeFilter} />
            {todos && <TodoList todos={todos} onToggleCheck={onToggleCheck} onRemoveTodo={onRemoveTodo}/>}
        </div>
    );
}
