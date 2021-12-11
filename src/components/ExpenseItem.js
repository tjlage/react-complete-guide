import "./ExpenseItem.css";
function ExpenseItem() {
  return (
    //   Only 1 root(div) element in return statement
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}
// or

// const ExpenseItem = () => {
//   return <h2>Expense item!</h2>;
// };

export default ExpenseItem;
