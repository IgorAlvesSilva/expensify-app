import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test ('should render ExpensesSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={200} />);
    expect(wrapper).toMatchSnapshot();
});

test ('should render ExpensesSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expenseTotal={3798237} />);
    expect(wrapper).toMatchSnapshot();
});