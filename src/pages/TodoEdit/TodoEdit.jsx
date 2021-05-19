import './TodoEdit.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmptyTodo, getTodoById, saveTodo } from '../../store/actions/todoActions';
import { useFormEdit } from '../../hooks/useFormEdit';
import { useParams, useHistory } from 'react-router-dom';

export function TodoEdit() {
    const history = useHistory();
    const currTodo = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const params = useParams();
    const id = params.id;

    const onGoBack = () => {
        if (id) history.push('/detail/' + currTodo._id);
        else history.push('/');
    };

    useEffect(() => {
        if (!id) dispatch(getEmptyTodo())
        else dispatch(getTodoById(id));
    }, []);

    
    const onSaveTodo = async (ev) => {
        const createdAt = parseInt(Date.now());
        ev.preventDefault();
        const todoToSave = {...todoToEdit, createdAt}
        try {
            await dispatch(saveTodo(todoToSave));
            onGoBack();
        } catch (err) {
            console.log(err);
        }
    };

    const emptyTodo = {
            title: '',
            description: '',
            importance: 1,
            doneAt: '',
            createdAt: ''
    };

    let [todoToEdit, handleChange] = useFormEdit(currTodo || emptyTodo);
    const { title, description, importance } = todoToEdit;

    return (
        currTodo && (
            <section className="todo-edit" colSpan="6">
                <button className="btn warning back" onClick={onGoBack}></button>
                <form className="todo-layout todo-edit-form" onSubmit={onSaveTodo}>
                    <label>Title</label>
                    <input name="title" type="text" onChange={handleChange} value={title} required />
                    <label>Description</label>
                    <textarea name="description" type="text" onChange={handleChange} value={description}  required/>
                    <label>Importance</label>
                    <input name="importance" type="number" onChange={handleChange} value={importance} min={1} max={3} />
                    <button className="btn action" type="submit">
                        Save
                    </button>
                </form>
            </section>
        )
    );
}
