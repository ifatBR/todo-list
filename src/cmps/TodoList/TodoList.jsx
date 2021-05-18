import './TodoList.scss';
import { TodoPreview } from '../TodoPreview';
import { Link } from 'react-router-dom';

export function TodoList({ todos, onToggleCheck, onRemoveTodo }) {
    return (
        <div>
            <ul className="clean-list todo-list">
                <li className="list-row-layout headline">
                    <div className="list-row-info-layout">
                        <h3 className="title">Title</h3>
                        <h3 className="importance">Importance</h3>
                        <h3 className="date">Date</h3>
                    </div>
                </li>
                {todos.map((todo) => (
                    <TodoPreview todo={todo} onToggleCheck={onToggleCheck} onRemoveTodo={onRemoveTodo} key={todo._id} />
                ))}
                <li className="list-row-layout"><Link to="/edit"className="btn action">+</Link></li>
            </ul>
        </div>
    );
}
