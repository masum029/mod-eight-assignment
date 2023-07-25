import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IncomeForm from '../components/IncomeForm';
import TransactionList from '../components/TransactionList';

const IncomePage = () => {
  const [income, setIncome] = useState([]);

  const addIncome = (amount) => {
    setIncome([...income, amount]);
  };

  return (
    <Container>
      <Row>
        <Col>
          <IncomeForm onAddIncome={addIncome} />
        </Col>
        <Col>
          <TransactionList transactions={income} title="Income" />
        </Col>
      </Row>
    </Container>
  );
};

export default IncomePage;
