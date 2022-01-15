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
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />{" "}
        {/* or <ExpenseItem></ExpenseItem> */}
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
      </Card>
    </div>
  );
};
export default Expenses;
