import { useState, useEffect } from "react";
import Header from './Components/Header/Header';
import MonthYearSelection from "./Components/MonthYearSelection/MonthYearSelection";
import MonthExpense from "./Components/MonthExpense/MonthExpense";
import axios from "axios";
import './App.css';

function App() {
    const [db, setDB] = useState([]);

    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    function SetMonth(Month) {
        setMonth(Month);
        //console.log(month);
    }
    function SetYear(Year) {
        setYear(Year);
        //console.log(year);
    }

    async function AddToDB(date, detail, amount) {
        const expense = {
            date: date,
            detail: detail,
            amount: amount,
            //id : undefined error when del without  refeshing 
        };
        await axios.post('http://localhost:3001/expenses', expense);
        setDB([...db, expense]);
    }


    async function fetchDB() {
        const response = await axios.get("http://localhost:3001/expenses");
        setDB(response.data);
    }

    useEffect(() => {
        fetchDB();
    }, [])


    async function deleteExpense(id) {
        console.log(id);
        await axios.delete(`http://localhost:3001/expenses/${id}`);
        setDB(db.filter(expense => expense.id !== id));
    }


    return (
        <div className="app">
            <Header />
            <MonthYearSelection SetMonth={SetMonth} SetYear={SetYear} />
            {month && year && <MonthExpense db={db} month={month} year={year} AddToDB={AddToDB} onDelete={deleteExpense} />}
        </div>
    );
}
export default App;