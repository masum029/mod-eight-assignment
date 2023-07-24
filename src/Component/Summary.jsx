import React from 'react';

const Summary = ({ totalIncome, totalExpense }) => {
  // Initialize totalIncome and totalExpense to 0 if they are undefined
  //totalExpense = JSON.parse(localStorage.getItem('expenseData'));
   
  totalIncome = totalIncome || 0;
  totalExpense = totalExpense || 0;

  const balance = totalIncome - totalExpense;

  return (
    <div className="card mt-4">
      <div className="card-header">
        <h2>Summary</h2>
      </div>
      <div className="card-body">
        {totalIncome ? <p>Total Income: $ {totalIncome.toFixed(2)}</p> : <p>No income data available.</p>}
        {totalExpense ? <p>Total Expenses: $ {totalExpense.toFixed(2)}</p> : <p>No expense data available.</p>}
        <p>Balance: $ {balance.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Summary;
