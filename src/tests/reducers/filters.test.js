import filtersReducer from "../../reducers/filters";
import moment from 'moment'

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
});

test('should set sortBy to date', () => {
    const defaultState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(defaultState, action);
    expect(state.sortBy).toBe('date')
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'some text'});
    expect(state.text).toBe('some text')
});

test('should set start date filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: moment(3)});
    expect(state.startDate).toEqual(moment(3))
});

test('should set end date filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: moment(3)});
    expect(state.endDate).toEqual(moment(3))
});