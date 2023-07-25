import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const IncomeForm = ({ onAddIncome }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount !== '') {
      onAddIncome(parseFloat(amount));
      setAmount('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="incomeAmount">
        <Form.Label>Income Amount</Form.Label>
        <Form.Control
          type="number"
          step="0.01"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Income
      </Button>
    </Form>
  );
};

export default IncomeForm;
