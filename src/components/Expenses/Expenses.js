import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [selectedYear, setYearFilter] = useState("2020");
  const filteredYear = (year) => {
    setYearFilter(year);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filter={filteredYear} selected={selectedYear} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
