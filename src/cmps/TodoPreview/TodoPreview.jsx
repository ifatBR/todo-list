import './TodoPreview.scss';
import { Link } from 'react-router-dom';
import { utilService } from '../../services/utilService';
export function TodoPreview({ todo, onToggleCheck, onRemoveTodo }) {
    return (
        <li className="list-row-layout todo-preview">
            <button className={todo.doneAt? 'status done' : 'status undone'} onClick={() => onToggleCheck(todo)}></button>
            <Link to={'/detail/' + todo._id} className="list-row-info-layout preview-info">
                <p className={todo.doneAt? 'strike' : ''}>{todo.title}</p>
                <p>{todo.importance}</p>
                <p>{utilService.formattedDate(todo.createdAt)}</p>
            </Link>
            <button className="btn warning" onClick={() => onRemoveTodo(todo._id)}>
                X
            </button>
        </li>
    );
}
