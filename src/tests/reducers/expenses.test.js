import expenseReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should set default value', () => {
    const state = expenseReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
})


test('should remove expense by id', () => {
    const action = { 
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    }
    const state = expenseReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove expenses if id not found', () => {
    const action = { 
        type: "REMOVE_EXPENSE",
        id: -1
    }
    const state = expenseReducer(expenses, action);

    expect(state).toEqual(expenses);
})

test('should add expense', () => {
    const new_expense = {
        description: 'Rent',
        note: '',
        amount: 3000,
        createdAt: moment(0),
        id: 100
    }

    const action = { 
        type: "ADD_EXPENSE",
        expense: new_expense
    }
    const state = expenseReducer(expenses, action);

    expect(state).toEqual([...expenses, new_expense]);
})

test('should edit expense if id found', () => {
    const amount =  12200
    const action = { 
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates: {amount}
    }
    const state = expenseReducer(expenses, action);

    expect(state[1].amount).toBe(amount);
})

test('should not edit expenses if id not found', () => {
    const action = { 
        type: "EDIT_EXPENSE",
        id: -1,
        updates: {note: 'new note'}
    }
    const state = expenseReducer(expenses, action);

    expect(state).toEqual(expenses);
})



test('should set expenses', () => {
    const action = { 
        type: "SET_EXPENSES",
        expenses
    }

    const state = expenseReducer(expenses[1], action);

    expect(state).toEqual(expenses);
})