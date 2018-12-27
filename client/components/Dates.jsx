import React from 'react';
import { Text, BoxWrapper, FlexBox, CalSelect } from './styled/Styled.jsx';

const Dates = () => (
  <div>
    <div style={{ marginBottom: '5px' }}>
      <Text>Dates</Text>
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
