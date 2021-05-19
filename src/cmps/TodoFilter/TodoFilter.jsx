import { useState } from 'react';
import './TodoFilter.scss';
import { useForm } from '../../hooks/useForm';
export function TodoFilter(props) {

    const resetDateFilter = (ev) => {
        ev.stopPropagation()        
        const newFilter = {...filterBy,date:''}
        console.log('ev:', ev)
        props.onChangeFilter(newFilter)
    };

    const [filterBy, handleChange] = useForm({ date: '', text: '' }, props.onChangeFilter);
    const { date, text } = filterBy;

    return (
        <form className="todo-filter" onSubmit={(ev) => ev.preventDefault()}>
            <label htmlFor="date">Filter by date:</label>
            <input
                type="date"
                name="date"
                id="date"
                value={date}
                onChange={handleChange}
                min="2021-01-01"
                max="2050-12-31"
            />
            <button type="button" className="btn warning" onClick={(ev) => resetDateFilter(ev)}>Reset</button>
            <label htmlFor="text">Search:</label>
            <input type="text" name="text" id="text" value={text} onChange={handleChange} />
        </form>
    );
}
// export const TodoFilter = React.memo(_TodoFilter)
