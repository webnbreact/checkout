import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../client/components/App.jsx';
import Header from '../client/components/Header.jsx';
import Book from '../client/components/Book.jsx';

describe('App component', () => {

  it('should render without crashing', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should store state for the room\'s price and fees', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    const state = wrapper.state();
    expect(state.nightlyPrice).toBeDefined();
    expect(state.cleaningFee).toBeDefined();
    expect(state.serviceFee).toBeDefined();
  });

  it('should render two components', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Book)).toHaveLength(1);
  });
});
