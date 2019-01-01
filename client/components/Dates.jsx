import React from 'react';
import moment from 'moment';
import { BoldText, BoxWrapper, TimeAgoStyle } from './styled/Styled.jsx';

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
    const timeAgo = moment(this.props.lastUpdated).fromNow();
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
            customCloseIcon={<i className="far fa-calendar-times clear-cal" />}
            renderCalendarInfo={() => (<TimeAgoStyle>Updated {timeAgo}</TimeAgoStyle>)}
          />
        </BoxWrapper>
      </div>
    );
  }
}

export default Dates;
