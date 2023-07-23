import React, { useState } from 'react';
import IncomeForm from './IncomeForm';
import Summary from './Summary';

const IncomePage = () => {
  const [incomeData, setIncomeData] = useState([]);

  const handleSubmitIncome = (data) => {
    setIncomeData([...incomeData, data]);
  };

  // Calculate total income
  const totalIncome = incomeData.reduce((acc, item) => acc + parseFloat(item.amount), 0);

  return (
    <div>
      <h1 className="mb-4">Income Page</h1>
      <IncomeForm onSubmitData={handleSubmitIncome} />
      <Summary totalIncome={totalIncome} />
    </div>
  );
};

export default IncomePage;
