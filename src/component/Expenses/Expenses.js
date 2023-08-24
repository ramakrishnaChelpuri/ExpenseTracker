import React,{useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card.js';
import ExpensesFilter from './ExpensesFilter.js';
import ExpensesList from './ExpensesList.js';
import ExpensesChart from './ExpensesChart.js';


const Expenses=(props)=>{

    const [filteredYear,setCurrentYear]=useState('2023');

    const changeYearHandler=(selectedYear)=>{
        setCurrentYear(selectedYear);
    }
    const filteredExpenses  =props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear;
    });


    return (
    <div>    
        <Card className='expenses'>
            <ExpensesFilter 
                yearFilter={filteredYear} 
                onChangeFilter ={changeYearHandler}
            />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    </div>
    )
};

export default Expenses;