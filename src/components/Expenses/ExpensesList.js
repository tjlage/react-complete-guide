import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expensesContent = <p className="">No Expenses Found</p>;

  if (props.filteredExpenses.length > 0) {
    expensesContent = props.filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return expensesContent;
};

export default ExpensesList;
