import './ExpensesFlag.css'

const ExpensesFlag =(props)=>{
    // const flagColor=document.querySelector('expense-item__reccuringflag').style.color='#008000';
    // const flagColor1=document.querySelector('expense-item__reccuringflag').style.color='#008111';
    
    const recurringFlag=(props.flag)?'Recurring':' ';

    return (
        <div className='recurring-items'>
            {recurringFlag}
        </div>
    )
}

export default ExpensesFlag;