import React, { useEffect, useContext, createElement } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';
import './ExpTable.css';

function ExpTable() {
  const { newExpense } = useContext(ExpenseContext);

  const deleteRow = r => {
    let i = r.parentNode.parentNode.rowIndex;
    document.getElementById('table').deleteRow(i);
  };

  const logClick = () => {
    console.log('clicked it');
  };

  const createExpenseRow = () => {
    let newRow = document.querySelector('.tableBody').insertRow(-1);
    newRow.innerHTML = `<td>${newExpense.date}</td>
    <td>$ ${newExpense.amount}</td>
    <td>${newExpense.payment}</td>
    <td>${newExpense.category}</td>
    <td>${newExpense.vendor}</td>
    <td>${newExpense.description}</td>
    <td>${React.createElement('button', { onClick: logClick }, 'delete')}</td>
    `;
  };

  useEffect(() => {
    createExpenseRow();
  }, [newExpense]);

  return (
    <table className='table .table-responsive table-sm table-borderless table-dark table-hover table-striped '>
      <thead className='.thead-dark '>
        <tr>
          <th className='table-header'>Date</th>
          <th className='table-header'>Amount</th>
          <th className='table-header'>Payment</th>
          <th className='table-header'>Category</th>
          <th className='table-header'>Vendor</th>
          <th className='table-header'>Description</th>
          <th className='table-header'>Delete</th>
        </tr>
      </thead>
      <tbody className='tableBody'></tbody>
    </table>
  );
}

export default ExpTable;