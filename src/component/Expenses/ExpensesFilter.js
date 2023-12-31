import React from 'react';

import './ExpensesFilter.css';
import ExpenseItem from './ExpenseItem';

const ExpensesFilter = (props) => {

    const changeFilterHandler=(event)=>{
        props.onChangeFilter(event.target.value);
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={changeFilterHandler} value={props.yearFilter}>
          <option value='2025'>2025</option>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;