import { useState, useEffect } from "react";
import NotesContainer from "../Components/notes-container/NotesContainer";
import axios from "axios";
import './App.css';

function App() {
    const [notes, setNotes] = useState([]);

    const fetchNotes = async () => {
        const response = await axios.get("http://localhost:3001/notes");
        setNotes(response.data);
    }
    useEffect(() => {
        fetchNotes();
    }, [])

    const createNotes = async (data) => {
        const response = await axios.post('http://localhost:3001/notes', {
            data: data
        });

        const updated = [...notes, response.data];
        setNotes(updated);
    }

    const EditNotesById = async (id, NewData) => {
        const response = await axios.put(`http://localhost:3001/notes/${id}`, {
            data: NewData
        });

        const updated = notes.map((note) => {
            if (note.id == id) return { ...note, ...response.data };
            return note;
        });

        setNotes(updated);
    }

    const DeleteNotesById = async (id) => {
        await axios.delete(`http://localhost:3001/notes/${id}`);
        const updated = notes.filter((note) => note.id !== id);
        setNotes(updated);
    }



    return (
        <div className="body">
            <h1>Notes App</h1>
            <div className="notes-container">
                <NotesContainer onCreate={createNotes} notes={notes} onEdit={EditNotesById} onDelete={DeleteNotesById} />
            </div>
        </div>
    );
}
export default App;