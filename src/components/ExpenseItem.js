import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  //Removed date logic and put it into its own separate component
  return (
    //   Only 1 root(div) element in return statement
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
// or

// const ExpenseItem = () => {
//   return <h2>Expense item!</h2>;
// };

export default ExpenseItem;
