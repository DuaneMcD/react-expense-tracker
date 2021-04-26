import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DonutChart from './Components/Donut';
import ExpTable from './Components/ExpTable';
import InputModal from './Components/InputModal';
import { ExpenseContext } from './contexts/ExpenseContext';

function App() {
  const [expenses, setExpenses] = useState([]);

  return (
    <div className='App'>
      <ExpenseContext.Provider value={{ expenses, setExpenses }}>
        <h1>React TRKR</h1>
        <DonutChart className='chart' />
        <button
          type='button'
          className='btn btn-primary'
          data-bs-toggle='modal'
          data-bs-target='#inputModal'>
          New Expense
        </button>
        <InputModal />
        <ExpTable />
      </ExpenseContext.Provider>
    </div>
  );
}

export default App;
