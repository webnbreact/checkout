import React from 'react';
import Header from './Header.jsx';
import Book from './Book.jsx';
import {
  Module, MainWrapper, FlagWidget, ButtonUnderline, Divider,
} from './styled/Styled.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nightlyPrice: '',
      pastWeekViews: '',
      cleaningFee: '',
      serviceFee: '',
      lastUpdated: '',
      reviewCount: '',
      avgRating: '',
    };
  }

  componentDidMount() {
    const roomId = window.location.pathname.slice(7, -1);
    fetch(`/rooms/${roomId || 100}/booking`)
      .then((data) => {
        return data.json();
      }).then((roomInfo) => {
        const { nightly_price, past_week_views, cleaning_fee, service_fee, last_updated, review_count, avg_rating } = roomInfo[0];
        this.setState({
          nightlyPrice: nightly_price,
          pastWeekViews: past_week_views,
          cleaningFee: cleaning_fee,
          serviceFee: service_fee,
          lastUpdated: last_updated,
          reviewCount: review_count,
          avgRating: avg_rating,
        });
      }).catch((err) => { throw err; });
  }

  render() {
    return (
      <MainWrapper>
        <Module>
          <div>
            <div>
              <Header state={this.state} />
              <Divider />
              <Book state={this.state} />
            </div>
          </div>
        </Module>
        <FlagWidget>
          <ButtonUnderline>
            <i className="far fa-flag" />
            <span> Report this listing</span>
          </ButtonUnderline>
        </FlagWidget>
      </MainWrapper>
    );
  }
}

export default App;
