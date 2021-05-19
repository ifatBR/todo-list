import './TodoDetail.scss';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodoById, getEmptyTodo, removeTodo } from '../../store/actions/todoActions';
import { useParams } from 'react-router-dom';
import { utilService } from '../../services/utilService';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export function TodoDetail() {
    const currTodo = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    const id = params.id;

    useEffect(() => {
        if (!id) {
            dispatch(getEmptyTodo());
        } else dispatch(getTodoById(id));
    }, [params]);

    const onGoBack = () => {
        history.push('/');
    };

    const onRemoveTodo = useCallback((todoId) => {
        dispatch(removeTodo(todoId));
        onGoBack();
    });

    return (
        currTodo && (
            <section className="flex column align-center todo-detail">
                <button className="btn warning back" onClick={onGoBack}></button>
                <div className="todo-layout">
                    <h2>{currTodo.title}</h2>
                    <h3>Description:</h3>
                    <p>{currTodo.description}</p>
                    <h3>Created at:</h3>
                    <p>{utilService.formattedDate(currTodo.createdAt)}</p>
                    <h3>Importance:</h3>
                    <p>{currTodo.importance}</p>
                    <h3>Status:</h3>
                    <p>{currTodo.doneAt ? 'Done' : 'Undone'}</p>
                    <div className="flex space-between">
                        <Link to={'/edit/' + currTodo._id} className="btn action edit">
                            Edit
                        </Link>
                        <button className="btn warning" onClick={() => onRemoveTodo(currTodo._id)}>
                            Delete
                        </button>
                    </div>
                </div>
            </section>
        )
    );
}
