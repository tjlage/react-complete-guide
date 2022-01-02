import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    { 
      id: 'e1',
      title: 'Car Insurance',
      date: new Date(2021, 2, 28),
      amount: 294.67},
    { 
      id: 'e2',
      title: 'Gas',
      date: new Date(2021, 3, 28),
      amount: 468.67
    },
    { 
      id: 'e3',
      title: 'Groceries',
      date: new Date(2021, 4, 28),
      amount: 324.67
    }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Expenses expenses={expenses} />
      </header>
    </div>
  );
}

export default App; //default export
