import { useState } from 'react';
import './TodoFilter.scss';
import { useForm } from '../../hooks/useForm';
export function TodoFilter(props) {

    const toggleUseDate = (ev) => {
        ev.target.checked = ev.target.checked ? "on" : "off";
        handleChange(ev);
        setDisableDate(!useDate);
    };

    const [filterBy, handleChange] = useForm({ date: '', text: '' }, props.onChangeFilter);
    const { date, text } = filterBy;
    const [useDate, setDisableDate] = useState(true);

    return (
        <form className="todo-filter" onSubmit={(ev) => ev.preventDefault()}>
            <input type="checkbox" name="useDate" onChange={(ev) => toggleUseDate(ev)} checked={useDate}/>
            <label htmlFor="date">Filter by date:</label>
            <input
                type="date"
                name="date"
                id="date"
                value={date}
                onChange={handleChange}
                min="2021-01-01"
                max="2050-12-31"
                disabled={!useDate}
            />
            <label htmlFor="text">Search:</label>
            <input type="text" name="text" id="text" value={text} onChange={handleChange} />
        </form>
    );
}
// export const TodoFilter = React.memo(_TodoFilter)
