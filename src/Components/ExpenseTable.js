import React from 'react';
import ExpenseRow from './ExpenseRow';
import './ExpenseTable.css';

function ExpenseTable() {
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
      <tbody>
        <ExpenseRow></ExpenseRow>
      </tbody>
    </table>
  );
}

export default ExpenseTable;
