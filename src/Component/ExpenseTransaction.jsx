import React, { useState } from 'react';

const ExpenseTransaction = () => {
  // State to track the expense transaction details
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the expense transaction (e.g., save to a database, update state, etc.)
    // Add your logic here
    console.log('Expense Transaction:', { description, amount });
    // Clear the form after submission
    setDescription('');
    setAmount('');
  };

  return (
    <div>
      <h1>Expense Transaction</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseTransaction;
