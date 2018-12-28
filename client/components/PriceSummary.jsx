import React from 'react';
import {
  Divider, PriceSummaryStyle, PriceSummaryLine, ButtonQuest,
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
    <Divider />
    <PriceSummaryLine>
      <div>
        <span>Cleaning fee</span>
        <ButtonQuest>
          <i className="far fa-question-circle" />
        </ButtonQuest>
      </div>
      <div>
        <span>${cleaningFee}</span>
      </div>
    </PriceSummaryLine>
    <Divider />
    <PriceSummaryLine>
      <div>
        <span className="service-fee">Service fee</span>
        <ButtonQuest>
          <i className="far fa-question-circle" />
        </ButtonQuest>
      </div>
      <div>
        <span>${serviceFee}</span>
      </div>
    </PriceSummaryLine>
    <Divider />
    <PriceSummaryLine style={{ fontWeight: '500' }}>
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
