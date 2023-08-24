import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense=(props)=>{

    const [isEditing,setIsEditing]=useState(false);

    const saveExpenseHandler=(enteredExpenseData)=>{
        const Expense={...enteredExpenseData}
        //console.log(enteredExpenseData);

        props.onSaveExpense(Expense);
        setIsEditing(false);
    }

    const startEditingHandler=()=>{
        setIsEditing(true);
    }

    const stopEditingHandler=()=>{
        setIsEditing(false);
    }

return (
    <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add Expenses</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseHandler}
                                   onCancel={stopEditingHandler}/>}
    </div>
)
}

export default NewExpense;
