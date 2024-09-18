import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
    const notify = () => toast.warn('Enter all the values!');
    const [datalist, setDataList] = useState([]);

    const fetchData = async () => {
        const response = await axios.get("http://localhost:3001/content");
        setDataList(response.data);
    }
    useEffect(() => {
        fetchData();
    }, [])

    async function handleAdd(title, description) {
        if (title === "" || description === "") {
            notify(); //https://www.npmjs.com/package/react-toastify
            return;
        };
        const response = await axios.post("http://localhost:3001/content", { title, description, checked: false });
        const newItem = response.data;
        setDataList([...datalist, newItem]);
    }

    const handleCheck = async (id, newCheck, data) => {
        const response = await axios.put(`http://localhost:3001/content/${id}`, {
            ...data,
            checked: newCheck
        });

        const updated = datalist.map((data) => {
            if (data.id == id) return { ...data, ...response.data };
            return data;
        });
        setDataList(updated);
    }

    async function handleDelete(id) {
        await axios.delete(`http://localhost:3001/content/${id}`);
        setDataList(datalist.filter(data => data.id !== id));
    }


    return (
        <div>
            <Header datalist={datalist} handleAdd={handleAdd} handleDelete={handleDelete} handleCheck={handleCheck} />
            <ToastContainer position="top-center" />
        </div>
    );
}
export default App;