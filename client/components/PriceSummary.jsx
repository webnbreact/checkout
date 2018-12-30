import React from 'react';
import {
  PriceSummDivider, PriceSummaryStyle, PriceSummaryLine, ButtonQuest
} from './styled/Styled.jsx';

const PriceSummary = ({ nightlyPrice, cleaningFee, serviceFee }) => (
  <PriceSummaryStyle>
    <PriceSummaryLine>
      <div>
        <span>${nightlyPrice} x {1} night{''}</span>
      </div>
      <div>
        <span>${nightlyPrice}</span>
      </div>
    </PriceSummaryLine>
    <PriceSummDivider />
    <PriceSummaryLine>
      <div>
        <span>Cleaning fee</span>
        <ButtonQuest
          type="button"
          data-toggle="tooltip"
          className="red-tooltip"
          title="One-time fee charged by host to cover the cost of cleaning their space."
        >
          <i className="far fa-question-circle" />
        </ButtonQuest>
      </div>
      <div>
        <span>${cleaningFee}</span>
      </div>
    </PriceSummaryLine>
    <PriceSummDivider />
    <PriceSummaryLine>
      <div>
        <span className="service-fee">Service fee</span>
        <ButtonQuest
          type="button"
          data-toggle="tooltip"
          title="This helps us run our platform and offer services like 24/7 support on your trip."
        >
          <i className="far fa-question-circle" />
        </ButtonQuest>
      </div>
      <div>
        <span>${serviceFee}</span>
      </div>
    </PriceSummaryLine>
    <PriceSummDivider />
    <PriceSummaryLine style={{ fontWeight: '600' }}>
      <div>
        <span className="total">Total</span>
      </div>
      <div>
        <span>${nightlyPrice + cleaningFee + serviceFee}</span>
      </div>
    </PriceSummaryLine>
  </PriceSummaryStyle>
);

export default PriceSummary;
