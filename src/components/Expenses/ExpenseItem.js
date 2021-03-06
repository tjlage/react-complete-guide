import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //Removed date logic and put it into its own separate component
  const [title, setTitle] = useState(props.title);
  //useState requires the varibles default value as arg. Then it returns the var name and updating function
  const clickHandler = () => {
    setTitle('Updated!!!')
  };
  return (
    //   Only 1 root(div) element in return statement
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
// or

// const ExpenseItem = () => {
//   return <h2>Expense item!</h2>;
// };

export default ExpenseItem;
