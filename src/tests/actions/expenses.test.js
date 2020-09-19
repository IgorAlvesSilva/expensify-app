import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addExpense, editExpense, removeExpense, startAddExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from "../../actions/expenses";
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {}

    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = {description, note, amount, createdAt}
    });
    database.ref('expenses').set(expensesData).then(() => done());
});

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        'id': '123abc'
    })
})


test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {note: 'New note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        'id': '123abc',
        'updates': {note: 'New note value'}
    })
})

test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('shoul add expense to database and store', (done) => {
    const store = createMockStore({});

    const expenseData = {
        description: "mouse",
        amount: 3000,
        note: "A good mouse",
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should setup set expense actio with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
});


test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'SET_EXPENSES',
            expenses
        })
        done();
    });
})

test('should remove expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[0].id;
    store.dispatch(startRemoveExpense({id})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id: id
        })
        
        return database.ref('expenses').once('value');

    }).then((snapshot) => {
        expect(snapshot.val()[id]).toBeFalsy();
        done();
    });
})

test('should edit expense from firebase', (done) => {
    const store = createMockStore({});
    const updates = {note:'just a test', createdAt:10000};
    const updatedExpense = {...expenses[0], ...updates}
    store.dispatch(startEditExpense(updatedExpense.id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'EDIT_EXPENSE',
            id: updatedExpense.id,
            updates
        })
        
        return database.ref(`expenses/${updatedExpense.id}`).once('value');

    }).then((snapshot) => {
        
        expect({...snapshot.val(), id: snapshot.key}).toEqual(updatedExpense);
        done();
    });
})