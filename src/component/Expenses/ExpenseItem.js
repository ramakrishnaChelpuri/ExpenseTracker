import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card.js';
import ExpensesFlag from './ExpensesFlag.js';

const ExpenseItem=(props)=>{
    
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description" >
            <div>
                <h2>{props.name}</h2>
            </div>            
            <div className="expense-item__recurringflag">
                <ExpensesFlag flag={props.flag}/>
            </div>
            <div className="expense-item__price">{props.amount}$</div>
        </div>
        </Card>
    );
}

export default ExpenseItem;