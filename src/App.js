import React,{useState} from 'react';
import './App.css';
import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/NewExpense/NewExpense';


const Dummy_Expenses=[
  {
    id:0,
    name:'Car Insurance',
    date:new Date(2023, 4, 1),
    flag:1,
    amount:186
  },
  {
    id:1,
    name:'T-Mobile',
    date:new Date(2023, 1, 9),
    flag:1,
    amount:21
  },
  {
    id:2,
    name:'Grocery',
    date:new Date(2023, 2, 1),
    flag:0,
    amount:90
  },
  {
    id:3,
    name:'Home Rent',
    date:new Date(2023, 5, 5),
    flag:1,
    amount:400
  },
]

function App() {
  const [expenses,setExpenses]=useState(Dummy_Expenses);

  const saveExpenseDataHandler=expense=>{
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]});
  }

  return (
    <div>
      <h1>My Expenses📉</h1>
        <NewExpense onSaveExpense={saveExpenseDataHandler}/>
        <Expenses items={expenses}/>
    </div>
   );
}

export default App;
