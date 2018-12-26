import React from 'react';
import Dates from './Dates.jsx';
import Guests from './Guests.jsx';
import PriceSummary from './PriceSummary.jsx';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedIn: false,
      checkedOut: false,
      checkinDate: null,
      checkoutDate: null,
      dropdown: 'none',     // -> can be 'guest', 'checkinCal', or 'checkoutCal'
      guests: {
        adults: 1,
        children: 0,
        infants: 0
      },
    };
    this.displayDropdown = this.displayDropdown.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  displayDropdown(item) {
    this.setState({
      dropdown: item,
    });
  }

  handleChange(e) {
    // TO BE FILLED OUT
  }

  render() {
    return (
      <form action="">
        <div>
          <Dates dropdown={this.state.dropdown} displayDropdown={this.displayDropdown} />
          <Guests dropdown={this.state.dropdown} displayDropdown={this.displayDropdown} handleChange={this.handleChange} />
        </div>
        <div>
          {this.state.checkedIn && this.state.checkedOut ? <PriceSummary /> : null}
        </div>
        <div>
          <button type="submit">
            <span>Request to Book</span>
          </button>
        </div>
        <div>
          <span>You won't be charged yet</span>
        </div>
      </form>
    );
  }
}

export default Book;
