import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../client/components/App.jsx';
import Header from '../client/components/Header.jsx';
import Book from '../client/components/Book.jsx';
import Dates from '../client/components/Dates.jsx';
import Guests from '../client/components/Guests.jsx';
import PriceSummary from '../client/components/PriceSummary.jsx';
import {
  Price, Button, ButtonSubmit, ButtonQuest, Text,
} from '../client/components/styled/Styled.jsx';

const { sampleState } = require('./sampleData.js');

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
  const wrapper = mount(<Header state={sampleState} />);

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

describe('Book component', () => {
  const wrapper = mount(<Book state={sampleState} />);

  it('should include a "Request to Book" button', () => {
    const bookingButton = wrapper.find(ButtonSubmit);
    expect(bookingButton).toHaveLength(1);
  });

  it('should not display the Price Summary on initial render', () => {
    const priceSumm = wrapper.find(PriceSummary);
    expect(priceSumm).toHaveLength(0);
  });

  it('should render the Dates and Guests components', () => {
    expect(wrapper.find(Dates)).toHaveLength(1);
    expect(wrapper.find(Guests)).toHaveLength(1);
  });
});

describe('PriceSummary component', () => {
  const wrapper = mount(<PriceSummary />);

  it('should include a line for the Service Fee and Total', () => {
    expect(wrapper.find('span.service-fee').text()).toBe('Service fee');
    expect(wrapper.find('span.total').text()).toBe('Total');
  });

  it('should contain at least one help button for explaining the \
  service fee (cleaning fee is not always charged)', () => {
    expect(wrapper.find(ButtonQuest).length).toBeGreaterThanOrEqual(1);
  });
});
