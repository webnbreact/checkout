import React from 'react';
import Dates from './Dates.jsx';
import Guests from './Guests.jsx';
import PriceSummary from './PriceSummary.jsx';
import { ButtonSubmit, CenterText } from './styled/Styled.jsx';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedIn: true,   // change back to false after testing
      checkedOut: true,   // change back to false after testing
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
    const { nightlyPrice, cleaningFee, serviceFee } = this.props.state;
    return (
      <form action="">
        <div>
          <Dates dropdown={this.state.dropdown} displayDropdown={this.displayDropdown} />
          <Guests dropdown={this.state.dropdown} displayDropdown={this.displayDropdown} handleChange={this.handleChange} />
        </div>
        <div>
          {this.state.checkedIn && this.state.checkedOut ? 
            <PriceSummary nightlyPrice={nightlyPrice} cleaningFee={cleaningFee} serviceFee={serviceFee} /> : null}
        </div>
        <div>
          <ButtonSubmit type="submit">
            <span>Request to Book</span>
          </ButtonSubmit>
        </div>
        <div>
          <CenterText>You won't be charged yet</CenterText>
        </div>
      </form>
    );
  }
}

export default Book;
