import React,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm=(props)=>{
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    const [checkedFlag,setCheckedFlag]=useState(false);
    
    // const [userInput,setUserInput]=useState({
    //     setEnteredTitle:'',
    //     setEnteredAmount:'',
    //     setEnteredDate:'',
    //     setCheckedFlag:'',
    // })

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     setEnteredTitle:event.target.value
        // })
        
        // setUserInput((prevState)=>{
        //     return {...userInput, setEnteredTitle:event.target.value}
        // })
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     setEnteredAmount:event.target.value
        // })
    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     setEnteredDate:event.target.value
        // })
    }
    const flagChangeHandler=(event)=>{
        setCheckedFlag(event.target.checked);
        // setUserInput({
        //     ...userInput,
        //     setCheckedFlag:event.target.value
        // })
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const ExpenseData={
            name:enteredTitle,  
            amount:+enteredAmount,
            date:new Date(enteredDate),
            flag:checkedFlag
        }
        //console.log(ExpenseData);
        props.onSaveExpenseData(ExpenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setCheckedFlag(false);
            
    }


    return (
    <form onSubmit={submitHandler}>
        <div  className='new-expense__controls'>
            <div className='new-expense__control'>
                Title
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
                Amount
                <input type='number' min='0.01' step='0.01' value={enteredAmount}  onChange={amountChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
                Date
                <input type='date' min='2022-01-01' max='2025-12-31' value={enteredDate}  onChange={dateChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                Recurring Payment?
                <input type='checkbox' checked={checkedFlag} onChange={flagChangeHandler}></input>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
    )
}

export default ExpenseForm;
