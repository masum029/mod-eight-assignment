import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import Summary from './Summary';

const ExpensePage = () => {
  const [expenseData, setExpenseData] = useState([]);

  const handleSubmitExpense = (data) => {
    setExpenseData([...expenseData, data]);
  };

  // Calculate total expenses
  const totalExpense = expenseData.reduce((acc, item) => acc + parseFloat(item.amount), 0);

  return (
    <div>
      <h1 className="mb-4">Expense Page</h1>
      <ExpenseForm onSubmitData={handleSubmitExpense} />
      <Summary totalExpense={totalExpense} />
    </div>
  );
};

export default ExpensePage;
