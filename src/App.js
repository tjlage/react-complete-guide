import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: 'e1',
      date: new Date(2021, 2, 28),
      amount: 294.67},
    { title: 'e2',
      date: new Date(2021, 3, 28),
      amount: 468.67
    },
    { title: 'e3',
      date: new Date(2021, 4, 28),
      amount: 324.67
    }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h2>Lets get started!</h2>
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/> {/* or <ExpenseItem></ExpenseItem> */}
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      </header>
    </div>
  );
}

export default App; //default export
