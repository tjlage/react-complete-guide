import NewExpense from "../NewExpense/NewExpense";
import "../NewExpense/NewExpense.css";

const AddNewExpense = (props) => {
  const AddNewExpenseHandler = () => {
    props.AddNewExpenseHandle();
  };
  return (
    <div className="new-expense">
      <button onClick={AddNewExpenseHandler}>Add New Expense</button>
    </div>
  );
};

export default AddNewExpense;
