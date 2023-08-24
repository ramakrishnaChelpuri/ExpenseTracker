import React from 'react';
import ExpenseItem from './ExpenseItem.js';
import './ExpensesList.css'

const ExpensesList=props=>{
    
    if (props.items.length===0){
        return <h2 className='expenses-list_fallback' >No Expenses found this year</h2>
    }
        

    return(
        <ul className='expenses-list'>
            {props.items.map((expenses) => (
            <ExpenseItem
            key={expenses.id}
            name={expenses.name}
            amount={expenses.amount}
            date={expenses.date}
            flag={expenses.flag}
            />))}
        </ul>
    )
};

export default  ExpensesList;       