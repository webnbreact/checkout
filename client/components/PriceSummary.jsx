import React from 'react';
import { Divider, PriceSummaryStyle, PriceSummaryLine } from './styled/Styled.jsx';

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
      </div>
      <div>
        <span></span>
      </div>
    </PriceSummaryLine>
    <Divider />
    <PriceSummaryLine>
      <div>
        <span>Service fee</span>
      </div>
      <div>
        <span></span>
      </div>
    </PriceSummaryLine>
    <Divider />
    <PriceSummaryLine>
      <div>
        <span>Total</span>
      </div>
      <div>
        <span></span>
      </div>
    </PriceSummaryLine>
  </PriceSummaryStyle>
);

export default PriceSummary;