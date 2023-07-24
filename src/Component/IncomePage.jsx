import React, { useState,useEffect } from 'react';
import IncomeForm from './IncomeForm';
import Summary from './Summary';
import { useNavigate } from 'react-router-dom';

const IncomePage = () => {
  const [incomeData, setIncomeData] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    // Retrieve data from local storage when the component is mounted
    const storedData = JSON.parse(localStorage.getItem('incomeData'));
    if (storedData) {
      setIncomeData(storedData);
    }
  }, []);

  // const handleSubmitIncome = (data) => {
  //   setIncomeData([...incomeData, data]);
  // };

  const handleSubmitIncome = (data) => {
    const updatedData = [...incomeData, data];
    setIncomeData(updatedData);
    // Save the updated data to local storage
    localStorage.setItem('incomeData', JSON.stringify(updatedData));
    // Reset the form fields after submission
    navigate('/income');
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
