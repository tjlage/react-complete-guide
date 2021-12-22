import "./ExpenseItem.css";
function ExpenseItem() {
    const expenseDate = Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expensePrice = 294.67;
  return (
    //   Only 1 root(div) element in return statement
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
}
// or

// const ExpenseItem = () => {
//   return <h2>Expense item!</h2>;
// };

export default ExpenseItem;
