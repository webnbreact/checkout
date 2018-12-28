import React from 'react';
import { BoldText, BoxWrapper, FlexBox, CalSelect } from './styled/Styled.jsx';

const Dates = () => (
  <div>
    <div style={{ marginBottom: '5px' }}>
      <BoldText>Dates</BoldText>
    </div>
    <BoxWrapper>
      <FlexBox>
        <div>
          <CalSelect type="text" placeholder="Check in" autoComplete="off" style={{ float: 'left' }} />
        </div>
        <div style={{ marginTop: '5px' }}>
          <i className="fas fa-arrow-right" style={{ fontSize: '1.95em' }} />
        </div>
        <div>
          <CalSelect type="text" placeholder="Check out" autoComplete="off" style={{ float: 'right' }} />
        </div>
      </FlexBox>
    </BoxWrapper>
  </div>
);

export default Dates;
