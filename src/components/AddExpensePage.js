import React from 'react';
import ExpenseFrom from './ExpenseForm';
import {connect} from 'react-redux'
import { startAddExpense } from '../actions/expenses'


export class AddExpensePage extends React.Component {
  onSubmit = (expense => {
    this.props.startAddExpense(expense);
    this.props.history.push("/")
  })

  render() {
    return (
      <div>
      This is from my add expense component
      <ExpenseFrom 
        onSubmit={this.onSubmit}
      />
    </div>    
    )}}


const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
  };
}
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
