function ExpenseItem() {
  return (
    //   Only 1 root(div) element in return statement
    <div>
      <div>March 28th 2021</div>
      <div>
        <h2>Car Insurance</h2>
        <div>$294.67</div>
      </div>
    </div>
  );
}
// or

// const ExpenseItem = () => {
//   return <h2>Expense item!</h2>;
// };

export default ExpenseItem;
