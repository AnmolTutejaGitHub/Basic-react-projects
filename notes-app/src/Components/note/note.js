import { useState } from "react";
import './notes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Note({ note, id, onEdit, onDelete }) {

    const [text, setText] = useState(note.data);
    function handleChange(event) {
        setText(event.target.value);
        onEdit(id, text);
    }

    function handleDelete() {
        onDelete(id);
    }
    return (
        <div className="note">
            <div className="note-header">
                <button onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrash} size="lg" />
                </button>
            </div>
            <form>
                <textarea rows={13} cols={45} value={text} onChange={handleChange}></textarea>
            </form>
        </div>
    );
}

export default Note;