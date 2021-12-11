import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Lets get started!</h2>
        <ExpenseItem /> {/* or <ExpenseItem></ExpenseItem> */}
      </header>
    </div>
  );
}

export default App; //default export
