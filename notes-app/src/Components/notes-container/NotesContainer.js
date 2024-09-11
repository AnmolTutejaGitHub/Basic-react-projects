import Note from '../note/note';
import './NotesContainer.css';


function NotesContainer({ onCreate, notes, onEdit, onDelete }) {
    const renderNotes = notes.map((note) => {
        return <Note note={note} id={note.id} onEdit={onEdit} onDelete={onDelete} />;
    });

    function handleClick() {
        onCreate("");
    }

    return (
        <div className="main-container">
            <div className='btn'><button onClick={handleClick}>Create Notes</button></div>
            <div className="container">{renderNotes}</div>
        </div>
    );
}

export default NotesContainer;