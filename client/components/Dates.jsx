import React from 'react';
import { BoldText, BoxWrapper, FlexBox, CalSelect, TextSelect } from './styled/Styled.jsx';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import './styled/react_dates_overrides.css';

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }

  render() {
    return (
      <div>
        <div style={{ marginBottom: '5px' }}>
          <BoldText>Dates</BoldText>
        </div>
        <BoxWrapper>
          <DateRangePicker
            startDateId="startDate"
            endDateId="endDate"
            startDatePlaceholderText="Check in"
            endDatePlaceholderText="Check out"
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            numberOfMonths={1}
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
            readOnly={true}
            showClearDates={true}
            noBorder={true}
          />
        </BoxWrapper>
      </div>
    );
  }
}

export default Dates;
