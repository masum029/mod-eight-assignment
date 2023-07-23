import React, { useState } from 'react';

const ExpenseForm = ({ onSubmitData }) => {
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data to the parent component
    onSubmitData({ item, amount });
    // Reset the form fields after submission
    setItem('');
    setAmount('');
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Expense Form</h2>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="expenseItem" className="form-label">Item:</label>
            <input type="text" className="form-control" id="expenseItem" value={item} onChange={(e) => setItem(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="expenseAmount" className="form-label">Amount:</label>
            <input type="number" className="form-control" id="expenseAmount" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;