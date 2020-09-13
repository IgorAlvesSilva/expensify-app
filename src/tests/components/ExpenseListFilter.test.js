import React from "react";
import {ExpenseListFilters} from "../../components/ExpenseListFilters";
import { shallow } from 'enzyme'
import {filters, altFilters} from '../fixtures/filters'
import { DateRangePicker } from 'react-dates'
import moment from 'moment'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />);
});

test('should render ExpenseListFilters correcly', () => {
    expect(wrapper).toMatchSnapshot();
});


test('should render ExpenseListFilters with alt data correcly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});


test('should handle text change', () => {
    wrapper.find('input').at(0).simulate('change', {target: {value: 'new text'}});
    expect(setTextFilter).toHaveBeenCalledWith('new text')
});

test('should sort by date', () => {
    wrapper.find('select').at(0).simulate('change', {target: {value: 'date'}});
    expect(sortByDate).toHaveBeenCalledWith()
});


test('should sort by amount', () => {
    wrapper.find('select').at(0).simulate('change', {target: {value: 'amount'}});
    expect(sortByAmount).toHaveBeenCalledWith()
});

test('should handle date changes', () => {
    const startDate = moment(0).add(4,'days');
    const endDate = moment(0).add(40,'days');

    wrapper.find(DateRangePicker).prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenCalledWith(startDate)
    expect(setEndDate).toHaveBeenCalledWith(endDate)
});


test('should handle date focus change', () => {
    wrapper.find(DateRangePicker).prop('onFocusChange')("startDate");
    expect(wrapper.state('calendarFocused')).toBe("startDate");
});
