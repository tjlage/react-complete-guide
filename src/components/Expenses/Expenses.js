import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setYearFilter] = useState("2020");
  const filteredYear = (year) => {
    setYearFilter(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filter={filteredYear} selected={selectedYear} />
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
