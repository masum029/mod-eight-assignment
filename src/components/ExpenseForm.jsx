import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ExpenseForm = ({ onAddExpense }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount !== '') {
      onAddExpense(parseFloat(amount));
      setAmount('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="expenseAmount">
        <Form.Label>Expense Amount</Form.Label>
        <Form.Control
          type="number"
          step="0.01"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Form.Group>
      <Button variant="danger" type="submit">
        Add Expense
      </Button>
    </Form>
  );
};

export default ExpenseForm;
