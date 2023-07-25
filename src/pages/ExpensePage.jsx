import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ExpenseForm from '../components/ExpenseForm';
import TransactionList from '../components/TransactionList';

const ExpensePage = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (amount) => {
    setExpenses([...expenses, amount]);
  };

  return (
    <Container>
      <Row>
        <Col>
          <ExpenseForm onAddExpense={addExpense} />
        </Col>
        <Col>
          <TransactionList transactions={expenses} title="Expenses" />
        </Col>
      </Row>
    </Container>
  );
};

export default ExpensePage;
