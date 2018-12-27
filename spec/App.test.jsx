import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../client/components/App.jsx';
import Header from '../client/components/Header.jsx';
import Book from '../client/components/Book.jsx';
import { Price, Button, Text } from '../client/components/styled/Styled.jsx';

const { headerData } = require('./sampleData.js');

describe('App component', () => {
  const wrapper = shallow(<App />, { disableLifecycleMethods: true });
  
  it('should render without crashing', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should store state for the room\'s price and fees', () => {
    const state = wrapper.state();
    expect(state.nightlyPrice).toBeDefined();
    expect(state.cleaningFee).toBeDefined();
    expect(state.serviceFee).toBeDefined();
  });

  it('should render the Header and Book components', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Book)).toHaveLength(1);
  });
});

describe('Header component', () => {
  const wrapper = mount(<Header state={headerData} />);

  it('should contain a valid number for the nightly price', () => {
    const price = wrapper.find(Price).text();
    const priceDigits = price.slice(1);
    expect(Number(priceDigits)).not.toBe(NaN);
  });

  it('should contain a button that indicates the number of reviews', () => {
    const reviewsButton = wrapper.find(Button);
    const reviewCount = wrapper.find(Text).get(1).props.children;
    expect(reviewsButton).toHaveLength(1);
    expect(typeof reviewCount).toBe('number');
  });
});
