import React, { useEffect, useState } from 'react';
import './BoostrapReset.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DonutChart from './Components/Donut';
import ExpenseTable from './Components/ExpenseTable';
import InputModal from './Components/InputModal';
import { ExpenseContext } from './contexts/ExpenseContext';

function App() {
  const [expenses, setExpenses] = useState([
    {
      date: 'Never',
      amount: 0.01,
      payment: 'EXAMPLE',
      category: 'EXAMPLE',
      vendor: 'Duane',
      description: 'DELETE ME',
    },
  ]);

  useEffect(() => {
    if (localStorage.expenses) {
      const savedExpenses = JSON.parse(localStorage.getItem('expenses') || []);
      setExpenses(savedExpenses);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className='App position-absolute top-50 start-50 translate-middle'>
      <ExpenseContext.Provider value={{ expenses, setExpenses }}>
        <h1>React TRKR</h1>
        <DonutChart className='chart' />
        <button
          type='button'
          className='btn btn-primary'
          data-bs-toggle='modal'
          data-bs-target='#inputModal'
          data-backdrop='false'>
          New Expense
        </button>
        <InputModal />
        <ExpenseTable />
      </ExpenseContext.Provider>
    </div>
  );
}

export default App;
