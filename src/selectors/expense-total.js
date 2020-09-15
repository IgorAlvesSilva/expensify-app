export default (expenses) => {
    return expenses.reduce((accumulator, currentExpense) => (accumulator + currentExpense.amount), 0.0)
  };