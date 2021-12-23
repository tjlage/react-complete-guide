import "./ExpenseItem.css";
function ExpenseItem(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
  //Above logic could be placed directly in JSX but this is preferred
  return (
    //   Only 1 root(div) element in return statement
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
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
