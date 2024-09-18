import { useState } from "react";
import List from "../List/List";
import './Header.css';


function Header({ datalist, handleAdd, handleDelete, handleCheck }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const render = datalist.map((data) => {
        return <List data={data} handleDelete={handleDelete} id={data.id} handleCheck={handleCheck} />
    });

    function handleTitle(event) {
        setTitle(event.target.value);
    }


    function handleDescription(event) {
        setDescription(event.target.value);
    }

    function onAdd() {
        handleAdd(title, description);
        setTitle("");
        setDescription("");
    }

    return (
        <div>
            <div className="header">
                <h1>ToDo List</h1>
                <div className="header-input">
                    <input className="input-box" placeholder="title" value={title} onChange={handleTitle} required></input>
                    <input className="input-box" placeholder="description" value={description} onChange={handleDescription} required></input>
                    <div className="btn" onClick={onAdd} type="submit">Add</div>
                </div>
            </div>
            <div className="renderList">{render}</div>
        </div >
    );
}

export default Header;