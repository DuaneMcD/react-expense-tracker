import React from 'react';

function Header() {
  return (
    <body>
      <main>
        <h1>React Tracker</h1>
        <fieldset>
          <legend>New Expense</legend>
          <section id='right'>
            <div>
              <label for='dateInput'>Date</label>
              <input
                id='dateInput'
                type='datetime-local'
                class='dateInput'
                required
              />
            </div>
            <div>
              <label for='nameInput'>Expense Name</label>
              <input id='nameInput' type='text' class='nameInput' required />
            </div>
            <div>
              <label for='vendorInput'>Vendor</label>
              <input
                id='vendorInput'
                type='text'
                class='vendorInput'
                required
              />
            </div>
          </section>
          <section id='left'>
            <div>
              <label for='typeInput'>Expense Type</label>
              <input
                id='typeInput'
                list='expense-list'
                type='text'
                class='typeInput'
                required
              />
              <datalist id='expense-list'>
                <option value='Cash'></option>
                <option value='Credit'></option>
                <option value='Debit'></option>
                <option value='Check'></option>
                <option value='Venmo'></option>
                <option value='Other'></option>
              </datalist>
            </div>
            <div>
              <label for='amountInput'>Amount</label>
              <input
                id='amountInput'
                type='number'
                class='amountInput'
                required
              />
            </div>
            <div>
              <label for='descriptionInput'>Description</label>
              <input
                id='descriptionInput'
                type='text'
                class='descriptionInput'
                required
              />
            </div>
          </section>
          <div>
            <button class='submit'>Submit</button>
          </div>
        </fieldset>
      </main>
      <div class='container'>
        <table class='theTable'>
          <tr>
            <th class='tableHeader'>Date</th>
            <th class='tableHeader'>Expense</th>
            <th class='tableHeader'>Vendor</th>
            <th class='tableHeader'>Type</th>
            <th class='tableHeader'>Amount</th>
            <th class='tableHeader'>Description</th>
            <th class='tableHeader'>Delete</th>
          </tr>
          <template class='template' id='rowTemplate'>
            <tr>
              <td class='lineItem' id='dateTemp' contenteditable='true'></td>
              <td class='lineItem' id='nameTemp' contenteditable='true'></td>
              <td class='lineItem' id='vendorTemp' contenteditable='true'></td>
              <td class='lineItem' id='typeTemp' contenteditable='true'></td>
              <td class='lineItem' id='amountTemp' contenteditable='true'></td>
              <td
                class='lineItem'
                id='descriptionTemp'
                contenteditable='true'></td>
              <td class='delete'>
                <img src='images/flame.svg' class='deleteImg' />
              </td>
            </tr>
          </template>
        </table>
      </div>
    </body>
  );
}

export default Header;
