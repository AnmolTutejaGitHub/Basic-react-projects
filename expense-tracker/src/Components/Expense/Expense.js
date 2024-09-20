import './Expense.css';
import { MdDelete } from "react-icons/md";
function Expense({ date, detail, id, amount, month, onDelete }) {
    const monthMap = {
        '01': 'Jan',
        '02': 'Feb',
        '03': 'Mar',
        '04': 'Apr',
        '05': 'May',
        '06': 'Jun',
        '07': 'Jul',
        '08': 'Aug',
        '09': 'Sep',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec'
    };

    function handleDelete() {
        onDelete(id);
    }
    return (
        <div className="expense-div">
            <div className="expense-date">
                <div>{date}</div>
                <div>{monthMap[month]}</div>
            </div>
            <img className="expense-img" src="https://i.pravatar.cc/50"></img>
            <div className="expense-amount">$ {amount}</div>
            <div>{detail}</div>
            <div className='expense-delete'>
                <MdDelete onClick={handleDelete} />
            </div>
        </div>
    );

}
export default Expense;