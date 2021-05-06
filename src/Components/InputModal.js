import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const InputModal = () => {
  const { expenses, setExpenses } = useContext(ExpenseContext);
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState();
  const [vendor, setVendor] = useState('');
  const [payment, setPayment] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const checkSubmition = e => {
    e.preventDefault();
    return checkEmptyInputs()
      ? alert(`Unable to Submit! All fields required.`)
      : handleFormSubmit();
  };

  const handleFormSubmit = () => {
    const newExpense = {
      id: Date.now(),
      date,
      amount: formatAmount(amount),
      vendor,
      payment,
      description,
      category,
    };

    setExpenses([...expenses, newExpense]);
    clearFields();
  };

  const checkEmptyInputs = () => {
    const emptyInput =
      !date || !amount || !vendor || !payment || !description || !category;
    return emptyInput ? true : false;
  };

  const formatAmount = amount => {
    return (amount = +parseFloat(amount).toFixed(2));
  };

  const clearFields = () => {
    setDate('');
    setAmount('');
    setVendor('');
    setPayment('');
    setDescription('');
    setCategory('');
  };

  return (
    <div className='modal fade' id='inputModal'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Create New Expense
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'></button>
          </div>
          <div className='modal-body'>
            <form className='row g-3' onSubmit={checkSubmition}>
              <div className='mb-3 selectDate col-md-6'>
                <label htmlFor='inputDate' className='form-label'>
                  Date
                </label>
                <input
                  type='date'
                  className='form-control'
                  id='inputDate'
                  value={date}
                  onChange={event => setDate(event.target.value)}
                />
              </div>
              <div className='mb-3 amountInput col-md-6'>
                <label htmlFor='inputAmount' className='form-label'>
                  Amount
                </label>
                <input
                  type='number'
                  min='0.00'
                  max='100000.00'
                  step='any'
                  className='form-control'
                  id='inputAmount'
                  value={amount}
                  placeholder={0.0}
                  onChange={event => setAmount(event.target.value)}
                  onSubmit={e => setAmount('')}
                />
              </div>
              <div className='mb-3 paymentSelect col-md-6'>
                <label htmlFor='paymentType' className='form-label'>
                  Payment Type
                </label>
                <input
                  className='form-control'
                  list='paymentOptions'
                  id='paymentType'
                  value={payment}
                  placeholder='Click to search...'
                  onChange={event => setPayment(event.target.value)}
                />
                <datalist id='paymentOptions'>
                  <option value='Cash' />
                  <option value='Check' />
                  <option value='Credit' />
                  <option value='Debit' />
                  <option value='Cash App' />
                </datalist>
              </div>
              <div className='mb-3 categorySelect col-md-6'>
                <label htmlFor='categorySelect' className='form-label'>
                  Category
                </label>
                <input
                  className='form-control'
                  list='categoryOptions'
                  id='categorySelect'
                  value={category}
                  placeholder='Click to search...'
                  onChange={event => setCategory(event.target.value)}
                />
                <datalist id='categoryOptions'>
                  <option value='Meals' />
                  <option value='Travel' />
                  <option value='Personal' />
                  <option value='Supplies' />
                  <option value='Entertainment' />
                </datalist>
              </div>
              <div className='mb-3 vendorInput col-md-6'>
                <label htmlFor='inputVendor' className='form-label'>
                  Vendor Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='inputVendor'
                  value={vendor}
                  placeholder='place of purchase'
                  onChange={event => setVendor(event.target.value)}
                />
              </div>

              <div className='mb-3 descriptionInput col-md-6'>
                <label htmlFor='inputDescription' className='form-label'>
                  Description
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='inputDescription'
                  value={description}
                  placeholder='reason for purchase'
                  onChange={event => setDescription(event.target.value)}
                />
              </div>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'>
                Cancel
              </button>
              <button
                type='submit'
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#inputModal'>
                Save
              </button>
            </form>
          </div>
          <div className='modal-footer'></div>
        </div>
      </div>
    </div>
  );
};

export default InputModal;
