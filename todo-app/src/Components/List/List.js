import { useState } from "react";
import './List.css'

function List({ data, handleDelete, id, handleCheck }) {
    const [checked, setCheck] = useState(data.checked || false);
    function onDelete() {
        handleDelete(id);
    }

    function onCheck() {
        handleCheck(id, !checked, data);
        setCheck(!checked);
    }
    return (
        <div className="list-item">
            <input type="checkbox" onChange={onCheck} checked={checked}></input>
            <div className="data-title" style={{ textDecoration: checked ? "line-through" : "none" }}>{data.title}</div>
            <div>:</div>
            <div className="data-details" style={{ textDecoration: checked ? "line-through" : "none" }}>{data.description}</div>
            <button className="del-btn" onClick={onDelete}>delete</button>
        </div>
    );
}

export default List; 