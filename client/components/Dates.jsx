import React from 'react';
import { BoldText, BoxWrapper, FlexBox, CalSelect, TextSelect } from './styled/Styled.jsx';

const Dates = () => (
  <div>
    <div style={{ marginBottom: '5px' }}>
      <BoldText>Dates</BoldText>
    </div>
    <BoxWrapper>
      <FlexBox>
        <TextSelect>
          <CalSelect type="text" placeholder="Check in" autoComplete="off" style={{ float: 'left' }} />
        </TextSelect>
        <div style={{ marginTop: '6.5px' }}>
          <i className="fas fa-arrow-right" style={{ fontSize: '1.8em' }} />
        </div>
        <TextSelect>
          <CalSelect type="text" placeholder="Check out" autoComplete="off" style={{ float: 'right' }} />
        </TextSelect>
      </FlexBox>
    </BoxWrapper>
  </div>
);

export default Dates;
