import "./ExpenseItem.css";
function ExpenseItem(props) {
  console.log(props.date.toISOString())
  return (
    //   Only 1 root(div) element in return statement
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
// or

// const ExpenseItem = () => {
//   return <h2>Expense item!</h2>;
// };

export default ExpenseItem;
