import React from 'react';

const TransactionList = ({ transactions, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul className="list-group">
        {transactions.map((transaction, index) => (
          <li className="list-group-item" key={index}>
            {transaction}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
