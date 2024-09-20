import { useState } from "react";
import './MonthYearSelection.css';

function MonthYearSelection({ SetMonth, SetYear }) {
    const [monthYear, setMonthYear] = useState('');

    const handleChange = (event) => {
        setMonthYear(event.target.value);
        //console.log(monthYear);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const [year, month] = monthYear.split('-');
        SetMonth(month);
        SetYear(year);
    };


    return (
        <div className="select-month-year">
            <form onSubmit={handleSubmit} className="select-form">
                <fieldset>
                    <legend className="yearmonth">Select Month and Year</legend>
                    <input
                        type="month"
                        id="monthYear"
                        value={monthYear}
                        onChange={handleChange}
                    />
                </fieldset>
                <button className="submit-btn" type="submit">Submit</button>
            </form>
        </div >
    );
}
export default MonthYearSelection;