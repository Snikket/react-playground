import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  //Alternative return statement:
  //return React.createElement('div', {},
  //  React.createElement('h2', {}, "Let's get started!"),
  // React.createElement(Expenses, { expenses: expenses })
  //);

  const [validationMessage, setMessage] = useState('Invalid Message')
  const titleChangeHandler = (event) => {
    setMessage(event.target.value);
    /*        setUserInput((prevState) => {
                return { ...prevState, enteredTitle: event.target.value };
            })*/
  }

  return (
      <form>
        <label>Your message</label>
        <input type="text" />
        <p>Invalid message</p>
      </form>
  );
}

export default App;
