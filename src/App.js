import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expensesHandler = () => {};
  const expenses = [
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
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
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
