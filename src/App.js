import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    date: new Date(2021, 2, 28),
    amount: 294.67,
  },
  {
    id: "e2",
    title: "Gas",
    date: new Date(2021, 3, 28),
    amount: 468.67,
  },
  {
    id: "e3",
    title: "Groceries",
    date: new Date(2021, 4, 28),
    amount: 324.67,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses expenses={expenses} />
      </header>
    </div>
  );
};

export default App; //default export
