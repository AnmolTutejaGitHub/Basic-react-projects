import Expense from "../Expense/Expense";
import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './MonthExpense.css';
import { IoMdAddCircle } from "react-icons/io";

function MonthExpense({ month, year, db, AddToDB, onDelete }) {

    const [dateDropdown, setFlag] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [detail, setDetail] = useState('');
    const [amount, setAmount] = useState('');
    const [dateClicked, setDisplay] = useState(true);

    function renderExpense() {
        const Monthexpenses = db.filter((expense) => {

            const [expDay, expMonth, expYear] = expense.date.split('/').map(Number);
            return expYear === parseInt(year) && expMonth === parseInt(month);
        });

        return Monthexpenses.map((expense) => {
            const [expDay, expMonth, expYear] = expense.date.split('/');
            return (
                <Expense
                    date={expDay}
                    id={expense.id}
                    detail={expense.detail}
                    key={expense.id}
                    amount={expense.amount}
                    month={expMonth}
                    onDelete={onDelete}
                />
            );
        })
    }

    function handleDropdown() {
        setFlag(!dateDropdown);
        setDisplay(false);
    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setFlag(false);
        setDisplay(true);
    }

    function AddExpense() {
        AddToDB(selectedDate.toLocaleDateString(), detail, amount);
        setDetail('');
        setAmount('');
    }

    function handleAmount(event) {
        setAmount(event.target.value);
        console.log(amount);
    }

    function handleDetail(e) {
        setDetail(e.target.value);
        console.log(detail);
    }

    return (
        <div className="month-expense">
            <div>
                {/* <div>{month} {year}</div> */}
                <div className="add-details">
                    {dateClicked && <button onClick={handleDropdown} className="expense-date-add">date</button>}
                    {dateDropdown && (
                        <div className="dropdown">
                            <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                dateFormat="yyyy-MM-dd"
                                inline
                            />
                        </div>
                    )}

                    {/* {
                        selectedDate && (<div>{selectedDate.getDate().toString()}</div>)
                    } */}

                    <input onChange={handleAmount} placeholder="Enter Amount" value={amount}></input>
                    <input placeholder="Enter details" onChange={handleDetail} value={detail}></input>
                    <IoMdAddCircle onClick={AddExpense} className="expense-add" />
                    {/* <button onClick={AddExpense} ></button> */}
                </div>

            </div>

            <div className="expense-render">{renderExpense()}</div>
        </div>
    );
}
export default MonthExpense;