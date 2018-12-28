import React from 'react';
import { Divider, FlexBox, BoldText, Text } from './styled/Styled.jsx';

const HighViews = ({ pastWeekViews }) => (
  <div>
    <Divider style={{ margin: '25px 0' }} />
    <FlexBox style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
      <div>
        <BoldText style={{ fontSize: '14.5px' }}>
          This home is on people's minds.
        </BoldText>
        <Text>
          It's been viewed { pastWeekViews } times in the past
          <br />
          week.
        </Text>
      </div>
      <div style={{ fontSize: '2.25em', padding: '8px' }}>
        <i className="far fa-lightbulb" />
      </div>
    </FlexBox>
  </div>
);

export default HighViews;
