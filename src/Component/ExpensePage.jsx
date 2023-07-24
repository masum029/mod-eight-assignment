import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import Summary from './Summary';
import { useNavigate } from 'react-router-dom';

const ExpensePage = () => {
  const [expenseData, setExpenseData] = useState([]);
const navigate=useNavigate();
  // const handleSubmitExpense = (data) => {
  //   setExpenseData([...expenseData, data]);
  // };

  const handleSubmitExpense = (data) => {
    const updatedData=[...expenseData,data];
    setExpenseData(updatedData);
    localStorage.setItem('expenseData',JSON.stringify(updatedData));
     navigate('/expenses');
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
